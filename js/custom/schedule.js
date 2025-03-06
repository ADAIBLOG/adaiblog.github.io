const CountdownTimer = (() => {

  const config = {

    // 设定特定日子，格式如下，无设定状态下必须引用lunar(https://cdn.jsdelivr.net/gh/6tail/lunar-javascript@master/lunar.js)
    // targetDate: "2025-01-29",
    // targetName: "春节"
    targetDate: "",
    targetName: "",

    units: {
      day: {text: "今日", divider: 1, unit: "小时"},
      week: {text: "本周", divider: 24, unit: "天"},
      month: {text: "本月", divider: 24, unit: "天"},
      year: {text: "本年", divider: 24, unit: "天"}
    },
    countdownText: {
      future: "距离",
      today: ""
    }
  };

  function DateFormatter(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`
  }

  function getNextFestival() {
    const today = new Date();

    function getNextTypeFestivals(type) {
      let checkDate = new Date(today);
      for (let i = 0; i < 60; i++) {
        checkDate.setDate(checkDate.getDate() + 1);
        if (type === 'solar') {
          const currentSolar = Solar.fromDate(checkDate);
          const festivals = currentSolar.getFestivals();
          if (festivals.length > 0) {
            return festivals.slice(0, 1).map(name => ({
              name,
              type,
              date: DateFormatter(checkDate),
              timestamp:  checkDate.getTime()
            }))[0];
          }
        } else if (type === 'lunar') {
          const currentLunar = Lunar.fromDate(checkDate);
          const festivals = currentLunar.getFestivals();
          if (festivals.length > 0) {
            return festivals.slice(0, 1).map(name => ({
              name,
              type,
              date: DateFormatter(checkDate),
              timestamp: checkDate.getTime()
            }))[0];
          }
        }
      }
    }

    const currentSolar = Solar.fromDate(today);
    const currentLunar = Lunar.fromDate(today);

    let solarFestivals = currentSolar.getFestivals()
        .slice(0, 1)
        .map(name => ({
          name,
          type: 'solar',
          date: DateFormatter(today),
          timestamp: today.getTime()
        }));

    let lunarFestivals = currentLunar.getFestivals()
        .slice(0, 1)
        .map(name => ({
          name,
          type: 'lunar',
          date: DateFormatter(today),
          timestamp: today.getTime()
        }));

    // 如果当天没有阳历或农历节日，寻找下一个
    if (solarFestivals.length === 0) {
      const nextSolar = getNextTypeFestivals('solar');
      solarFestivals = nextSolar ? [nextSolar] : [];
    }
    if (lunarFestivals.length === 0) {
      const nextLunar = getNextTypeFestivals('lunar');
      lunarFestivals = nextLunar ? [nextLunar] : [];
    }

    const nextJieQi = currentLunar.getNextJieQi();
    const jieQiFestival = {
      name: nextJieQi.getName(),
      type: 'jieqi',
      date: nextJieQi.getSolar().toYmd(),
      timestamp: new Date(nextJieQi.getSolar().getYear(), nextJieQi.getSolar().getMonth() - 1, nextJieQi.getSolar().getDay()).getTime()
    };

    const allFestivals = [...solarFestivals, ...lunarFestivals, jieQiFestival]
      .filter(f => f !== undefined);  // 新增过滤

    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const todayEnd = todayStart + 24 * 60 * 60 * 1000 - 1;

    const todayFestival = allFestivals.find(f =>
        f.timestamp >= todayStart && f.timestamp <= todayEnd
    );

    if (todayFestival) {
      return todayFestival;
    }

    return allFestivals
        .filter(f => f.timestamp > today.getTime())
        .sort((a, b) => a.timestamp - b.timestamp)[0];
  };

  function getTimeUnit(unit) {
    const now = new Date();

    if (unit === 'day') {
      const currentHour = now.getHours();
      return {
        name: config.units[unit].text,
        remaining: 24 - currentHour,
        percentage: ((currentHour / 24) * 100).toFixed(2),
        unit: config.units[unit].unit
      };
    }

    // 计算周、月、年的开始和结束时间
    let start = new Date(now);
    let end = new Date(now);

    // 获取当前日期的开始时间（0点）
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const currentDay = now.getDay() || 7; // 将周日的0转换为7

    switch(unit) {
      case 'week':
        // 获取本周一和周日
        start = new Date(today.setDate(today.getDate() - (currentDay - 1)));
        end = new Date(start);
        end.setDate(start.getDate() + 6);
        break;

      case 'month':
        // 获取本月剩余天数（从明天开始算）
        start = today;
        start.setDate(start.getDate() + 1); // 从明天开始
        end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
        break;

      case 'year':
        // 获取本年剩余天数（从明天开始算）
        start = today;
        start.setDate(start.getDate() + 1); // 从明天开始
        end = new Date(start.getFullYear(), 11, 31);
        break;
    }

    // 重置时间为当天的开始和结束
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);

    let remainingDays;
    let totalDays;
    let passedDays;

    if (unit === 'week') {
      totalDays = 7;
      passedDays = currentDay;
      remainingDays = 7 - currentDay;
    } else if (unit === 'month') {
      totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      passedDays = now.getDate();
      remainingDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;
    } else if (unit === 'year') {
      totalDays = (new Date(now.getFullYear(), 11, 31) - new Date(now.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000) + 1;
      passedDays = (today - new Date(now.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000) + 1;
      remainingDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;
    }

    // 计算百分比
    const percentage = (passedDays / totalDays) * 100;

    return {
      name: config.units[unit].text,
      remaining: remainingDays,
      percentage: percentage.toFixed(2),
      unit: config.units[unit].unit
    };
  }

  function injectStyles() {
    const styles = `
            .card-countdown .item-content {
                display: flex;
            }
            .cd-count-left {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-right: 0.8rem;
                line-height: 1.5;
                align-items: center;
                justify-content: center;
                min-height: 120px;
            }
            .cd-count-left .cd-text {
                font-size: 14px;
                display: block;
            }
            .cd-count-left .cd-name {
                font-weight: bold;
                font-size: 18px;
            }
            .cd-count-left .cd-time {
                font-size: 30px;
                font-weight: bold;
                color: var(--anzhiyu-main);
            }
            .cd-count-left .cd-date {
                font-size: 12px;
                opacity: 0.6;
            }
            .cd-count-left::after {
                content: "";
                position: absolute;
                right: -0.8rem;
                width: 2px;
                height: 80%;
                background-color: var(--anzhiyu-main);
                opacity: 0.5;
            }
            .cd-count-right {
                flex: 1;
                margin-left: .8rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .cd-count-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 24px;
            }
            .cd-item-name {
                font-size: 14px;
                margin-right: 0.8rem;
                white-space: nowrap;
            }
            .cd-item-progress {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                width: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-background);
                overflow: hidden;
            }
            .cd-progress-bar {
                height: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-main);
            }
            .cd-percentage,
            .cd-remaining {
                position: absolute;
                font-size: 12px;
                margin: 0 6px;
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
            .cd-many {
                color: #fff;
            }
            .cd-percentage {
                opacity: 0;
                transform: translateX(10px);
            }
            .card-countdown .item-content:hover .cd-percentage {
                transform: translateX(0);
                opacity: 1;
            }
            .card-countdown .item-content:hover .cd-remaining {
                transform: translateX(-10px);
                opacity: 0;
            }
        `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  function updateCountdown() {
    const elements = ['eventName', 'eventDate', 'daysUntil', 'countRight', 'countdownText']
        .map(id => document.getElementById(id));

    if (elements.some(el => !el)) return;

    const [eventName, eventDate, daysUntil, countRight, countdownText] = elements;
    // 优先使用 targetDate 和 targetName
    if (config.targetDate && config.targetName) {
      const targetTimestamp = new Date(config.targetDate).getTime();
      nextFestival = {
        name: config.targetName,
        date: config.targetDate,
        timestamp: targetTimestamp
      };
    } else {
      nextFestival = getNextFestival();
    }
    const timeData = Object.keys(config.units).reduce((acc, unit) => ({
      ...acc,
      [unit]: getTimeUnit(unit)
    }), {});

    if (nextFestival) {
      const days = Math.ceil((nextFestival.timestamp - Date.now()) / (24 * 60 * 60 * 1000));
      const isToday = days === 0;

      countdownText.textContent = isToday ? config.countdownText.today : config.countdownText.future;
      eventName.textContent = nextFestival.name;
      eventDate.textContent = nextFestival.date;
      daysUntil.textContent = isToday ? "今天" : days;
    }

    countRight.innerHTML = Object.entries(timeData)
        .map(([_, item]) => `
        <div class="cd-count-item">
          <div class="cd-item-name">${item.name}</div>
          <div class="cd-item-progress">
            <div class="cd-progress-bar" style="width: ${item.percentage}%; opacity: ${item.percentage / 100}"></div>
            <span class="cd-percentage ${item.percentage >= 46 ? 'cd-many' : ''}">${item.percentage}%</span>
            <span class="cd-remaining ${item.percentage >= 60 ? 'cd-many' : ''}">
              <span class="cd-tip">还剩</span>${item.remaining}<span class="cd-tip">${item.unit}</span>
            </span>
          </div>
        </div>
      `).join('');
  }

  let timer;
  const start = () => {
    injectStyles();
    updateCountdown();
    timer = setInterval(updateCountdown, 600000);
  };

  ['pjax:complete', 'DOMContentLoaded'].forEach(event =>
      document.addEventListener(event, start)
  );
  document.addEventListener('pjax:send', () => timer && clearInterval(timer));

  return {
    start,
    stop: () => timer && clearInterval(timer),
    getNextFestival
  };
})();
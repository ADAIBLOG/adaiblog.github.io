window.addEventListener("load", () => {
  let loadFlag = false;
  let dataObj = [];
  const $searchMask = document.getElementById("search-mask");

  const openSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    anzhiyu.animateIn($searchMask, "to_show 0.5s");
    anzhiyu.animateIn(document.querySelector("#local-search .search-dialog"), "titleScale 0.5s");
    setTimeout(() => {
      document.querySelector("#local-search-input input").focus();
    }, 100);
    if (!loadFlag) {
      search();
      loadFlag = true;
    }
    // shortcut: ESC
    document.addEventListener("keydown", function f(event) {
      if (event.code === "Escape") {
        closeSearch();
        document.removeEventListener("keydown", f);
      }
    });
  };

  const closeSearch = () => {
    const bodyStyle = document.body.style;
    bodyStyle.width = "";
    bodyStyle.overflow = "";
    anzhiyu.animateOut(document.querySelector("#local-search .search-dialog"), "search_close .5s");
    anzhiyu.animateOut($searchMask, "to_hide 0.5s");
  };

  const searchClickFn = () => {
    document.querySelector("#search-button > .search").addEventListener("click", openSearch);
    document.querySelector("#menu-search").addEventListener("click", openSearch);
  };

  const searchClickFnOnce = () => {
    document.querySelector("#local-search .search-close-button").addEventListener("click", closeSearch);
    $searchMask.addEventListener("click", closeSearch);
    if (GLOBAL_CONFIG.localSearch.preload) dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
  };

  // check url is json or not
  const isJson = url => {
    const reg = /\.json$/;
    return reg.test(url);
  };

  const fetchData = async path => {
    let data = [];
    const response = await fetch(path);
    if (isJson(path)) {
      data = await response.json();
    } else {
      const res = await response.text();
      const t = await new window.DOMParser().parseFromString(res, "text/xml");
      const a = await t;

      data = [...a.querySelectorAll("entry")].map(item => {
        let tagsArr = [];
        if (item.querySelector("tags") && item.querySelector("tags").getElementsByTagName("tag")) {
          Array.prototype.forEach.call(item.querySelector("tags").getElementsByTagName("tag"), function (item, index) {
            tagsArr.push(item.textContent);
          });
        }
        let content = item.querySelector("content") && item.querySelector("content").textContent;
        let imgReg = /<img.*?(?:>|\/>)/gi; //匹配图片中的img标签
        let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; // 匹配图片中的src
        let arr = content.match(imgReg); //筛选出所有的img

        let srcArr = [];
        if (arr) {
          for (let i = 0; i < arr.length; i++) {
            let src = arr[i].match(srcReg);
            // 获取图片地址
            if (!src[1].indexOf("http")) srcArr.push(src[1]);
          }
        }

        return {
          title: item.querySelector("title").textContent,
          content: content,
          url: item.querySelector("url").textContent,
          tags: tagsArr,
          oneImage: srcArr && srcArr[0],
        };
      });
    }
    if (response.ok) {
      const $loadDataItem = document.getElementById("loading-database");
      $loadDataItem.nextElementSibling.style.display = "block";
      $loadDataItem.remove();
    }
    return data;
  };

  // 提取内容摘要函数
  const extractContentSnippet = (content, keywords, maxLength = 150) => {
    // 清理HTML标签
    let cleanContent = content.replace(/<[^>]*>/g, '');
    
    // 查找第一个关键词的位置
    let firstKeywordPos = -1;
    for (let keyword of keywords) {
      let pos = cleanContent.indexOf(keyword);
      if (pos !== -1 && (firstKeywordPos === -1 || pos < firstKeywordPos)) {
        firstKeywordPos = pos;
      }
    }
    
    if (firstKeywordPos === -1) {
      // 如果没有找到关键词，返回开头部分
      return cleanContent.substring(0, maxLength) + (cleanContent.length > maxLength ? '...' : '');
    }
    
    // 计算摘要的起始位置，确保关键词在中间位置
    let startPos = Math.max(0, firstKeywordPos - Math.floor(maxLength / 3));
    let endPos = Math.min(cleanContent.length, startPos + maxLength);
    
    // 调整起始位置，确保不会截断单词
    if (startPos > 0) {
      let spacePos = cleanContent.lastIndexOf(' ', startPos);
      if (spacePos !== -1 && spacePos > startPos - 20) {
        startPos = spacePos + 1;
      }
    }
    
    let snippet = cleanContent.substring(startPos, endPos);
    
    // 高亮关键词
    keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      snippet = snippet.replace(regex, match => `<span class="search-keyword">${match}</span>`);
    });
    
    // 添加省略号
    if (startPos > 0) snippet = '...' + snippet;
    if (endPos < cleanContent.length) snippet = snippet + '...';
    
    return snippet;
  };

  const search = () => {
    if (!GLOBAL_CONFIG.localSearch.preload) {
      dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
    }
    const $input = document.querySelector("#local-search-input input");
    const $resultContent = document.getElementById("local-search-results");
    const $loadingStatus = document.getElementById("loading-status");
    let searchType = 'title'; // 默认搜索类型为标题

    // 搜索选项切换
    document.querySelectorAll('.search-option').forEach(button => {
      button.addEventListener('click', function() {
        // 移除所有按钮的active类
        document.querySelectorAll('.search-option').forEach(btn => {
          btn.classList.remove('active');
        });
        // 为当前按钮添加active类
        this.classList.add('active');
        // 更新搜索类型
        searchType = this.getAttribute('data-search-type');
        // 如果搜索框有内容，重新搜索
        if ($input.value.trim() !== '') {
          $input.dispatchEvent(new Event('input'));
        }
      });
    });
  
    // 每次输入时触发
    $input.addEventListener("input", function () {
      const keywords = this.value.trim().toLowerCase().split(/[\s]+/);
      
      // 如果搜索框为空，清空结果并不显示任何内容
      if (keywords[0] === "") {
        $resultContent.innerHTML = "";
        $loadingStatus.innerHTML = "";
        return;
      }
  
      // 显示加载状态
      if (keywords[0] !== "") {
        $loadingStatus.innerHTML = '<i class="anzhiyufont anzhiyu-icon-spinner anzhiyu-pulse-icon"></i>';
      }
  
      $resultContent.innerHTML = "";
      let str = '<div class="search-result-list">';
      let count = 0;
  
      // 执行本地搜索
      dataObj.then(data => {
        data.forEach(data => {
          let isMatch = true;
          let dataTitle = data.title ? data.title.trim().toLowerCase() : "";
          let dataContent = data.content ? data.content.trim().toLowerCase() : "";
          const dataUrl = data.url.startsWith("/") ? data.url : GLOBAL_CONFIG.root + data.url;
          
          // 根据搜索类型进行匹配
          if (searchType === 'title') {
            // 仅匹配标题
            keywords.forEach((keyword, i) => {
              if (dataTitle.indexOf(keyword) < 0) {
                isMatch = false;
              }
            });
          } else if (searchType === 'content') {
            // 匹配内容
            keywords.forEach((keyword, i) => {
              if (dataContent.indexOf(keyword) < 0) {
                isMatch = false;
              }
            });
          }
  
          // 显示搜索结果
          if (isMatch) {
            str += '<div class="local-search__hit-item">';
            str +=
              '<div class="search-right" style="width: 100%"><a href="' +
              dataUrl +
              '" class="search-result-title">' +
              dataTitle +
              "</a>";
            
            // 如果是内容搜索，显示内容摘要
            if (searchType === 'content' && dataContent) {
              let contentSnippet = extractContentSnippet(data.content, keywords);
              str += '<div class="search-result-content">' + contentSnippet + '</div>';
            }
            
            count += 1;
            str += "</div></div>";
          }
        });
  
        // 如果没有匹配结果，显示 "未找到"
        if (count === 0) {
          str +=
            '<div id="local-search__hits-empty">' +
            GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) +
            "</div>";
        } else {
          // 显示匹配的数量
          str += '<div class="search-result-count">共找到 ' + count + ' 个结果</div>';
        }
  
        str += "</div>";
        $resultContent.innerHTML = str;
  
        // 搜索完成后清除加载状态
        if (keywords[0] !== "") $loadingStatus.innerHTML = "";
  
        window.pjax && window.pjax.refresh($resultContent);
      });
    });
  };

  searchClickFn();
  searchClickFnOnce();

  // pjax
  window.addEventListener("pjax:complete", () => {
    !anzhiyu.isHidden($searchMask) && closeSearch();
    searchClickFn();
  });
});

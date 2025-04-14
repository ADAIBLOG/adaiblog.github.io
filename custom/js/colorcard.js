/* color-cards.css */
.hrxo-color-card-grid {
  display: grid;
  gap: 16px;
  padding: 16px;
  width: 100%;
  /* 默认移动端：每行1个 */
  grid-template-columns: repeat(1, 1fr);
}

.hrxo-color-card {
  position: relative;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  min-height: 160px;
  min-width: 280px; /* 增加卡片最小宽度 */
  overflow: hidden;
  color: white;
  transition: all 0.3s ease;
}

/* 小屏幕手机横屏/小平板：宽度≥480px时每行2个 */
@media (min-width: 480px) {
  .hrxo-color-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 平板：宽度≥768px时每行2个 */
@media (min-width: 768px) {
  .hrxo-color-card-grid {
    gap: 24px;  /* 增大间距 */
    padding: 24px;
  }
  .hrxo-color-card {
    min-width: 300px; /* 增大卡片宽度 */
    padding: 2rem;   /* 增大内边距 */
  }
}

/* 小桌面：宽度≥1024px时每行2个（保持2列让卡片更宽） */
@media (min-width: 1024px) {
  .hrxo-color-card-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }
  .hrxo-color-card {
    min-width: 320px;
  }
}

/* 大桌面：宽度≥1280px时每行3个 */
@media (min-width: 1280px) {
  .hrxo-color-card-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1400px;
  }
  .hrxo-color-card {
    min-width: 340px;
  }
}

/* 超宽屏：宽度≥1600px时每行4个 */
@media (min-width: 1600px) {
  .hrxo-color-card-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1600px;
  }
  .hrxo-color-card {
    min-width: 360px;
  }
}

/* 卡片内容样式调整 */
.hrxo-color-card-header {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.6rem;  /* 增大字体 */
  font-weight: 600;
  margin-bottom: 1.2rem;
}

.hrxo-color-card-values {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 1.2rem;  /* 增大内边距 */
  border-radius: 10px;  /* 增大圆角 */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;  /* 增大间距 */
}

.hrxo-color-card-label {
  font-size: 0.85rem;  /* 增大字体 */
}

.hrxo-color-card-data {
  font-size: 1rem;  /* 增大字体 */
}
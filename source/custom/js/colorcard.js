// color-cards.js
document.addEventListener('DOMContentLoaded', function() {
  const contentContainers = document.querySelectorAll('.hrxo-color-card-grid');
  
  contentContainers.forEach(container => {
    const html = container.innerHTML;
    const regex = /\{colorcard\s+(.*?)\}/g;
    
    const newHtml = html.replace(regex, (match, params) => {
      const cardData = parseColorCardParams(params);
      return generateColorCardHTML(cardData);
    });
    
    container.innerHTML = newHtml;
  });
});

function parseColorCardParams(params) {
  const data = {
    name: '颜色',
    color: '#000000',
    hex: '',
    rgb: '',
    cmyk: null
  };
  
  const paramRegex = /(\w+)=["'](.*?)["']/g;
  let match;
  
  while ((match = paramRegex.exec(params)) !== null) {
    const key = match[1].toLowerCase();
    const value = match[2];
    
    switch(key) {
      case 'name': 
        data.name = value; 
        break;
      case 'color':
      case 'hex': 
        data.color = value.startsWith('#') ? value : `#${value}`;
        data.hex = data.color.toUpperCase();
        break;
      case 'rgb': 
        data.rgb = value.replace(/rgb\(|\)/g, ''); 
        break;
      case 'cmyk': 
        data.cmyk = value.replace(/cmyk\(|\)/g, '');
        break;
    }
  }
  
  if (!data.rgb) {
    data.rgb = convertHexToRgb(data.color);
  }
  
  return data;
}

function generateColorCardHTML(data) {
  const hasCMYK = data.cmyk !== null;
  return `
    <div class="hrxo-color-card" style="--card-bg:${data.color}">
      <div class="hrxo-color-card-overlay"></div>
      <div class="hrxo-color-card-header">${data.name}</div>
      <div class="hrxo-color-card-values ${hasCMYK ? 'has-cmyk' : ''}">
        <div class="hrxo-color-item">
          <div class="hrxo-color-card-label">HEX</div>
          <div class="hrxo-color-card-data">${data.hex}</div>
        </div>
        <div class="hrxo-color-item">
          <div class="hrxo-color-card-label">RGB</div>
          <div class="hrxo-color-card-data">${data.rgb}</div>
        </div>
        ${hasCMYK ? `
        <div class="hrxo-color-item">
          <div class="hrxo-color-card-label">CMYK</div>
          <div class="hrxo-color-card-data">${data.cmyk}</div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function convertHexToRgb(hex) {
  hex = hex.replace('#', '');
  
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  
  return `${r}, ${g}, ${b}`;
}
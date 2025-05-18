const RevealLogo = (() => {
  const init = () => {
    const config = Reveal.getConfig().logo || {};
    const showOnAll = config.show_on_all ?? true;
    const layout = config.layout === 'vertical' ? 'vertical' : 'horizontal';
    const logoDefs = config.logos || {};

    // Create container
    const container = document.createElement('div');
    container.id = 'logo-container';
    container.style.position = 'fixed';
    container.style.top = '7px';
    container.style.right = '20px';
    // container.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    container.style.display = 'flex';
    container.style.flexDirection = layout === 'vertical' ? 'column' : 'row';
    container.style.gap = '10px';
    container.style.zIndex = '1000';
    container.style.display = 'none'; // initially hidden
    document.querySelector('.reveal').appendChild(container);

    // Create logo elements
    const logos = {};
    for (const [key, def] of Object.entries(logoDefs)) {
      const img = document.createElement('img');
      img.src = def.src || 'logo.png';
      img.style.width = def.width || '100px';
      img.style.height = def.height || 'auto';
      img.style.display = 'none'; // visibility handled later
      for (const [styleKey, styleValue] of Object.entries(def.style || {})) {
        img.style[styleKey] = styleValue;
      }

      container.appendChild(img);
      logos[key] = img;
    }

    const updateLogoVisibility = (slide) => {
      const logosAttr = slide.getAttribute('data-logos');
      const hideAll = logosAttr === 'none';
      const activeKeys = (logosAttr || '')
        .split(',')
        .map((k) => k.trim())
        .filter((k) => k && k !== 'none');

      const showAll = showOnAll && !logosAttr;

      let anyVisible = false;

      for (const [key, img] of Object.entries(logos)) {
        if (hideAll) {
          img.style.display = 'none';
        } else if (showAll || activeKeys.includes(key)) {
          img.style.display = 'block';
          anyVisible = true;
        } else {
          img.style.display = 'none';
        }
      }

      container.style.display = hideAll || !anyVisible ? 'none' : 'flex';
    };

    Reveal.on('slidechanged', (event) => {
      updateLogoVisibility(event.currentSlide);
    });

    Reveal.on('ready', (event) => {
      updateLogoVisibility(event.currentSlide);
    });
  };

  return {
    id: 'logo',
    init: init,
  };
})();

const detailState = {
  lang: localStorage.getItem('smvh-lang') || 'vi'
};

const detailRoot = document.getElementById('detailPage');

function t(key) {
  return appContent.translations[detailState.lang][key] || key;
}

function updateBaseTranslations() {
  document.documentElement.lang = detailState.lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === detailState.lang);
  });
}

function getPlace() {
  const slug = new URLSearchParams(window.location.search).get('place') || appContent.places[0].slug;
  return appContent.places.find((item) => item.slug === slug);
}

function renderNotFound() {
  detailRoot.innerHTML = `
    <section class="detail-not-found">
      <div class="container">
        <div class="content-block">
          <h1>${detailState.lang === 'vi' ? 'Không tìm thấy địa điểm' : 'Place not found'}</h1>
          <p>${detailState.lang === 'vi' ? 'Liên kết không hợp lệ hoặc dữ liệu địa điểm chưa được cấu hình.' : 'The link is invalid or the destination data has not been configured.'}</p>
          <a class="hero-cta" href="index.html">${t('detailBack')}</a>
        </div>
      </div>
    </section>
  `;
}

function factItem(label, value, columnClass = 'col-md-6 col-xl-3') {
  return `
    <div class="${columnClass}">
      <div class="detail-fact">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    </div>
  `;
}

function shareUrl() {
  return window.location.href;
}

function renderDetailPage() {
  const place = getPlace();
  updateBaseTranslations();

  if (!place) {
    renderNotFound();
    return;
  }

  document.title = `${place.title[detailState.lang]} | Sắc Màu Văn Hóa`;

  detailRoot.innerHTML = `
    <section class="detail-hero" style="background-image: url('${place.coverImages[0]}')">
      <div class="container">
        <div class="detail-badges">
          <span class="detail-badge">${place.recognizedYear}</span>
        </div>
        <h1 class="detail-title">${place.title[detailState.lang]}</h1>
        <div class="detail-address">● ${place.address[detailState.lang]}</div>
        <p class="detail-summary">${place.intro[detailState.lang]}</p>
      </div>
    </section>

    <section class="container">
      <div class="detail-fact-grid">
        <div class="row g-3">
          ${factItem(t('detailBuilt'), place.builtYear, 'col-md-6 col-lg-4')}
          ${factItem(t('detailRecognized'), place.recognizedYear, 'col-md-6 col-lg-4')}
          ${factItem(t('detailOpening'), place.openingHours[detailState.lang], 'col-md-12 col-lg-4')}
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="content-block">
              <h2>${t('detailHistoricalOrigin')}</h2>
              <p>${place.history[detailState.lang]}</p>
              <img class="article-image" src="${place.articleImage}" alt="${place.title[detailState.lang]}">
              <div class="highlight-quote">${place.shortDescription[detailState.lang]}</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="content-block h-100">
              <h2>${t('detailCulturalMeaning')}</h2>
              <p>${place.culturalMeaning[detailState.lang]}</p>
              <a class="outline-button mt-3" href="index.html">${t('detailBack')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space pt-0">
      <div class="container">
        <div class="gallery-card">
          <div class="section-head-inline">
            <h2>${t('detailGalleryVideo')}</h2>
          </div>
          <div class="gallery-grid">
            ${place.gallery.map((image) => `<img src="${image}" alt="${place.title[detailState.lang]}">`).join('')}
          </div>
          <div class="video-card mt-4">
            <div class="section-head-inline">
              <h2>${t('detailVideoLabel')}</h2>
            </div>
            <a class="video-thumb" href="${place.videoUrl}" target="_blank" rel="noreferrer">
              <img src="${place.videoThumbnail}" alt="${place.title[detailState.lang]}">
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space pt-0">
      <div class="container">
        <div class="map-card">
          <div class="section-head-inline">
            <h2>${t('detailMap')}</h2>
            <a href="https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}" target="_blank" rel="noreferrer">${t('detailOpenMap')}</a>
          </div>
          <iframe src="${place.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="section-space pt-0">
      <div class="container">
        <div class="share-card share-card-compact">
          <div class="section-head-inline section-head-centered">
            <h2>${t('detailShare')}</h2>
          </div>
          <div class="share-actions share-actions-centered">
            <a
              class="share-button"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}"
              aria-label="${t('shareFacebook')}"
              title="${t('shareFacebook')}"
            >
              <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
              <span class="visually-hidden">${t('shareFacebook')}</span>
            </a>
            <a
              class="share-button"
              target="_blank"
              rel="noreferrer"
              href="https://zalo.me/share?url=${encodeURIComponent(shareUrl())}"
              aria-label="${t('shareZalo')}"
              title="${t('shareZalo')}"
            >
              <span class="share-button-label" aria-hidden="true">Z</span>
              <span class="visually-hidden">${t('shareZalo')}</span>
            </a>
            <button class="share-button" type="button" id="copyLinkButton" aria-label="${t('shareCopy')}" title="${t('shareCopy')}">
              <i class="fa-solid fa-copy" aria-hidden="true"></i>
              <span class="visually-hidden">${t('shareCopy')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;

  bindDetailEvents(place);
}

function bindDetailEvents(place) {
  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      detailState.lang = button.dataset.lang;
      localStorage.setItem('smvh-lang', detailState.lang);
      renderDetailPage();
    });
  });

  const copyButton = document.getElementById('copyLinkButton');
  if (copyButton) {
    const copyDefaultMarkup = `
      <i class="fa-solid fa-copy" aria-hidden="true"></i>
      <span class="visually-hidden">${t('shareCopy')}</span>
    `;
    const copySuccessMarkup = `
      <i class="fa-solid fa-check" aria-hidden="true"></i>
      <span class="visually-hidden">${t('shareCopied')}</span>
    `;

    copyButton.addEventListener('click', async () => {
      await navigator.clipboard.writeText(shareUrl());
      copyButton.innerHTML = copySuccessMarkup;
      copyButton.setAttribute('aria-label', t('shareCopied'));
      copyButton.setAttribute('title', t('shareCopied'));
      copyButton.classList.add('is-copied');
      window.setTimeout(() => {
        copyButton.innerHTML = copyDefaultMarkup;
        copyButton.setAttribute('aria-label', t('shareCopy'));
        copyButton.setAttribute('title', t('shareCopy'));
        copyButton.classList.remove('is-copied');
      }, 1400);
    });
  }

  const myLocationButton = document.getElementById('myLocationButton');
  if (myLocationButton) {
    myLocationButton.addEventListener('click', () => {
      if (!navigator.geolocation) {
        return;
      }

      navigator.geolocation.getCurrentPosition(() => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`, '_blank', 'noopener,noreferrer');
      });
    });
  }
}

updateBaseTranslations();
renderDetailPage();

const appState = {
  lang: localStorage.getItem('smvh-lang') || 'vi',
  currentSlide: 0,
  currentPage: 1,
  searchTerm: ''
};

const homeElements = {
  heroTrack: document.getElementById('heroTrack'),
  heroDots: document.getElementById('heroDots'),
  prevSlide: document.getElementById('prevSlide'),
  nextSlide: document.getElementById('nextSlide'),
  placesGrid: document.getElementById('placesGrid'),
  pagination: document.getElementById('pagination'),
  searchInput: document.getElementById('searchInput'),
  contactForm: document.getElementById('contactForm'),
  slider: document.getElementById('heroSlider')
};

const ITEMS_PER_PAGE = 3;
let autoplayTimer = null;

function translate(key) {
  return appContent.translations[appState.lang][key] || key;
}

function updateStaticTranslations() {
  document.documentElement.lang = appState.lang;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translate(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = translate(key);
  });

  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === appState.lang);
  });
}

function renderHero() {
  homeElements.heroTrack.innerHTML = appContent.slides.map((slide) => `
    <article class="hero-slide">
      <div class="hero-slide-bg" style="background-image: url('${slide.image}')"></div>
      <div class="hero-content">
        <span class="eyebrow">...</span>
        <h2>${slide.title[appState.lang]}</h2>
        <p>${slide.subtitle[appState.lang]}</p>
        <a class="hero-cta" href="detail.html?place=${slide.slug}">${translate('readMore')}</a>
      </div>
    </article>
  `).join('');

  homeElements.heroDots.innerHTML = appContent.slides.map((_, index) => `
    <button class="hero-dot ${index === appState.currentSlide ? 'active' : ''}" type="button" data-slide-index="${index}"></button>
  `).join('');

  updateHeroPosition();
}

function updateHeroPosition() {
  homeElements.heroTrack.style.transform = `translateX(-${appState.currentSlide * 100}%)`;

  document.querySelectorAll('.hero-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === appState.currentSlide);
  });
}

function goToSlide(index) {
  const totalSlides = appContent.slides.length;
  appState.currentSlide = (index + totalSlides) % totalSlides;
  updateHeroPosition();
}

function startAutoplay() {
  stopAutoplay();
  autoplayTimer = window.setInterval(() => {
    goToSlide(appState.currentSlide + 1);
  }, 4500);
}

function stopAutoplay() {
  if (autoplayTimer) {
    window.clearInterval(autoplayTimer);
  }
}

function getFilteredPlaces() {
  const keyword = appState.searchTerm.trim().toLowerCase();

  return appContent.places.filter((place) => {
    const matchKeyword = !keyword || [
      place.title.vi,
      place.title.en,
      place.address.vi,
      place.address.en,
      place.shortDescription.vi,
      place.shortDescription.en
    ].join(' ').toLowerCase().includes(keyword);

    return matchKeyword;
  });
}

function placeCard(place) {
  return `
    <div class="col-md-6 col-xl-4">
      <article class="place-card">
        <img class="place-card-image" src="${place.image}" alt="${place.title[appState.lang]}">
        <div class="place-card-body">
          <h3 class="place-title">${place.title[appState.lang]}</h3>
          <div class="place-address">• ${place.address[appState.lang]}</div>
          <p>${place.shortDescription[appState.lang]}</p>
          <a class="outline-button" href="detail.html?place=${place.slug}">${translate('readMore')}</a>
        </div>
      </article>
    </div>
  `;
}

function renderPlaces() {
  const filtered = getFilteredPlaces();
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  appState.currentPage = Math.min(appState.currentPage, totalPages);

  const startIndex = (appState.currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (!visibleItems.length) {
    homeElements.placesGrid.innerHTML = `<div class="col-12"><div class="empty-state">${translate('noResults')}</div></div>`;
  } else {
    homeElements.placesGrid.innerHTML = visibleItems.map(placeCard).join('');
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    homeElements.pagination.innerHTML = '';
    return;
  }

  const buttons = [];
  buttons.push(`<button class="page-btn" type="button" data-page="${appState.currentPage - 1}">${translate('previous')}</button>`);

  for (let page = 1; page <= totalPages; page += 1) {
    buttons.push(`<button class="page-btn ${page === appState.currentPage ? 'active' : ''}" type="button" data-page="${page}">${page}</button>`);
  }

  buttons.push(`<button class="page-btn" type="button" data-page="${appState.currentPage + 1}">${translate('next')}</button>`);
  homeElements.pagination.innerHTML = buttons.join('');
}

function setLanguage(lang) {
  appState.lang = lang;
  localStorage.setItem('smvh-lang', lang);
  updateStaticTranslations();
  renderHero();
  renderPlaces();
}

function bindEvents() {
  homeElements.prevSlide.addEventListener('click', () => goToSlide(appState.currentSlide - 1));
  homeElements.nextSlide.addEventListener('click', () => goToSlide(appState.currentSlide + 1));

  homeElements.heroDots.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-slide-index]');
    if (!dot) return;
    goToSlide(Number(dot.dataset.slideIndex));
  });

  homeElements.pagination.addEventListener('click', (event) => {
    const button = event.target.closest('[data-page]');
    if (!button) return;

    const nextPage = Number(button.dataset.page);
    const totalPages = Math.max(1, Math.ceil(getFilteredPlaces().length / ITEMS_PER_PAGE));

    if (nextPage >= 1 && nextPage <= totalPages) {
      appState.currentPage = nextPage;
      renderPlaces();
      window.scrollTo({ top: homeElements.placesGrid.offsetTop - 120, behavior: 'smooth' });
    }
  });

  homeElements.searchInput.addEventListener('input', (event) => {
    appState.searchTerm = event.target.value;
    appState.currentPage = 1;
    renderPlaces();
  });

  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  if (homeElements.contactForm) {
    homeElements.contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      window.alert(translate('suggestionSuccess'));
      event.target.reset();
    });
  }

  if (homeElements.slider) {
    homeElements.slider.addEventListener('mouseenter', stopAutoplay);
    homeElements.slider.addEventListener('mouseleave', startAutoplay);
  }
}

function initHomePage() {
  updateStaticTranslations();
  renderHero();
  renderPlaces();
  bindEvents();
  startAutoplay();
}

initHomePage();

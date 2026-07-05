// ============================
// HOME – Sliders & Hero
// ============================

function renderSliders() {
  const container = document.getElementById('category-sliders');
  if (!container) return;
  const categories = [
    { key: 'stationery', label: 'Stationery', icon: 'fa-pen' },
    { key: 'furniture', label: 'Office Furniture', icon: 'fa-chair' },
    { key: 'ppe', label: 'PPE & Safety', icon: 'fa-helmet-safety' },
    { key: 'cleaning', label: 'Cleaning & Hygiene', icon: 'fa-broom' }
  ];
  let html = '';
  categories.forEach((cat, index) => {
    const catProducts = products.filter(p => p.category === cat.key);
    if (!catProducts.length) return;
    const sliderId = `slider-${index}`;
    const totalDots = Math.ceil(catProducts.length / 3);
    html += `
      <div class="category-slider" data-category="${cat.key}">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-bold text-[#1A2B4C] flex items-center gap-2">
            <i class="fas ${cat.icon}"></i> ${cat.label}
          </h3>
          <a href="/catalogue.html?category=${cat.key}" class="text-[#F05A28] hover:underline text-sm font-medium">View All →</a>
        </div>
        <div class="relative">
          <div id="${sliderId}" class="slider-container overflow-x-auto no-scrollbar flex gap-4 pb-4 scroll-smooth" data-category="${cat.key}">
            ${catProducts.map(p => productCardHTML(p)).join('')}
          </div>
          ${catProducts.length > 3 ? `
            <button class="slider-btn left" data-slider="${sliderId}" data-direction="left"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-btn right" data-slider="${sliderId}" data-direction="right"><i class="fas fa-chevron-right"></i></button>
            <div class="flex justify-center gap-1.5 mt-3">
              ${Array.from({ length: totalDots }, (_, i) => `
                <span class="slider-dot w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 cursor-pointer" data-slider="${sliderId}" data-index="${i}"></span>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;

  // Slider events
  document.querySelectorAll('.slider-container').forEach(container => {
    const sliderId = container.id;
    if (container.children.length <= 3) {
      const parent = container.closest('.relative');
      if (parent) parent.querySelectorAll('.slider-btn').forEach(b => b.style.display = 'none');
      return;
    }
    const leftBtn = document.querySelector(`.slider-btn.left[data-slider="${sliderId}"]`);
    const rightBtn = document.querySelector(`.slider-btn.right[data-slider="${sliderId}"]`);
    if (leftBtn) leftBtn.addEventListener('click', () => { container.scrollBy({ left: -280, behavior: 'smooth' }); updateSliderDots(container); resetSliderTimer(container); });
    if (rightBtn) rightBtn.addEventListener('click', () => { container.scrollBy({ left: 280, behavior: 'smooth' }); updateSliderDots(container); resetSliderTimer(container); });
    document.querySelectorAll(`[data-slider="${sliderId}"]`).forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        const visibleCards = Math.round(container.clientWidth / 280) || 1;
        container.scrollTo({ left: index * 280 * visibleCards, behavior: 'smooth' });
        updateSliderDots(container);
        resetSliderTimer(container);
      });
    });
    startSliderAuto(container);
    container.addEventListener('mouseenter', () => { const id = container.dataset.intervalId; if (id) clearInterval(parseInt(id)); });
    container.addEventListener('mouseleave', () => startSliderAuto(container));
  });
  document.querySelectorAll('.slider-container').forEach(c => { if (c.children.length > 3) updateSliderDots(c); });
}

function startSliderAuto(container) {
  if (container.children.length <= 3) return;
  if (container.dataset.intervalId) clearInterval(parseInt(container.dataset.intervalId));
  const intervalId = setInterval(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    const next = container.scrollLeft + 280;
    container.scrollTo({ left: next >= maxScroll ? 0 : next, behavior: 'smooth' });
    updateSliderDots(container);
  }, 4000);
  container.dataset.intervalId = intervalId;
}

function resetSliderTimer(container) {
  if (container.dataset.intervalId) {
    clearInterval(parseInt(container.dataset.intervalId));
    startSliderAuto(container);
  }
}

function updateSliderDots(container) {
  const sliderId = container.id;
  const dots = document.querySelectorAll(`[data-slider="${sliderId}"]`);
  if (!dots.length) return;
  const scrollLeft = container.scrollLeft;
  const visibleCards = Math.round(container.clientWidth / 280) || 1;
  const activeIndex = Math.round(scrollLeft / (280 * visibleCards));
  const safeIndex = Math.min(Math.max(activeIndex, 0), dots.length - 1);
  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-[#F05A28]', i === safeIndex);
    dot.classList.toggle('bg-gray-300', i !== safeIndex);
    dot.classList.toggle('w-4', i === safeIndex);
    dot.classList.toggle('w-2', i !== safeIndex);
  });
}

// ============================
// HERO SLIDER
// ============================
function initHeroSlider() {
  const wrapper = document.getElementById('heroSlider');
  if (!wrapper) return;
  const slides = wrapper.querySelectorAll('.hero-slide');
  const dots = wrapper.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0, interval = null;
  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
  }
  function nextSlide() { goTo(current + 1); }
  function startAuto() { if (interval) clearInterval(interval); interval = setInterval(nextSlide, 5000); }
  function stopAuto() { if (interval) clearInterval(interval); }
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      goTo(parseInt(this.dataset.index));
      stopAuto();
      startAuto();
    });
  });
  wrapper.addEventListener('mouseenter', stopAuto);
  wrapper.addEventListener('mouseleave', startAuto);
  goTo(0);
  startAuto();
}

// Mobile menu toggle
document.getElementById('menu-toggle')?.addEventListener('click', function() {
  document.getElementById('mobile-menu')?.classList.toggle('hidden');
});

// Init
document.addEventListener('DOMContentLoaded', function() {
  renderSliders();
  initHeroSlider();
});
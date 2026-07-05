// ============================
// CATALOGUE – Search & Filters
// ============================

function getSearchQuery() {
  const desktop = document.getElementById('search-input');
  const mobile = document.getElementById('mobile-search');
  const val = desktop ? desktop.value : '';
  if (!val && mobile) return mobile.value || '';
  return val || '';
}

function setSearchQuery(value) {
  const desktop = document.getElementById('search-input');
  const mobile = document.getElementById('mobile-search');
  if (desktop) desktop.value = value;
  if (mobile) mobile.value = value;
  toggleClearButtons(value && value.length > 0);
}

function toggleClearButtons(show) {
  const clearDesktop = document.getElementById('clear-search-desktop');
  const clearMobile = document.getElementById('clear-search-mobile');
  if (clearDesktop) clearDesktop.classList.toggle('hidden', !show);
  if (clearMobile) clearMobile.classList.toggle('hidden', !show);
}

function filterProducts() {
  const query = getSearchQuery().toLowerCase();
  const activeFilter = document.querySelector('.filter-btn.active');
  const category = activeFilter ? activeFilter.dataset.filter : 'all';
  const grid = document.getElementById('catalogue-grid');

  let filtered = products;
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (query) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-search text-4xl text-gray-300 mb-3 block"></i>
        <p class="text-gray-500">No products found.</p>
        <p class="text-sm text-gray-400 mt-1">Try adjusting your search or filters.</p>
        ${query ? `<button onclick="clearSearch()" class="mt-4 text-[#F05A28] hover:underline text-sm">Clear search</button>` : ''}
      </div>
    `;
  } else {
    renderCatalogue(filtered);
  }

  toggleClearButtons(query.length > 0);
}

function clearSearch() {
  setSearchQuery('');
  filterProducts();
  document.getElementById('search-input')?.focus();
}

function performSearch() {
  const query = getSearchQuery();
  if (query.length > 0) {
    // Already on catalogue page, just filter
  }
  filterProducts();
  setSearchQuery(query);
}

// ============================
// EVENT BINDING
// ============================
document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  filterProducts();

  // Search inputs
  const searchInput = document.getElementById('search-input');
  const mobileSearch = document.getElementById('mobile-search');
  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    document.addEventListener('keydown', function(e) {
      if (e.key === '/' && !['INPUT','TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
  if (mobileSearch) {
    mobileSearch.addEventListener('input', function() {
      const desktop = document.getElementById('search-input');
      if (desktop && desktop.value !== this.value) {
        desktop.value = this.value;
      }
      performSearch();
    });
  }

  // Clear buttons
  document.getElementById('clear-search-desktop')?.addEventListener('click', clearSearch);
  document.getElementById('clear-search-mobile')?.addEventListener('click', clearSearch);

  // Escape clears search
  [searchInput, mobileSearch].forEach(input => {
    if (!input) return;
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        clearSearch();
        this.blur();
      }
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterProducts();
    });
  });

document.getElementById('menu-toggle')?.addEventListener('click', function() {
  document.getElementById('mobile-menu')?.classList.toggle('hidden');
});

  // Mobile menu
  document.getElementById('menu-toggle')?.addEventListener('click', function() {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });

  // Handle category from URL param (e.g., ?category=stationery)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      if (b.dataset.filter === categoryParam) b.classList.add('active');
    });
    filterProducts();
  }
});
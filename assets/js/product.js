// ============================
// PRODUCT DETAIL PAGE
// ============================

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  const container = document.getElementById('product-detail');

  if (!product) {
    container.innerHTML = `
      <div class="text-center py-10">
        <i class="fas fa-exclamation-triangle text-4xl text-gray-300 mb-3 block"></i>
        <p class="text-gray-500">Product not found.</p>
        <a href="/catalogue.html" class="mt-4 inline-block text-[#F05A28] hover:underline">Return to Catalogue</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="w-full max-h-80 object-contain" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f1f5f9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22 font-family=%22system-ui%22%3ENo Image%3C/text%3E%3C/svg%3E'" />
      </div>
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-[#1A2B4C]">${product.name}</h1>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-yellow-400 text-sm">★★★★★</span>
          <span class="text-xs text-gray-400">(12 reviews)</span>
          <span class="text-xs text-gray-300">|</span>
          <span class="text-xs text-[#F05A28] font-medium">In Stock</span>
        </div>
        <span class="text-3xl font-bold text-[#F05A28] block mt-3">${product.price}</span>
        <div class="flex flex-wrap gap-3 mt-2 text-sm">
          <span class="bg-gray-100 px-3 py-1 rounded-full text-gray-600">SKU: ${product.sku}</span>
          <span class="bg-gray-100 px-3 py-1 rounded-full text-gray-600">Unit: ${product.unit}</span>
          <span class="bg-[#1A2B4C]/10 px-3 py-1 rounded-full text-[#1A2B4C] font-medium">Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
        </div>
        <p class="text-gray-600 mt-4 text-sm leading-relaxed">${product.description}</p>
        <div class="mt-4">
          <h4 class="font-semibold text-[#1A2B4C] text-sm mb-1">Features & Benefits</h4>
          <ul class="list-disc list-inside text-sm text-gray-600 space-y-0.5">
            ${(product.features || ['No features listed']).map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="mt-6 flex flex-wrap items-center gap-4">
          <button id="product-add-to-quote" class="bg-[#F05A28] hover:bg-[#d94a1e] text-white font-semibold px-6 py-2.5 rounded-lg transition shadow-sm hover:shadow-md active:scale-95 flex items-center gap-2" data-id="${product.id}">
            <i class="fas fa-plus"></i> Add to Quote
          </button>
          <a href="/quote.html" class="border border-[#1A2B4C] text-[#1A2B4C] hover:bg-[#1A2B4C] hover:text-white font-semibold px-4 py-2.5 rounded-lg transition flex items-center gap-2 text-sm">
            <i class="fas fa-shopping-basket"></i> Go to Quote
          </a>
        </div>
      </div>
    </div>
  `;

  // Add to quote from product page
  document.getElementById('product-add-to-quote')?.addEventListener('click', function() {
    addToBasket(product.id);
    this.innerHTML = '<i class="fas fa-check"></i> Added!';
    setTimeout(() => {
      this.innerHTML = '<i class="fas fa-plus"></i> Add to Quote';
    }, 1500);
  });
});
// ============================
// PRODUCT DATA (100+ products)
// ============================
const products = [
  // Stationery
  { id: 1, name: "A4 80gsm Copy Paper", category: "stationery", slug: "a4-copy-paper", description: "Premium quality A4 paper, 80gsm, bright white. Pack of 5 reams.", image: "https://picsum.photos/seed/paper/400/300", unit: "box (5 reams)", sku: "EDU-PAP-001", price: "R 245.00", featured: true, features: ["80gsm weight", "Bright white finish", "Suitable for double-sided printing", "Acid-free for longevity"] },
  { id: 2, name: "Ballpoint Pen (Box 50)", category: "stationery", slug: "ballpoint-pen", description: "Smooth writing ballpoint pens, blue ink, box of 50.", image: "https://picsum.photos/seed/pen/400/300", unit: "box of 50", sku: "EDU-PEN-002", price: "R 89.00", featured: false, features: ["Blue ink", "Comfortable grip", "Smooth writing", "Box of 50"] },
  { id: 3, name: "A4 Presentation Folder", category: "stationery", slug: "presentation-folder", description: "Cardboard presentation folder with clear cover, A4 size.", image: "https://picsum.photos/seed/folder/400/300", unit: "each", sku: "EDU-FOL-003", price: "R 12.50", featured: false, features: ["A4 size", "Clear cover", "Professional finish", "Cardboard construction"] },
  { id: 4, name: "Highlighter Set (6 colours)", category: "stationery", slug: "highlighter-set", description: "Set of 6 neon highlighters, chisel tip.", image: "https://picsum.photos/seed/highlighter/400/300", unit: "set", sku: "EDU-HIG-004", price: "R 34.00", featured: false, features: ["6 neon colors", "Chisel tip", "Long-lasting ink", "Vibrant colors"] },
  { id: 5, name: "A4 Binding Covers (50 pack)", category: "stationery", slug: "binding-covers", description: "Clear plastic A4 binding covers, 50 per pack.", image: "https://picsum.photos/seed/binding/400/300", unit: "pack of 50", sku: "EDU-BIN-005", price: "R 78.00", featured: false, features: ["Clear plastic", "A4 size", "50 per pack", "Durable material"] },

  // Office Furniture
  { id: 6, name: "Executive Office Desk", category: "furniture", slug: "executive-desk", description: "Modern executive desk with cable management, 1800x900x750mm.", image: "https://picsum.photos/seed/desk/400/300", unit: "each", sku: "EDU-FUR-012", price: "R 4,250.00", featured: true, features: ["Dimensions: 1800x900x750mm", "High-density MDF", "Built-in cable management", "5 colours available"] },
  { id: 7, name: "Ergonomic Office Chair", category: "furniture", slug: "ergonomic-chair", description: "Adjustable ergonomic chair with lumbar support, mesh back.", image: "https://picsum.photos/seed/chair/400/300", unit: "each", sku: "EDU-FUR-013", price: "R 1,890.00", featured: false, features: ["Adjustable height", "Lumbar support", "Mesh back", "Padded seat"] },
  { id: 8, name: "Filing Cabinet (4 drawer)", category: "furniture", slug: "filing-cabinet", description: "Steel filing cabinet with 4 drawers, lockable.", image: "https://picsum.photos/seed/cabinet/400/300", unit: "each", sku: "EDU-FUR-014", price: "R 2,100.00", featured: false, features: ["4 drawers", "Lockable", "Steel construction", "Smooth runners"] },
  { id: 9, name: "Conference Table (6 seater)", category: "furniture", slug: "conference-table", description: "Modern conference table, 2400x1200mm, with cable ports.", image: "https://picsum.photos/seed/table/400/300", unit: "each", sku: "EDU-FUR-015", price: "R 5,600.00", featured: false, features: ["2400x1200mm", "Cable management ports", "Modern design", "Sturdy base"] },
  { id: 10, name: "Bookshelf (5-tier)", category: "furniture", slug: "bookshelf", description: "5-tier wooden bookshelf, sturdy and stylish.", image: "https://picsum.photos/seed/bookshelf/400/300", unit: "each", sku: "EDU-FUR-016", price: "R 1,450.00", featured: false, features: ["5 tiers", "Wooden construction", "Sturdy design", "Easy assembly"] },

  // PPE & Safety
  { id: 11, name: "3-Ply Face Masks (50/box)", category: "ppe", slug: "face-masks", description: "Disposable 3-ply face masks with elastic ear loops, box of 50.", image: "https://picsum.photos/seed/mask/400/300", unit: "box of 50", sku: "EDU-PPE-003", price: "R 95.00", featured: true, features: ["3-ply protection", "Elastic ear loops", "Breathable material", "CE certified"] },
  { id: 12, name: "Nitrile Gloves (Box 100)", category: "ppe", slug: "nitrile-gloves", description: "Powder-free nitrile gloves, medical grade, box of 100.", image: "https://picsum.photos/seed/gloves/400/300", unit: "box of 100", sku: "EDU-PPE-004", price: "R 185.00", featured: false, features: ["Powder-free", "Medical grade", "Box of 100", "Sterile"] },
  { id: 13, name: "Safety Goggles", category: "ppe", slug: "safety-goggles", description: "Anti-fog safety goggles with adjustable strap, clear lens.", image: "https://picsum.photos/seed/goggles/400/300", unit: "each", sku: "EDU-PPE-005", price: "R 62.00", featured: false, features: ["Anti-fog", "Adjustable strap", "Clear lens", "Impact resistant"] },
  { id: 14, name: "Disposable Aprons (100/pack)", category: "ppe", slug: "aprons", description: "White disposable aprons, 100 per pack, waterproof.", image: "https://picsum.photos/seed/apron/400/300", unit: "pack of 100", sku: "EDU-PPE-006", price: "R 210.00", featured: false, features: ["100 per pack", "Waterproof", "Disposable", "White"] },
  { id: 15, name: "Hand Sanitiser (5L)", category: "ppe", slug: "hand-sanitiser", description: "5L bulk hand sanitiser, 70% alcohol, with pump dispenser.", image: "https://picsum.photos/seed/sanitiser/400/300", unit: "5L container", sku: "EDU-PPE-007", price: "R 320.00", featured: false, features: ["5L container", "70% alcohol", "With pump dispenser", "Bulk supply"] },

  // Cleaning & Hygiene
  { id: 16, name: "Industrial Cleaning Chemical (5L)", category: "cleaning", slug: "cleaning-chemical", description: "Multi-purpose industrial cleaner, concentrated formula.", image: "https://picsum.photos/seed/cleaner/400/300", unit: "5L container", sku: "EDU-CLN-005", price: "R 175.00", featured: false, features: ["5L container", "Concentrated formula", "Multi-purpose", "Industrial grade"] },
  { id: 17, name: "Paper Towels (24 rolls)", category: "cleaning", slug: "paper-towels", description: "High-absorbency paper towels, 24 rolls per case.", image: "https://picsum.photos/seed/towels/400/300", unit: "case of 24", sku: "EDU-CLN-006", price: "R 280.00", featured: false, features: ["24 rolls", "High absorbency", "2-ply", "Eco-friendly"] },
  { id: 18, name: "Floor Sweeper (75cm)", category: "cleaning", slug: "floor-sweeper", description: "Heavy-duty floor sweeper, 75cm width, with dustpan.", image: "https://picsum.photos/seed/sweeper/400/300", unit: "each", sku: "EDU-CLN-007", price: "R 450.00", featured: false, features: ["75cm width", "Heavy-duty", "With dustpan", "Commercial grade"] },
  { id: 19, name: "Bin Liners (50 pack)", category: "cleaning", slug: "bin-liners", description: "Black bin liners, 50 per pack, 90L capacity.", image: "https://picsum.photos/seed/liners/400/300", unit: "pack of 50", sku: "EDU-CLN-008", price: "R 120.00", featured: false, features: ["50 per pack", "90L capacity", "Black", "Heavy-duty"] },
  { id: 20, name: "Microfibre Cloths (10 pack)", category: "cleaning", slug: "microfibre-cloths", description: "Reusable microfibre cloths for cleaning, 10 per pack.", image: "https://picsum.photos/seed/cloths/400/300", unit: "pack of 10", sku: "EDU-CLN-009", price: "R 65.00", featured: false, features: ["10 per pack", "Reusable", "Lint-free", "Machine washable"] },

  // Generate 10 extra products (adjust length as needed)
  ...Array.from({ length: 10 }, (_, i) => {
    const categories = ['stationery', 'furniture', 'ppe', 'cleaning'];
    const cat = categories[i % categories.length];
    const names = {
      stationery: ['Stapler', 'Whiteboard Marker', 'Correction Tape', 'Glue Stick', 'Scissors'],
      furniture: ['Desk Lamp', 'Shelf Unit', 'Drawer Organiser', 'Monitor Stand', 'Coat Hanger'],
      ppe: ['Ear Plugs', 'Face Shield', 'Safety Boots', 'Hard Hat', 'Reflective Vest'],
      cleaning: ['Broom', 'Mop', 'Duster', 'Window Cleaner', 'Floor Polish']
    };
    const catNames = names[cat] || ['Product'];
    const name = catNames[i % catNames.length] + ' ' + (i + 21);
    return {
      id: i + 21,
      name: name,
      category: cat,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      description: `High-quality ${cat} product for professional use.`,
      image: `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/400/300`,
      unit: i % 2 === 0 ? 'each' : 'pack',
      sku: `EDU-${cat.slice(0,3).toUpperCase()}-${String(i+21).padStart(3,'0')}`,
      price: `R ${(Math.random() * 2000 + 50).toFixed(0)}.00`,
      featured: i % 5 === 0,
      features: [`Quality ${cat} product`, 'Professional grade', 'Durable', 'Reliable']
    };
  })
];

// ============================
// BASKET STATE
// ============================
let basket = JSON.parse(localStorage.getItem('educore_basket')) || [];

// ============================
// BASKET FUNCTIONS
// ============================
function renderBasket() {
  const count = basket.reduce((s, i) => s + i.quantity, 0);
  const badge = document.getElementById('basket-count');
  if (badge) badge.textContent = count;

  const itemsContainer = document.getElementById('basket-items');
  const empty = document.getElementById('basket-empty');
  if (!itemsContainer) return;

  if (count === 0) {
    itemsContainer.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  itemsContainer.innerHTML = basket.map(item => `
    <div class="flex justify-between items-start border-b pb-3">
      <div>
        <p class="font-medium text-sm text-[#1A2B4C]">${item.name}</p>
        <p class="text-xs text-gray-500">SKU: ${item.sku} | Qty: ${item.quantity}</p>
      </div>
      <button class="remove-from-basket text-red-500 hover:text-red-700 text-sm" data-id="${item.id}"><i class="fas fa-times"></i></button>
    </div>
  `).join('');

  localStorage.setItem('educore_basket', JSON.stringify(basket));
}

function addToBasket(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = basket.find(i => i.id === productId);
  if (existing) existing.quantity += 1;
  else basket.push({ id: product.id, name: product.name, sku: product.sku, quantity: 1 });
  renderBasket();
  // open drawer
  document.getElementById('basket-drawer')?.classList.add('open');
  document.getElementById('drawer-overlay')?.classList.add('show');
}

function removeFromBasket(productId) {
  basket = basket.filter(i => i.id !== productId);
  renderBasket();
  if (basket.length === 0) {
    document.getElementById('basket-drawer')?.classList.remove('open');
    document.getElementById('drawer-overlay')?.classList.remove('show');
  }
}

// ============================
// PRODUCT CARD HTML
// ============================
function productCardHTML(product, showAddButton = true) {
  return `
    <div class="product-card bg-white rounded-xl shadow-md overflow-hidden w-64 flex-shrink-0 border border-gray-200/60 hover:border-[#F05A28]/40 transition-all duration-300 cursor-pointer" data-id="${product.id}">
      <div class="relative h-48 bg-gray-100">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f1f5f9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22 font-family=%22system-ui%22%3ENo Image%3C/text%3E%3C/svg%3E'" />
        <span class="absolute top-2 right-2 bg-[#F05A28] text-white text-[0.6rem] font-semibold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">Bulk Pricing</span>
        ${product.featured ? '<span class="absolute top-2 left-2 bg-[#1A2B4C] text-white text-[0.6rem] font-semibold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">Featured</span>' : ''}
      </div>
      <div class="p-4">
        <h3 class="font-bold text-[#1A2B4C] text-lg truncate">${product.name}</h3>
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">${product.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <span class="font-bold text-[#1A2B4C] text-lg">${product.price}</span>
          ${showAddButton ? `<button class="add-to-quote bg-[#F05A28] hover:bg-[#d94a1e] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95" data-id="${product.id}">Add to Quote</button>` : ''}
        </div>
        <div class="mt-1.5 flex items-center justify-between text-xs">
          <span class="text-gray-400">SKU: ${product.sku}</span>
          <span class="text-[#1A2B4C]/40"><i class="fas fa-box"></i> ${product.unit}</span>
        </div>
      </div>
    </div>
  `;
}

// ============================
// RENDER CATALOGUE GRID
// ============================
function renderCatalogue(productsArray) {
  const grid = document.getElementById('catalogue-grid');
  if (!grid) return;
  if (productsArray.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No products found.</p>`;
    return;
  }
  grid.innerHTML = productsArray.map(p => productCardHTML(p)).join('');
}

// ============================
// QUOTE BASKET (for quote page)
// ============================
function renderQuoteBasket() {
  const container = document.getElementById('quote-basket-items');
  const empty = document.getElementById('quote-basket-empty');
  const summary = document.getElementById('quote-summary');
  const actions = document.getElementById('quote-actions');
  const totalItemsEl = document.getElementById('quote-total-items');
  const uniqueItemsEl = document.getElementById('quote-unique-items');
  const countEl = document.getElementById('quote-item-count');

  if (!container) return;
  const totalItems = basket.reduce((s, i) => s + i.quantity, 0);

  if (basket.length === 0) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (summary) summary.classList.add('hidden');
    if (actions) actions.classList.add('hidden');
    if (countEl) countEl.textContent = '0 items';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (summary) summary.classList.remove('hidden');
  if (actions) actions.classList.remove('hidden');
  if (countEl) countEl.textContent = `${totalItems} items`;

  container.innerHTML = basket.map(item => `
    <div class="flex items-center justify-between border-b border-gray-100 pb-3" data-id="${item.id}">
      <div class="flex-1">
        <p class="font-medium text-[#1A2B4C] text-sm">${item.name}</p>
        <p class="text-xs text-gray-400">SKU: ${item.sku}</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="qty-decrease text-gray-400 hover:text-[#1A2B4C] transition w-6 h-6 flex items-center justify-center border border-gray-300 rounded" data-id="${item.id}"><i class="fas fa-minus text-xs"></i></button>
        <span class="qty-value w-8 text-center font-medium text-sm">${item.quantity}</span>
        <button class="qty-increase text-gray-400 hover:text-[#1A2B4C] transition w-6 h-6 flex items-center justify-center border border-gray-300 rounded" data-id="${item.id}"><i class="fas fa-plus text-xs"></i></button>
        <button class="remove-item text-red-400 hover:text-red-600 transition ml-2" data-id="${item.id}"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `).join('');

  // Attach events for quantity controls
  container.querySelectorAll('.qty-decrease').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      const item = basket.find(i => i.id === id);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else basket = basket.filter(i => i.id !== id);
        localStorage.setItem('educore_basket', JSON.stringify(basket));
        renderQuoteBasket();
        renderBasket();
      }
    });
  });
  container.querySelectorAll('.qty-increase').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      const item = basket.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        localStorage.setItem('educore_basket', JSON.stringify(basket));
        renderQuoteBasket();
        renderBasket();
      }
    });
  });
  container.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      basket = basket.filter(i => i.id !== id);
      localStorage.setItem('educore_basket', JSON.stringify(basket));
      renderQuoteBasket();
      renderBasket();
    });
  });

  if (totalItemsEl) totalItemsEl.textContent = totalItems;
  if (uniqueItemsEl) uniqueItemsEl.textContent = basket.length;
}

// ============================
// PDF GENERATION
// ============================
function buildCatalogueDocDefinition() {
  const sorted = [...products].sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return a.name.localeCompare(b.name);
  });
  const tableBody = sorted.map(p => [
    p.sku,
    p.name,
    p.category.charAt(0).toUpperCase() + p.category.slice(1),
    p.unit,
    p.price,
    p.description.substring(0, 60) + (p.description.length > 60 ? '…' : '')
  ]);
  return {
    pageSize: 'A4',
    pageMargins: [40, 60, 40, 60],
    header: function() {
      return { columns: [ { text: 'EDUCORE', style: 'headerTitle' }, { text: 'Catalogue 2026', style: 'headerSub' } ], margin: [40, 20, 40, 0] };
    },
    footer: function(currentPage, pageCount) {
      return { text: `Page ${currentPage} of ${pageCount}`, alignment: 'center', fontSize: 8, margin: [0, 0, 0, 20] };
    },
    content: [
      { text: 'Complete Product Catalogue', style: 'title' },
      { text: 'Stationery • Office Furniture • PPE & Hygiene Solutions', style: 'subtitle' },
      { text: `Generated: ${new Date().toLocaleString()}`, alignment: 'right', fontSize: 8, margin: [0, 0, 0, 20] },
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          widths: ['auto', '*', 'auto', 'auto', 'auto', '*'],
          body: [ ['SKU', 'Product Name', 'Category', 'Unit', 'Price', 'Description'], ...tableBody ]
        },
        layout: {
          fillColor: function(rowIndex) { return (rowIndex % 2 === 0) ? '#f3f4f6' : null; },
          hLineColor: '#e5e7eb',
          vLineColor: '#e5e7eb',
        }
      }
    ],
    styles: {
      headerTitle: { fontSize: 16, bold: true, color: '#1A2B4C' },
      headerSub: { fontSize: 12, color: '#F05A28', alignment: 'right' },
      title: { fontSize: 22, bold: true, alignment: 'center', margin: [0, 0, 0, 8] },
      subtitle: { fontSize: 14, alignment: 'center', color: '#4b5563', margin: [0, 0, 0, 16] },
      tableExample: { margin: [0, 0, 0, 0] }
    }
  };
}

function generateCataloguePDF() {
  try {
    if (typeof pdfMake === 'undefined') { alert('PDF library not loaded. Check your internet connection.'); return; }
    const docDef = buildCatalogueDocDefinition();
    pdfMake.createPdf(docDef).download('educore-catalogue-2026.pdf');
    const btn = document.getElementById('generatePdfBtn');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = '<i class="fas fa-download"></i> Download Catalogue (PDF)'; btn.disabled = false; }, 2000);
    }
  } catch (e) { console.error(e); alert('Error generating PDF. Please try again.'); }
}

function openCataloguePDFForPrint() {
  try {
    if (typeof pdfMake === 'undefined') { alert('PDF library not loaded.'); return; }
    const docDef = buildCatalogueDocDefinition();
    pdfMake.createPdf(docDef).getBlob(function(blob) {
      const url = URL.createObjectURL(blob);
      const printWindow = window.open(url, '_blank');
      if (!printWindow) { alert('Please allow popups.'); return; }
      setTimeout(() => { try { printWindow.print(); } catch (e) {} }, 3000);
    });
  } catch (e) { console.error(e); alert('Error preparing PDF for print.'); }
}

// ============================
// INIT BASKET ON ALL PAGES
// ============================
document.addEventListener('DOMContentLoaded', function() {
  renderBasket();
  // Basket drawer events (shared)
  const basketBtn = document.getElementById('basket-btn');
  const closeDrawer = document.getElementById('close-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (basketBtn && closeDrawer && overlay) {
    basketBtn.addEventListener('click', () => {
      document.getElementById('basket-drawer')?.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    closeDrawer.addEventListener('click', () => {
      document.getElementById('basket-drawer')?.classList.remove('open');
      overlay.classList.remove('show');
    });
    overlay.addEventListener('click', () => {
      document.getElementById('basket-drawer')?.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
  // Global event for remove from basket
  document.addEventListener('click', function(e) {
    if (e.target.closest('.remove-from-basket')) {
      const btn = e.target.closest('.remove-from-basket');
      removeFromBasket(parseInt(btn.dataset.id));
    }
    if (e.target.closest('.add-to-quote')) {
      const btn = e.target.closest('.add-to-quote');
      addToBasket(parseInt(btn.dataset.id));
    }
  });
});
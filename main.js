// ============================
// DATA – 100+ Products
// ============================
const products = [
  // Stationery
  { id:1, name: "Index Cards 5×3 Plain-Rainbow x5 Set Tic 90X126 5 TAB", category: "stationery", slug: "a4-copy-paper", description: "Compact, high-quality coloured index cards designed for efficient organisation, note-taking, filing, and quick reference.", image: "images/Index-Cards.jpg", unit: "box (5 reams)", sku: "EDU-PAP-001", price: "R 45.00", featured: true, features: ["Compact 5 × 3 Inch Size (90 × 126mm)", "Plain Writing Surface", "5-Tab Rainbow Divider Set", "Premium Cardstock"] },
  { id:2, name: "Value Pack Storage Box + 5 Lever Arch Files – 2 Pack", category: "stationery", slug: "Lever-Arch", description: "complete document organisation and archiving solution designed for businesses, schools, government departments, and home offices.", image: "images/Value-Pack.jpg", unit: "2 Pack", sku: "LEV-ACH-002", price: "R 495.99", featured: true, features: ["Large Storage Capacity", "Commercial Files Included", "Premium Lever Arch Files", "Durable Storage Boxes"] },
  { id:3, name: "Suspension Attache Case with Lock + Handle and 10 Suspension files", category: "stationery", slug: "attache-case", description: "durable and secure portable filing solution designed for professionals who require organised document storage on the move.", image: "images/Suspension.jpg", unit: "each", sku: "ATT-003", price: "R 250.00", featured:true, features: ["Suspension File Compatibility", "Comfortable Carry Handle", "Secure Locking Mechanism", "Complete Portable Filing System"] },
  { id:4, name: "Highlighter Set (6 colours)", category: "stationery", slug: "highlighter-set", description: "Set of 6 neon highlighters, chisel tip.", image: "images/1.avif", unit: "set", sku: "EDU-HIG-004", price: "R 34.00", featured: false, features: ["6 neon colors", "Chisel tip", "Long-lasting ink", "Vibrant colors"] },
  { id:5, name: "Lever Arch Files A4 Black & White Mottle – 50 Pack", category: "stationery", slug: "Lever-Arch-Files", description: "are premium-quality document filing solutions designed to organise, protect, and store A4-sized documents efficiently in professional and educational environments.", image: "images/Lever-Arch.jpg", unit: "pack of 50", sku: "LV-005", price: "R 1,122.00", featured: true, features: ["A4 Document Compatibility", "Heavy-Duty Lever Arch Mechanism", "Classic Black & White Mottle Finish", "Pack of 50 Files"] },
  { id:6, name: "Corrugated Archive Box F/S – 12 Pack", category: "stationery", slug: "Corrugated", description: "Durable and practical document storage solution designed for the safe archiving, organisation, and transportation of foolscap-sized files and records.", image: "Images/Corrugated.jpg", unit: "12 Pack", sku: "EDU-FUR-016", price: "R 286.99", featured: true, features: ["Foolscap Size (F/S) Compatibility", "Strong Corrugated Cardboard Construction", "Pack of 12 Boxes", "Easy Assembly"] },
  { id:7, name: "Value Pack Storage Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "images/value pack-box+5.jpg", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
  { id:8, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "images/Suspension-files-50-pack.jpg", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },
  { id:9, name: "Value Pack Storage Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "images/Value-Pack-box5.jpg", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
  { id:10, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "images/Suspension-files-50-pack.jpg", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },
  

  // Office Furniture
  { id:11, name: "Classic Eames High Back-Cushion", category: "furniture", slug: "executive-desk", description: "luxurious executive office chair designed to deliver superior comfort, ergonomic support, and timeless sophistication.", image: "images/classic-ea.jpg", unit: "each", sku: "CEH-012", price: "R 5,495.00", featured: true, features: ["Elegant Executive Design", "High Back Ergonomic Support", "Extra-Thick Cushioned Padding", "Premium Upholstery"] },
  { id:12, name: "Activity Executive Desk with Side Cabinet", category: "furniture", slug: "ergonomic-chair", description: "premium office workstation designed to combine executive style, spacious functionality, and practical storage.", image: "images/activity.jpg", unit: "each", sku: "AED-013", price: "R 16,480.00", featured: false, features: ["Modern Executive Design", "Integrated Side Cabinet", "Large Executive Work Surface", "Lockable Drawers (Model Dependent)"] },
  { id:13, name: "Filing Cabinet (4 drawer)", category: "furniture", slug: "filing-cabinet", description: "Steel filing cabinet with 4 drawers, lockable.", image: "https://picsum.photos/seed/cabinet/400/300", unit: "each", sku: "EDU-FUR-014", price: "R 2,100.00", featured: false, features: ["4 drawers", "Lockable", "Steel construction", "Smooth runners"] },
  { id:14, name: "Conference Table (6 seater)", category: "furniture", slug: "conference-table", description: "Modern conference table, 2400x1200mm, with cable ports.", image: "https://picsum.photos/seed/table/400/300", unit: "each", sku: "EDU-FUR-015", price: "R 5,600.00", featured: false, features: ["2400x1200mm", "Cable management ports", "Modern design", "Sturdy base"] },
  { id:15, name: "Bookshelf (5-tier)", category: "furniture", slug: "bookshelf", description: "5-tier wooden bookshelf, sturdy and stylish.", image: "https://picsum.photos/seed/bookshelf/400/300", unit: "each", sku: "EDU-FUR-016", price: "R 1,450.00", featured: false, features: ["5 tiers", "Wooden construction", "Sturdy design", "Easy assembly"] },
  { id:16, name: "Filing Cabinet (4 drawer)", category: "furniture", slug: "filing-cabinet", description: "Steel filing cabinet with 4 drawers, lockable.", image: "https://picsum.photos/seed/cabinet/400/300", unit: "each", sku: "EDU-FUR-014", price: "R 2,100.00", featured: false, features: ["4 drawers", "Lockable", "Steel construction", "Smooth runners"] },
  { id:17, name: "Conference Table (6 seater)", category: "furniture", slug: "conference-table", description: "Modern conference table, 2400x1200mm, with cable ports.", image: "https://picsum.photos/seed/table/400/300", unit: "each", sku: "EDU-FUR-015", price: "R 5,600.00", featured: false, features: ["2400x1200mm", "Cable management ports", "Modern design", "Sturdy base"] },
  { id:18, name: "Bookshelf (5-tier)", category: "furniture", slug: "bookshelf", description: "5-tier wooden bookshelf, sturdy and stylish.", image: "https://picsum.photos/seed/bookshelf/400/300", unit: "each", sku: "EDU-FUR-016", price: "R 1,450.00", featured: false, features: ["5 tiers", "Wooden construction", "Sturdy design", "Easy assembly"] },
  { id:19, name: "Value Pack Storage Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "images/value pack-box+5.jpg", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
  { id:20, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "images/Suspension-files-50-pack.jpg", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },



  // PPE & Safety
  { id: 21, name: "Face Mask (3 ply) Black – Case of 20 boxes (1000 units)", category: "ppe", slug: "face-masks", description: "high-quality, single-use protective face mask designed to provide effective everyday protection while ensuring maximum comfort and breathability.", image: "images/Face-Mask.png", unit: "box of 50", sku: "PPE-003", price: "R 95.00", featured: true, features: ["3-ply protection", "Elastic ear loops", "Breathable material", "CE certified"] },
  { id: 22, name: "Nitrile Gloves (Box 100)", category: "ppe", slug: "nitrile-gloves", description: "Powder-free nitrile gloves, medical grade, box of 100.", image: "https://picsum.photos/seed/gloves/400/300", unit: "box of 100", sku: "EDU-PPE-004", price: "R 185.00", featured: false, features: ["Powder-free", "Medical grade", "Box of 100", "Sterile"] },
  { id: 23, name: "Safety Goggles", category: "ppe", slug: "safety-goggles.png", description: "Anti-fog safety goggles with adjustable strap, clear lens.", image: "images/safety-goggles.png", unit: "each", sku: "EDU-PPE-005", price: "R 147,56", featured: false, features: ["Anti-fog", "Adjustable strap", "Clear lens", "Impact resistant"] },
  { id: 24, name: "Disposable Aprons (100/pack)", category: "ppe", slug: "aprons", description: "White disposable aprons, 100 per pack, waterproof.", image: "https://picsum.photos/seed/apron/400/300", unit: "pack of 100", sku: "EDU-PPE-006", price: "R 210.00", featured: false, features: ["100 per pack", "Waterproof", "Disposable", "White"] },
  { id: 25, name: "Hand Sanitiser (5L)", category: "ppe", slug: "hand-sanitiser", description: "5L bulk hand sanitiser, 70% alcohol, with pump dispenser.", image: "https://picsum.photos/seed/sanitiser/400/300", unit: "5L container", sku: "EDU-PPE-007", price: "R 320.00", featured: false, features: ["5L container", "70% alcohol", "With pump dispenser", "Bulk supply"] },
  { id: 26, name: "Safety Goggles", category: "ppe", slug: "safety-goggles.png", description: "Anti-fog safety goggles with adjustable strap, clear lens.", image: "images/safety-goggles.png", unit: "each", sku: "EDU-PPE-005", price: "R 147,56", featured: false, features: ["Anti-fog", "Adjustable strap", "Clear lens", "Impact resistant"] },
  { id: 27, name: "Disposable Aprons (100/pack)", category: "ppe", slug: "aprons", description: "White disposable aprons, 100 per pack, waterproof.", image: "https://picsum.photos/seed/apron/400/300", unit: "pack of 100", sku: "EDU-PPE-006", price: "R 210.00", featured: false, features: ["100 per pack", "Waterproof", "Disposable", "White"] },
  { id: 28, name: "Hand Sanitiser (5L)", category: "ppe", slug: "hand-sanitiser", description: "5L bulk hand sanitiser, 70% alcohol, with pump dispenser.", image: "https://picsum.photos/seed/sanitiser/400/300", unit: "5L container", sku: "EDU-PPE-007", price: "R 320.00", featured: false, features: ["5L container", "70% alcohol", "With pump dispenser", "Bulk supply"] },
  { id: 29, name: "Value Pack Storage Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "images/value pack-box+5.jpg", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
  { id: 30, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "images/Suspension-Files.jpg", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },


  // Cleaning & Hygiene
  { id: 31, name: "Industrial Cleaning Chemical (5L)", category: "cleaning", slug: "cleaning-chemical", description: "Multi-purpose industrial cleaner, concentrated formula.", image: "https://picsum.photos/seed/cleaner/400/300", unit: "5L container", sku: "EDU-CLN-005", price: "R 175.00", featured: false, features: ["5L container", "Concentrated formula", "Multi-purpose", "Industrial grade"] },
  { id: 32, name: "Paper Towels (24 rolls)", category: "cleaning", slug: "paper-towels", description: "High-absorbency paper towels, 24 rolls per case.", image: "https://picsum.photos/seed/towels/400/300", unit: "case of 24", sku: "EDU-CLN-006", price: "R 280.00", featured: false, features: ["24 rolls", "High absorbency", "2-ply", "Eco-friendly"] },
  { id: 33, name: "Floor Sweeper (75cm)", category: "cleaning", slug: "floor-sweeper", description: "Heavy-duty floor sweeper, 75cm width, with dustpan.", image: "https://picsum.photos/seed/sweeper/400/300", unit: "each", sku: "EDU-CLN-007", price: "R 450.00", featured: false, features: ["75cm width", "Heavy-duty", "With dustpan", "Commercial grade"] },
  { id: 34, name: "Bin Liners (50 pack)", category: "cleaning", slug: "bin-liners", description: "Black bin liners, 50 per pack, 90L capacity.", image: "https://picsum.photos/seed/liners/400/300", unit: "pack of 50", sku: "EDU-CLN-008", price: "R 120.00", featured: false, features: ["50 per pack", "90L capacity", "Black", "Heavy-duty"] },
  { id: 35, name: "Microfibre Cloths (10 pack)", category: "cleaning", slug: "microfibre-cloths", description: "Reusable microfibre cloths for cleaning, 10 per pack.", image: "https://picsum.photos/seed/cloths/400/300", unit: "pack of 10", sku: "EDU-CLN-009", price: "R 65.00", featured: false, features: ["10 per pack", "Reusable", "Lint-free", "Machine washable"] },
  { id: 36, name: "Floor Sweeper (75cm)", category: "cleaning", slug: "floor-sweeper", description: "Heavy-duty floor sweeper, 75cm width, with dustpan.", image: "https://picsum.photos/seed/sweeper/400/300", unit: "each", sku: "EDU-CLN-007", price: "R 450.00", featured: false, features: ["75cm width", "Heavy-duty", "With dustpan", "Commercial grade"] },
  { id: 37, name: "Bin Liners (50 pack)", category: "cleaning", slug: "bin-liners", description: "Black bin liners, 50 per pack, 90L capacity.", image: "https://picsum.photos/seed/liners/400/300", unit: "pack of 50", sku: "EDU-CLN-008", price: "R 120.00", featured: false, features: ["50 per pack", "90L capacity", "Black", "Heavy-duty"] },
  { id: 38, name: "Microfibre Cloths (10 pack)", category: "cleaning", slug: "microfibre-cloths", description: "Reusable microfibre cloths for cleaning, 10 per pack.", image: "https://picsum.photos/seed/cloths/400/300", unit: "pack of 10", sku: "EDU-CLN-009", price: "R 65.00", featured: false, features: ["10 per pack", "Reusable", "Lint-free", "Machine washable"] },
  { id: 39, name: "Value Pack Storage Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "images/value pack-box+5.jpg", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
  { id: 40, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "images/Suspension-files- 50-pack.jpg", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },


  // Generate 80 more products
  ...Array.from({ length: 10 }, (_, i) => {
    const categories = ['stationery', 'furniture', 'ppe', 'cleaning'];
    const cat = categories[i % categories.length];
    const names = {
      stationery: ['Stapler', 'Whiteboard Marker', 'Correction Tape', 'Glue Stick', 'Scissors', 'Ruler', 'Pencil Set', 'Eraser', 'Sharpener', 'Notebook'],
      furniture: ['Desk Lamp', 'Shelf Unit', 'Drawer Organiser', 'Monitor Stand', 'Coat Hanger', 'Side Table', 'Bookcase', 'Pedestal', 'Desk Tidy', 'Screen Divider'],
      ppe: ['Ear Plugs', 'Face Shield', 'Safety Boots', 'Hard Hat', 'Reflective Vest', 'Safety Harness', 'Knee Pads', 'Gloves (Leather)', 'Respirator', 'First Aid Kit'],
      cleaning: ['Broom', 'Mop', 'Duster', 'Window Cleaner', 'Floor Polish', 'Disinfectant Spray', 'Toilet Cleaner', 'Scrub Brush', 'Bucket', 'Squeegee']
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
// STATE
// ============================
let basket = JSON.parse(localStorage.getItem('educore_basket')) || [];
let currentModalProductId = null;
let modalQty = 1;

// ============================
// HELPER: Product Card HTML
// ============================
function productCardHTML(product, showAddButton = true) {
  return `
    <div class="product-card bg-gradient-to-b from-white to-gray-50/80 rounded-xl shadow-md overflow-hidden w-64 flex-shrink-0 border border-gray-200/60 hover:border-[#F05A28]/40 transition-all duration-300 cursor-pointer" data-id="${product.id}">
      <div class="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200/50">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23f1f5f9%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%22100%22 y=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239ca3af%22 font-size=%2216%22 font-family=%22system-ui%22%3ENo Image%3C/text%3E%3C/svg%3E'" />
        <span class="absolute top-2 right-2 bg-[#F05A28] text-white text-[0.6rem] font-semibold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">Bulk Pricing</span>
        ${product.featured ? '<span class="absolute top-2 left-2 bg-[#1A2B4C] text-white text-[0.6rem] font-semibold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">Featured</span>' : ''}
      </div>
      <div class="p-4 bg-white/80 backdrop-blur-sm">
        <h3 class="font-bold text-[#1A2B4C] text-lg truncate leading-tight">${product.name}</h3>
        <p class="text-sm text-gray-600 mt-1 line-clamp-2">${product.description}</p>
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
// RENDER FUNCTIONS
// ============================

// --- Category Sliders ---
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
          <a href="#" class="text-[#F05A28] hover:underline text-sm font-medium section-link" data-category="${cat.key}">View All →</a>
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

  // Attach slider events
  document.querySelectorAll('.slider-container').forEach(container => {
    const sliderId = container.id;
    if (container.children.length <= 3) {
      const parent = container.closest('.relative');
      if (parent) {
        parent.querySelectorAll('.slider-btn').forEach(b => b.style.display = 'none');
      }
      return;
    }
    // Arrows
    const leftBtn = document.querySelector(`.slider-btn.left[data-slider="${sliderId}"]`);
    const rightBtn = document.querySelector(`.slider-btn.right[data-slider="${sliderId}"]`);
    if (leftBtn) leftBtn.addEventListener('click', () => { container.scrollBy({ left: -280, behavior: 'smooth' }); updateSliderDots(container); resetSliderTimer(container); });
    if (rightBtn) rightBtn.addEventListener('click', () => { container.scrollBy({ left: 280, behavior: 'smooth' }); updateSliderDots(container); resetSliderTimer(container); });
    // Dots
    document.querySelectorAll(`[data-slider="${sliderId}"]`).forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        const visibleCards = Math.round(container.clientWidth / 280) || 1;
        container.scrollTo({ left: index * 280 * visibleCards, behavior: 'smooth' });
        updateSliderDots(container);
        resetSliderTimer(container);
      });
    });
    // Auto-slide
    startSliderAuto(container);
    container.addEventListener('mouseenter', () => { const id = container.dataset.intervalId; if (id) clearInterval(parseInt(id)); });
    container.addEventListener('mouseleave', () => startSliderAuto(container));
  });
  // Initial dots
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

// --- Catalogue Grid ---
function renderCatalogue(productsToRender) {
  const grid = document.getElementById('catalogue-grid');
  if (!grid) return;
  if (!productsToRender.length) {
    grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No products found.</p>`;
    return;
  }
  grid.innerHTML = productsToRender.map(p => productCardHTML(p)).join('');
}

// --- Basket ---
function renderBasket() {
  const count = basket.reduce((s, i) => s + i.quantity, 0);
  document.getElementById('basket-count').textContent = count;
  const itemsContainer = document.getElementById('basket-items');
  const empty = document.getElementById('basket-empty');
  if (!count) {
    itemsContainer.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
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
  document.getElementById('basket-drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.remove('hidden');
}

function removeFromBasket(productId) {
  basket = basket.filter(i => i.id !== productId);
  renderBasket();
  if (!basket.length) {
    document.getElementById('basket-drawer').classList.remove('open');
    document.getElementById('drawer-overlay').classList.add('hidden');
  }
}

// ============================
// MODAL FUNCTIONS
// ============================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentModalProductId = productId;
  modalQty = 1;
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = product.price;
  document.getElementById('modalSku').textContent = product.sku;
  document.getElementById('modalUnit').textContent = product.unit;
  document.getElementById('modalCategory').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalQtyValue').textContent = modalQty;
  const featuresList = document.getElementById('modalFeatures');
  if (product.features && product.features.length) {
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
  } else {
    featuresList.innerHTML = '<li class="text-gray-400">No features listed</li>';
  }
  document.getElementById('productModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
  document.body.style.overflow = '';
  currentModalProductId = null;
}

// ============================
// QUOTE BASKET (page)
// ============================
function renderQuoteBasket() {
  const container = document.getElementById('quote-basket-items');
  const empty = document.getElementById('quote-basket-empty');
  const summary = document.getElementById('quote-summary');
  const actions = document.getElementById('quote-actions');
  const totalItemsEl = document.getElementById('quote-total-items');
  const uniqueItemsEl = document.getElementById('quote-unique-items');
  const countEl = document.getElementById('quote-item-count');
  const totalItems = basket.reduce((s, i) => s + i.quantity, 0);
  if (!basket.length) {
    if (container) container.innerHTML = '';
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
  if (container) {
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
    // Event listeners for controls
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
  }
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
// NAVIGATION
// ============================
function showSection(sectionId) {
  document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`section-${sectionId}`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('text-[#1A2B4C]', link.dataset.section === sectionId);
    link.classList.toggle('text-gray-600', link.dataset.section !== sectionId);
  });
  document.getElementById('mobile-menu')?.classList.add('hidden');
  if (sectionId === 'catalogue') filterProducts();
  if (sectionId === 'quote') renderQuoteBasket();
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

  // Render results
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

  // Update clear button visibility
  toggleClearButtons(query.length > 0);
}

// ============================
// HERO SLIDER
// ============================
(function initHeroSlider() {
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
})();

// ============================
// INITIALIZATION
// ============================
document.addEventListener('DOMContentLoaded', function() {
  // Render sliders and catalogue
  renderSliders();
  renderCatalogue(products);
  renderBasket();

  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showSection(this.dataset.section);
    });
  });
  document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', function(e) {
      const section = this.dataset.section;
      if (section) showSection(section);
    });
  });

  // Mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

// ============================
// SEARCH HELPERS
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

function performSearch() {
  const query = getSearchQuery();
  if (query.length > 0) {
    showSection('catalogue');
  }
  filterProducts();
  setSearchQuery(query);
}

function clearSearch() {
  setSearchQuery('');
  if (document.getElementById('section-catalogue')?.classList.contains('active')) {
    filterProducts();
  }
  document.getElementById('search-input')?.focus();
}


// Search events
const searchInput = document.getElementById('search-input');
const mobileSearch = document.getElementById('mobile-search');
if (searchInput) {
  searchInput.addEventListener('input', performSearch);
}
if (mobileSearch) {
  mobileSearch.addEventListener('input', function() {
    // Sync value with desktop
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

  // ============================
// SEARCH & FILTER (Refined)
// ============================

function getSearchQuery() {
  const desktop = document.getElementById('search-input');
  const mobile = document.getElementById('mobile-search');
  const value = desktop?.value || mobile?.value || '';
  return value.trim();
}

function setSearchQuery(value) {
  const desktop = document.getElementById('search-input');
  const mobile = document.getElementById('mobile-search');
  if (desktop) desktop.value = value;
  if (mobile) mobile.value = value;
  toggleClearButtons(value.length > 0);
}

function toggleClearButtons(show) {
  const clearDesktop = document.getElementById('clear-search-desktop');
  const clearMobile = document.getElementById('clear-search-mobile');
  if (clearDesktop) clearDesktop.classList.toggle('hidden', !show);
  if (clearMobile) clearMobile.classList.toggle('hidden', !show);
}

function performSearch() {
  const query = getSearchQuery();
  
  // If query is not empty, navigate to catalogue
  if (query.length > 0) {
    showSection('catalogue');
  } else {
    // If empty, show all products (but stay on current page)
    filterProducts();
    return;
  }
  
  // Apply filter (will show results in catalogue)
  filterProducts();
  
  // Sync between inputs (just to be safe)
  setSearchQuery(query);
}

function clearSearch() {
  setSearchQuery('');
  // If we're on catalogue, reset to show all products
  if (document.getElementById('section-catalogue').classList.contains('active')) {
    filterProducts();
  }
  // Focus on search input after clearing
  document.getElementById('search-input')?.focus();
}

function filterProducts() {
  const query = getSearchQuery().toLowerCase().trim();
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
      (p.description && p.description.toLowerCase().includes(query))
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

// --- Attach search events ---
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const mobileSearch = document.getElementById('mobile-search');
  const clearDesktop = document.getElementById('clear-search-desktop');
  const clearMobile = document.getElementById('clear-search-mobile');

  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    // Focus on search when '/' key is pressed (optional)
    document.addEventListener('keydown', function(e) {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
  if (mobileSearch) {
    mobileSearch.addEventListener('input', function() {
      // Sync desktop search value
      const desktop = document.getElementById('search-input');
      if (desktop) desktop.value = this.value;
      performSearch();
    });
  }

  if (clearDesktop) clearDesktop.addEventListener('click', clearSearch);
  if (clearMobile) clearMobile.addEventListener('click', clearSearch);

  // Also clear when user presses Escape inside search
  [searchInput, mobileSearch].forEach(input => {
    if (!input) return;
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        clearSearch();
        this.blur();
      }
    });
  });
});

  // Add to quote (event delegation)
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.add-to-quote');
    if (btn) {
      e.stopPropagation();
      addToBasket(parseInt(btn.dataset.id));
    }
    const removeBtn = e.target.closest('.remove-from-basket');
    if (removeBtn) {
      removeFromBasket(parseInt(removeBtn.dataset.id));
    }
    // Card click to open modal
    const card = e.target.closest('.product-card');
    if (card && card.dataset.id && !e.target.closest('.add-to-quote')) {
      openProductModal(parseInt(card.dataset.id));
    }
  });

  // Basket drawer
  document.getElementById('basket-btn').addEventListener('click', () => {
    document.getElementById('basket-drawer').classList.toggle('open');
    document.getElementById('drawer-overlay').classList.toggle('hidden');
  });
  document.getElementById('close-drawer').addEventListener('click', () => {
    document.getElementById('basket-drawer').classList.remove('open');
    document.getElementById('drawer-overlay').classList.add('hidden');
  });
  document.getElementById('drawer-overlay').addEventListener('click', () => {
    document.getElementById('basket-drawer').classList.remove('open');
    document.getElementById('drawer-overlay').classList.add('hidden');
  });

  // Request Quote from drawer
  document.getElementById('request-quote-btn').addEventListener('click', function() {
    if (!basket.length) { alert('Your basket is empty.'); return; }
    showSection('quote');
    const textarea = document.querySelector('#quote-form textarea[name="notes"]');
    if (textarea) textarea.value = basket.map(i => `${i.name} (${i.sku}) x ${i.quantity}`).join('\n');
    document.getElementById('basket-drawer').classList.remove('open');
    document.getElementById('drawer-overlay').classList.add('hidden');
  });

  // Clear quote
  document.getElementById('clear-quote-btn')?.addEventListener('click', function() {
    if (!basket.length) return;
    if (confirm('Clear your quote basket?')) {
      basket = [];
      localStorage.setItem('educore_basket', JSON.stringify(basket));
      renderQuoteBasket();
      renderBasket();
    }
  });
  document.getElementById('continue-shopping-btn')?.addEventListener('click', function() {
    document.querySelector('[data-section="catalogue"]')?.click();
  });

  // Contact form
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We\'ll respond within 24 hours.');
    this.reset();
  });

  // Quote form
  document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-quote-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
      alert('Quote request sent! We\'ll get back to you shortly.');
      basket = [];
      localStorage.setItem('educore_basket', JSON.stringify(basket));
      renderQuoteBasket();
      renderBasket();
      this.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Quote Request';
    }, 1500);
  });

  // Modal events
  document.getElementById('modalOverlay').addEventListener('click', closeProductModal);
  document.getElementById('modalCloseBtn').addEventListener('click', closeProductModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProductModal(); });
  document.getElementById('modalBackLink').addEventListener('click', function(e) {
    e.preventDefault();
    closeProductModal();
    document.querySelector('[data-section="catalogue"]')?.click();
  });
  document.getElementById('modalQtyMinus').addEventListener('click', function() {
    if (modalQty > 1) { modalQty--; document.getElementById('modalQtyValue').textContent = modalQty; }
  });
  document.getElementById('modalQtyPlus').addEventListener('click', function() {
    modalQty++; document.getElementById('modalQtyValue').textContent = modalQty;
  });
  document.getElementById('modalAddToQuote').addEventListener('click', function() {
    if (currentModalProductId === null) return;
    const product = products.find(p => p.id === currentModalProductId);
    if (!product) return;
    const existing = basket.find(i => i.id === product.id);
    if (existing) existing.quantity += modalQty;
    else basket.push({ id: product.id, name: product.name, sku: product.sku, quantity: modalQty });
    localStorage.setItem('educore_basket', JSON.stringify(basket));
    renderBasket();
    renderQuoteBasket();
    const btn = this;
    btn.innerHTML = '<i class="fas fa-check"></i> Added!';
    setTimeout(() => { btn.innerHTML = '<i class="fas fa-plus"></i> Add to Quote'; }, 1500);
  });
  document.getElementById('modalContactSales').addEventListener('click', function() {
    closeProductModal();
    document.querySelector('[data-section="contact"]')?.click();
  });

  // PDF buttons
  document.getElementById('generatePdfBtn').addEventListener('click', generateCataloguePDF);
  document.getElementById('printPdfBtn').addEventListener('click', openCataloguePDFForPrint);

  // View All links in sliders
  document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const cat = this.dataset.category;
      showSection('catalogue');
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === cat);
      });
      filterProducts();
      document.getElementById('search-input').value = '';
      document.getElementById('mobile-search').value = '';
    });
  });

  // Logo
  document.getElementById('logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('home');
  });

  // Update product count on download page
  const countEl = document.getElementById('pdfProductCount');
  if (countEl) countEl.textContent = products.length;
  const countEl2 = document.getElementById('pdfProductCount2');
  if (countEl2) countEl2.textContent = products.length;
  const featureCount = document.getElementById('featureProductCount');
  if (featureCount) featureCount.textContent = products.length;

  // Default home
  showSection('home');
});
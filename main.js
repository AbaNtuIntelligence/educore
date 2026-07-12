import { getProductsFromGoogleSheets } from "./src/services/googleSheets.js";
import "./assets/js/download.js";
let products = [];
// ============================
// DATA – 100+ Products
// ============================
//const products = [
  // Stationery
 // { id:1, name: "Index Cards 5×3 Plain-Rainbow x5 Set Tic 90X126 5 TAB", category: "stationery", slug: "Index Cards a4-copy-paper", description: "Compact, high-quality coloured index cards designed for efficient organisation, note-taking, filing, and quick reference.", image: "public/images/products/Index-Cards-90-X-126 5 TAB.webp", unit: "box (5 reams)", sku: "EDU-PAP-001", price: "R 45.00", featured: true, features: ["Compact 5 × 3 Inch Size (90 × 126mm)", "Plain Writing Surface", "5-Tab Rainbow Divider Set", "Premium Cardstock"] },
 // { id:2, name: "Value Pack Storage Box + 5 Lever Arch Files – 2 Pack", category: "stationery", slug: "Lever-Arch", description: "Complete document organisation and archiving solution designed for businesses, schools, government departments, and home offices.", image: "public/images/products/Value-Pack.webp", unit: "2 Pack", sku: "LEV-ACH-002", price: "R 495.99", featured: true, features: ["Large Storage Capacity", "Commercial Files Included", "Premium Lever Arch Files", "Durable Storage Boxes"] },
  //{ id:3, name: "Suspension Attache Case with Lock + Handle and 10 Suspension files", category: "stationery", slug: "attache-case", description: "Durable and secure portable filing solution designed for professionals who require organised document storage on the move.", image: "public/images/products/Suspension.webp", unit: "each", sku: "ATT-003", price: "R 250.00", featured:true, features: ["Suspension File Compatibility", "Comfortable Carry Handle", "Secure Locking Mechanism", "Complete Portable Filing System"] },
  //{ id:4, name: "Highlighter Set (6 colours)", category: "stationery", slug: "highlighter-set", description: "Set of 6 neon highlighters, chisel tip.", image: "public/images/products/highlighter-set.webp", unit: "set", sku: "EDU-HIG-004", price: "R 34.00", featured: false, features: ["6 neon colors", "Chisel tip", "Long-lasting-ink", "Vibrant colors"] },
  //{ id:5, name: "Lever Arch Files A4 Black & White Mottle – 50 Pack", category: "stationery", slug: "Lever-Arch-Files", description: "Premium-quality document filing solutions designed to organise, protect, and store A4-sized documents efficiently in professional and educational environments.", image: "/images/products/Lever-Arch-Files.webp", unit: "pack of 50", sku: "LV-005", price: "R 1,122.00", featured: true, features: ["A4 Document Compatibility", "Heavy-Duty Lever Arch Mechanism", "Classic Black & White Mottle Finish", "Pack of 50 Files"] },
 // { id:6, name: "Corrugated Archive Box F/S – 12 Pack", category: "stationery", slug: "corrugated-archive-box", description: "Durable and practical document storage solution designed for the safe archiving, organisation, and transportation of foolscap-sized files and records.", image: "/images/products/corrugated-archive-box.webp", unit: "12 Pack", sku: "EDU-FUR-016", price: "R 286.99", featured: true, features: ["Foolscap Size (F/S) Compatibility", "Strong Corrugated Cardboard Construction", "Pack of 12 Boxes", "Easy Assembly"] },
  //{ id:7, name: "TYPEK Paper A4 500 Sheet Ream EAs", category: "stationery", slug: "Typek-A4", description: "Premium-quality multifunction office paper engineered to deliver exceptional performance across all printing, copying, and everyday office applications", image: "/images/products/Typek5.webp", unit: "box of 5", sku: "TPK-003", price: "R 379.99", featured: true, features: ["Premium A4 Office Paper", "80gsm Paper Weight", "Bright White Finish", "Superior Print Quality", "Excellent Double-Sided Printing", "Reliable Printer Performance", "Environmentally Responsible", "Bulk Pack – 2,500 Sheets"] },
  //{ id:8, name: "Suspension Files – 50 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "suspension-file", description: "Premium-quality hanging files designed to provide an efficient, organised, and professional document management system.", image: "/images/products/Suspension-Files.webp", unit: "pack of 50", sku: "SF-005", price: "R 250.00", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },
 // { id:9, name: "Value Pack Box + 5 Lever Arch Files", category: "stationery", slug: "Lever-Arch-Files", description: "Convenient and cost-effective document storage solution designed to help businesses and individuals organise, protect, and archive important paperwork.", image: "/images/products/ValuePack-box5.webp", unit: "box of 5", sku: "VP-003", price: "R 255.00", featured: true, features: ["Complete Filing Solution", "Premium Lever Arch Files", "Durable Archive Storage Box", "A4 Document Compatibility"] },
 // { id:10, name: "Suspension Files – 25 Pack with Flexi Tabs & Inserts", category: "stationery", slug: "suspension-file", description: "Premium-quality hanging files designed to provide an efficient, organised, and easily accessible document filing system.", image: "/images/products/Suspension_Files25.webp", unit: "pack of 25", sku: "SF-025", price: "R 199.99", featured: true, features: ["Pack of 50 Suspension Files", "Flexi Tabs & Replaceable Inserts", "Heavy-Duty Manila Card Construction", "Strong Metal Suspension Rails"] },
  

  // Office Furniture
//  { id:11, name: "Classic Eames High Back-Cushion", category: "furniture", slug: "furniture", description: "Luxurious executive office chair designed to deliver superior comfort, ergonomic support, and timeless sophistication.", image: "https://i.imgur.com/bcPlRtd.webp", unit: "each", sku: "CEH-012", price: "R 5,495.00", featured: true, features: ["Elegant Executive Design", "High Back Ergonomic Support", "Extra-Thick Cushioned Padding", "Premium Upholstery"] },
 // { id:12, name: "Activity Executive Desk with Side Cabinet", category: "furniture", slug: "ergonomic-chair", description: "Premium office workstation designed to combine executive style, spacious functionality, and practical storage.", image: "images/activity.webp", unit: "each", sku: "AED-013", price: "R 16,480.00", featured: false, features: ["Modern Executive Design", "Integrated Side Cabinet", "Large Executive Work Surface", "Lockable Drawers (Model Dependent)"] },
//  { id:13, name: "Lenny Medium Back Chair", category: "furniture", slug: "furniture", description: "Modern, ergonomic office chair designed to provide comfort, support, and functionality for everyday use.", image: "images/Lenny.webp", unit: "each", sku: "LMB-014", price: "R 4330.00", featured: false, features: ["Ergonomic Medium Back Design", "Comfortable Padded Seat & Backrest", "Height Adjustable", "Smooth 360° Swivel"] },
 // { id:14, name: "Walnut Boardroom Table", category: "furniture", slug: "furniture", description: "Premium conference table designed to bring elegance, functionality, and professionalism to modern meeting spaces.", image: "images/Walnut.webp", unit: "each", sku: "WAL-015", price: "R 11,455.00", featured: true, features: ["Elegant Walnut Finish", "Spacious Meeting Surface", "Durable Construction", "Scratch & Stain Resistant Surface"] },
 // { id:15, name: "Nevada L-Shaped Desk", category: "furniture", slug: "furniture", description: "Contemporary workstation designed to maximise workspace, improve organisation, and enhance productivity.", image: "images/Nevada.webp", unit: "each", sku: "NLD-016", price: "R 17,525.00", featured: true, features: ["L-Shaped Workstation Design", "Large Work Surface", "Integrated Storage (Model Dependent)", "Durable Construction"] },
 // { id:16, name: "Tide Black High Back Chair", category: "furniture", slug: "furniture", description: "Contemporary executive office chair designed to deliver exceptional comfort, ergonomic support, and professional style.", image: "images/Tide.webp", unit: "each", sku: "TID-014", price: "R 3,455.00", featured: true, features: ["Ergonomic High-Back Design", "Premium Cushioned Comfort", "Stylish Black Upholstery", "Adjustable Seat Height"] },
 // { id:17, name: "Activity Straight Reception Desk", category: "furniture", slug: "furniture", description: "Modern and functional reception solution designed to create a professional first impression while providing an efficient workspace for receptionists and front-office personnel.", image: "images/Straight.webp", unit: "each", sku: "STR-015", price: "R 19,605.00", featured: false, features: ["Modern Straight-Line Design", "Raised Reception Counter", "Spacious Workstation", "Integrated Storage"] },
 // { id:18, name: "President High Back Office Chair", category: "furniture", slug: "furniture", description: "Premium executive seating solution designed to provide exceptional comfort, ergonomic support, and professional style.", image: "images/president.webp", unit: "each", sku: "PRC-016", price: "R 8,460.00", featured: true, features: ["5 tiers", "Executive High-Back Design", "Ergonomic Comfort", "Premium Upholstery", "Adjustable Seat Height", "Tilt & Recline Mechanism", "360° Swivel Function"] },
//  { id:19, name: "Classic Eames High Back Chair", category: "furniture", slug: "furniture", description: "Luxurious executive office chair designed to deliver superior comfort, ergonomic support, and timeless sophistication.", image: "images/chair.webp", unit: "each", sku: "EA-003", price: "R 5,330.00", featured: true, features: ["Iconic Executive Design", "High Back Ergonomic Support", "Premium Upholstered Seat and Backrest", "Adjustable Seat Height", "Tilt and Recline Function", "Smooth-Rolling Castors"] },
 // { id:20, name: "Indigo Boardroom Table", category: "furniture", slug: "furniture", description: "Executive-quality meeting table designed to create a professional and collaborative environment for boardrooms, conference rooms, and executive offices.", image: "images/Indigo-.webp", unit: "EA", sku: "IDG-005", price: "R 250.00", featured: true, features: ["Modern Executive Design", "Spacious Work Surface", "Premium Construction", "Robust Frame", "Easy-to-Clean Surface"] },



  // PPE & Safety
  //{ id: 21, name: "Face Mask (3 ply) Black – Case of 20 boxes (1000 units)", category: "ppe", slug: "face-masks", description: "High-quality, single-use protective face mask designed to provide effective everyday protection while ensuring maximum comfort and breathability.", image: "images/Face-Mask.webp", unit: "box of 50", sku: "PPE-003", price: "R 95.00", featured: true, features: ["3-ply protection", "Elastic ear loops", "Breathable material", "CE certified"] },
 // { id: 22, name: "Reusable Corded Ear Plugs", category: "ppe", slug: "ear-plugs", description: "High-quality hearing protection devices designed to reduce exposure to harmful noise levels while ensuring comfort, convenience, and long-lasting performance.", image: "images/Ear-Plugs.webp", unit: "EA", sku: "EDU-PPE-004", price: "R 7.99", featured: true, features: ["Effective Hearing Protection", "Reusable Design", "Soft & Comfortable Material", "Corded Convenience", "Easy to Insert & Remove", "Washable & Hygienic"] },
 // { id: 23, name: "Safety Goggles", category: "ppe", slug: "safety-goggles.png", description: "Anti-fog safety goggles with adjustable strap, clear lens.", image: "images/safety-goggles.webp", unit: "each", sku: "EDU-PPE-005", price: "R 147,99", featured: false, features: ["Anti-fog", "Adjustable strap", "Clear lens", "Impact resistant"] },
 // { id: 24, name: "Disposable Aprons (100/pack)", category: "ppe", slug: "aprons", description: "Lightweight, waterproof protective garments designed to provide an effective barrier against spills, splashes, dirt, and contaminants in a wide range of professional environments.", image: "images/Disposable-Aprons.webp", unit: "pack of 100", sku: "DA-006", price: "R 103.00", featured: false, features: ["100 per pack", "Waterproof", "Disposable", "White", "Single-Use Disposable Design", "Universal Fit", "Easy Tie Fastening"] },
  //{ id: 25, name: "Deli Gloves (Pack of 100)", category: "ppe", slug: "gloves", description: "Lightweight, disposable food-handling gloves designed to provide a hygienic barrier between hands and food products.", image: "images/Deli-Gloves.webp", unit: "()100's)", sku: "DGL-007", price: "R 15.99", featured: true, features: ["Food-Safe Material", "Disposable Single-Use Design", "Pack of 100 Gloves", "Ambidextrous Fit", "Lightweight & Comfortable", "Easy to Put On & Remove", "Latex-Free"] },
 // { id: 26, name: "SA10 Reflective Safety Vest – Various Sizes", category: "ppe", slug: "covers", description: "High-visibility personal protective garment designed to improve worker safety in low-light, high-traffic, and hazardous environments.", image: "images/Reflective-Vest.webp", unit: "each", sku: "SRV-005", price: "R 79.99", featured: true, features: ["High-Visibility Design", "Reflective Tape", "Lightweight & Breathable", "Durable Construction", "Front Closure", "Various Sizes Available", "Comfortable Fit"] },
  //{ id: 27, name: "Disposable Shoe Covers (Plastic) – Pack of 100", category: "ppe", slug: "covers", description: "Lightweight, waterproof protective covers designed to prevent the transfer of dirt, dust, moisture, and contaminants into clean or controlled environments.", image: "images/Plastic-Shoe.webp", unit: "pack of 100", sku: "SC-006", price: "R 120.39", featured: true, features: ["Durable Polyethylene Construction", "Waterproof Protection", "Disposable Single-Use Design", "Pack of 100", "Elastic Opening", "Quick & Easy to Wear"] },
 // { id: 28, name: "Mop Cap (Pack of 100 Units) – Various Colours", category: "ppe", slug: "cap", description: "Disposable head covering designed to maintain high standards of hygiene by preventing hair from contaminating clean or controlled environments.", image: "images/Mop-Cap.webp", unit: "100's", sku: "CAP-007", price: "R 95.99", featured: true, features: ["Premium Non-Woven Polypropylene", "Disposable Single-Use Design", "Pack of 100 Units", "Elasticated Edge", "Various Colour Options"] },
 // { id: 29, name: "Safety Hard Hat (SABS Approved) – Various Colours", category: "ppe", slug: "HARD-HAT", description: "High-quality personal protective helmet designed to provide reliable head protection in hazardous work environments.", image: "images/Hard-Hat.webp", unit: "EA", sku: "HH-003", price: "R 26.99", featured: true, features: ["SABS Approved", "High-Impact Resistant Shell", "Adjustable Suspension Harness", "Lightweight & Comfortable", "Various Colour Options", "Ventilated Options (Model Dependent)"] },
 // { id: 30, name: "Heat Resistant Gloves", category: "ppe", slug: "gloves", description: "Premium personal protective gloves designed to provide reliable protection against high temperatures, hot surfaces, and thermal hazards in demanding work environments.", image: "images/Heat-Resistant.webp", unit: "EA", sku: "HRG-005", price: "R 136.99", featured: true, features: ["Superior Heat Resistance", "Durable Construction", "Comfortable Ergonomic Fit", "Enhanced Grip", "Extended Wrist Protection", "Abrasion & Tear Resistant", "Breathable Interior", "Reusable Design"] },


  // Cleaning & Hygiene
 // { id: 31, name: "Magic Wipe Disposable Spunlace Cloth Roll", category: "cleaning", slug: "cloth-roll", description: "Premium multi-purpose cleaning cloth designed for superior absorbency, strength, and hygiene across commercial, industrial, healthcare, and hospitality environments.", image: "images/Cloth-Roll.webp", unit: "400m Roll", sku: "CR-005", price: "R 499.00", featured: true, features: ["Premium Spunlace Non-Woven Material", "Highly Absorbent", "Lint-Free Cleaning", "Disposable Single-Use Design", "Wet & Dry Use"] },
  //{ id: 32, name: "Toilet Paper Dispenser – 3 Roll (TR3)", category: "cleaning", slug: "paper-towels", description: "Robust, high-capacity washroom solution designed to provide continuous access to toilet tissue while reducing maintenance and refill frequency.", image: "images/3-Roll.webp", unit: "EA", sku: "TR3-006", price: "R 529.00", featured: true, features: ["3-Roll High Capacity", "Lockable Design", "Heavy-Duty Construction", "Wall-Mounted Installation", "Manual Dispensing System", "Refill Viewing Window", "Vandal-Resistant Design"] },
 // { id: 33, name: "55cm Mustik Double Blade Floor Squeegee Only", category: "cleaning", slug: "floor-sweeper", description: "Heavy-duty cleaning tool designed for the fast and efficient removal of water, spills, cleaning solutions, and other liquids from a wide variety of floor surfaces.", image: "images/55cm-Mustik.webp", unit: "each", sku: "BLD-007", price: "R 450.00", featured: true, features: ["55cm Wide Cleaning Head", "Double Rubber Blade Design", "Heavy-Duty Construction", "Effective Liquid Removal", "Suitable for Multiple Floor Types", "Easy Handle Attachment", "Low Maintenance"] },
 // { id: 34, name: "Pot Scourer (Pack of 36)", category: "cleaning", slug: "bin-liners", description: "Heavy-duty cleaning solution designed to tackle stubborn grease, burnt-on food, and tough grime on cookware, kitchen utensils, and hard surfaces.", image: "images/Pot-scourer.webp", unit: "pack of 36", sku: "POT-008", price: "R 67.99", featured: false, features: ["Heavy-Duty Cleaning Performance", "Durable Construction", "Pack of 36 Scourers", "Highly Effective Scrubbing Action", "Flexible & Easy to Handle", "Long-Lasting Performance", "Multi-Purpose Cleaning"] },
 // { id: 35, name: "Infrared Thermometer – Hands-Free Tripod Mounted – K3", category: "cleaning", slug: "microfibre-cloths", description: "High-performance, non-contact temperature screening device designed for fast, accurate, and hygienic body temperature measurement.", image: "images/mounted-thermo.webp", unit: "EA", sku: "TK3-009", price: "R 999.00", featured: false, features: ["Hands-Free Operation", "Advanced Infrared Sensor", "Tripod Mounted Design", "Automatic Temperature Detection", "Fast Response Time", "Large Digital Display", "Fever Alarm Function", "Non-Contact Measurement", "Durable Construction"] },
 // { id: 36, name: "Premium Flippable Swivel Face Shield – 1000 Micron", category: "cleaning", slug: "face-mask", description: "High-quality reusable face protection solution designed to safeguard the wearer against airborne droplets, liquid splashes, dust, and flying particles.", image: "images/premium-face.webp", unit: "each", sku: "FS-007", price: "R 105.99", featured: false, features: ["1000-Micron Heavy-Duty Visor", "Flippable Swivel Design", "Flippable Swivel Design", "Full Face Coverage", "Crystal-Clear Visibility", "Adjustable Headband", "Lightweight & Comfortable", "Compatible with Other PPE & Easy to Clean"] },
//  { id: 37, name: "19L Pedal Sanitary Bin / She Bin", category: "cleaning", slug: "bin-liners", description: "Practical and hygienic waste disposal solution designed for the safe and discreet disposal of feminine hygiene products in commercial, institutional, and public washrooms.", image: "images/19l-Sanibin.webp", unit: "EA", sku: "19L-008", price: "R 699.99", featured: false, features: ["19-Litre Capacity", "9Hands-Free Pedal Operation", "Soft-Closing Lid", "Durable Construction", "Compact & Space-Efficient Design", "Easy to Clean", "Leak-Resistant Inner Bucket", "Stable Non-Slip Base"] },
  //{ id: 38, name: "Plexiglass Counter Desk Shield – 600 × 500 × 3mm", category: "cleaning", slug: "Desk-Shield", description: "Clear, durable protective barrier designed to provide a safe and hygienic separation between staff and customers during face-to-face interactions.", image: "images/Plexiglass_Desk.webp", unit: "EA", sku: "PGD-009", price: "R 530.00", featured: false, features: ["High-Quality Clear Plexiglass", "Protective Barrier", "Optimal Size", "Stable Freestanding Design", "Transaction Opening (Model Dependent)", "Easy to Clean", "Lightweight & Portable", "Durable Construction"] },
 // { id: 39, name: "Multipurpose Cleaning Solution 5L", category: "cleaning", slug: "multipurpose cleaning solution 5L", description: "Premium two-in-one vehicle cleaning solution that effectively washes and protects your vehicle in a single application.", image: "images/all-purpose5L.webp", unit: "EA", sku: "APC-003", price: "R 186.99", featured: true, features: ["Powerful Cleaning Action", "Enhanced Gloss Finish", "High-Foaming Formula", "A4 Document Compatibility", "Easy to Use", "Pleasant Fragrance"]  },
 // { id: 40, name: "Heavy-Duty Degreaser Cleaner – 5L", category: "cleaning", slug: "heavy-duty-degreaser-cleaner", description: "Powerful, professional-grade cleaning solution formulated to cut through stubborn grease, oil, grime, carbon deposits, and industrial dirt with ease.", image: "images/heavy-duty-degreaser-cleaner -5L.webp", unit: "EA", sku: "DGR-005", price: "R 536.99", featured: true, features: ["Powerful Degreasing Formula", "Powerful Degreasing Formula", "Professional-Grade Performance", "Concentrated 5L Solution", "Multi-Surface Compatibility", "Fast-Acting Formula", "Low-Residue Finish", "Easy Application", "Large 5L Capacity"] },


  // Generate 80 more products
  //...Array.from({ length: 0 }, (_, i) => {
   // const categories = ['stationery', 'furniture', 'ppe', 'cleaning'];
   // const cat = categories[i % categories.length];
   // const names = {
   //   stationery: ['Stapler', 'Whiteboard Marker', 'Correction Tape', 'Glue Stick', 'Scissors', 'Ruler', 'Pencil Set', 'Eraser', 'Sharpener', 'Notebook'],
   //   furniture: ['Desk Lamp', 'Shelf Unit', 'Drawer Organiser', 'Monitor Stand', 'Coat Hanger', 'Side Table', 'Bookcase', 'Pedestal', 'Desk Tidy', 'Screen Divider'],
   //   ppe: ['Ear Plugs', 'Face Shield', 'Safety Boots', 'Hard Hat', 'Reflective Vest', 'Safety Harness', 'Knee Pads', 'Gloves (Leather)', 'Respirator', 'First Aid Kit'],
   //   cleaning: ['Broom', 'Mop', 'Duster', 'Window Cleaner', 'Floor Polish', 'Disinfectant Spray', 'Toilet Cleaner', 'Scrub Brush', 'Bucket', 'Squeegee']
    //};
   // const catNames = names[cat] || ['Product'];
   // const name = catNames[i % catNames.length] + ' ' + (i + 21);
   // return {
 
   //   name: name,
    //  category: cat,
    //  slug: name.toLowerCase().replace(/\s+/g, '-'),
    //  description: `High-quality ${cat} product for professional use.`,
    //  image: `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/400/300`,
    //  unit: i % 2 === 0 ? 'each' : 'pack',
    //  sku: `EDU-${cat.slice(0,3).toUpperCase()}-${String(i+21).padStart(3,'0')}`,
   //   price: `R ${(Math.random() * 2000 + 50).toFixed(0)}.00`,
   //   featured: i % 5 === 0,
   //   features: [`Quality ${cat} product`, 'Professional grade', 'Durable', 'Reliable']
   // };
 // })
//];




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
    <div class="product-card bg-gradient-to-b from-white to-gray-50/80 rounded-xl shadow-md overflow-hidden w-[82vw] max-w-xs flex-shrink-0 snap-center sm:w-64 border border-gray-200/60 hover:border-[#F05A28]/40 transition-all duration-300 cursor-pointer" data-id="${product.id}">
      <div class="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200/50">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4" onerror="this.onerror=null; this.src='/images/placeholders/educore-placeholder.webp';" />
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
        <div class="mb-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <h3 class="flex items-center justify-center gap-2 text-xl font-bold text-[#1A2B4C] sm:justify-start">
            <i class="fas ${cat.icon}"></i> ${cat.label}
          </h3>
          <a href="#" class="text-[#F05A28] hover:underline text-sm font-medium section-link" data-category="${cat.key}">View All →</a>
        </div>
        <div class="relative">
          <div id="${sliderId}" class="slider-container flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth" data-category="${cat.key}">
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


console.log("Slider HTML length:", html.length);
console.log("Landing sections created:", container.children.length);
console.log("Landing slider container HTML:", container.innerHTML.slice(0, 500));

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


function initialiseMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  console.log("Initialising mobile menu:", {
    menuToggle,
    mobileMenu
  });

  if (!menuToggle || !mobileMenu) {
    console.error("Mobile menu elements were not found.");
    return;
  }

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    console.log("Mobile toggle clicked");

    const isCurrentlyHidden =
      mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle(
      "hidden",
      !isCurrentlyHidden
    );

    menuToggle.setAttribute(
      "aria-expanded",
      String(isCurrentlyHidden)
    );

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars", !isCurrentlyHidden);
      icon.classList.toggle("fa-times", isCurrentlyHidden);
    }
  });

  document
    .querySelectorAll("#mobile-menu .nav-link")
    .forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");

        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
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


function buildCatalogueDocDefinition() {
  if (!Array.isArray(products) || products.length === 0) {
    throw new Error(
      'Products are still loading from Google Sheets. Please try again.'
    );
  }

  const currentProducts = products;

  const sortedProducts = [...currentProducts].sort((a, b) => {
    const categoryComparison = String(a.category || '').localeCompare(
      String(b.category || '')
    );

    if (categoryComparison !== 0) {
      return categoryComparison;
    }

    return String(a.name || '').localeCompare(
      String(b.name || '')
    );
  });

  const tableBody = sortedProducts.map(product => [
    String(product.sku || ''),
    String(product.name || ''),
    formatCategory(product.category),
    String(product.unit || ''),
    String(product.price || ''),
    truncateText(product.description, 60)
  ]);

  return {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [30, 60, 30, 50],

    header() {
      return {
        columns: [
          {
            text: 'EDUCORE',
            bold: true,
            fontSize: 16,
            color: '#1A2B4C'
          },
          {
            text: 'Product Catalogue 2026',
            alignment: 'right',
            fontSize: 11,
            color: '#F05A28'
          }
        ],
        margin: [30, 20, 30, 0]
      };
    },

    footer(currentPage, pageCount) {
      return {
        text: `Page ${currentPage} of ${pageCount}`,
        alignment: 'center',
        fontSize: 8,
        color: '#6B7280',
        margin: [0, 10, 0, 0]
      };
    },

    content: [
      {
        text: 'Complete Product Catalogue',
        style: 'title'
      },
      {
        text:
          'Stationery • Office Furniture • PPE & Safety • Cleaning & Hygiene',
        style: 'subtitle'
      },
      {
        text: `Generated: ${new Date().toLocaleString('en-ZA')}`,
        alignment: 'right',
        fontSize: 8,
        margin: [0, 0, 0, 15]
      },
      {
        table: {
          headerRows: 1,
          widths: [75, '*', 85, 70, 65, '*'],
          body: [
            [
              { text: 'SKU', style: 'tableHeader' },
              { text: 'Product Name', style: 'tableHeader' },
              { text: 'Category', style: 'tableHeader' },
              { text: 'Unit', style: 'tableHeader' },
              { text: 'Price', style: 'tableHeader' },
              { text: 'Description', style: 'tableHeader' }
            ],
            ...tableBody
          ]
        },

        layout: {
          fillColor(rowIndex) {
            if (rowIndex === 0) {
              return '#1A2B4C';
            }

            return rowIndex % 2 === 0
              ? '#F3F4F6'
              : null;
          },

          hLineColor: '#D1D5DB',
          vLineColor: '#D1D5DB',
          paddingLeft: () => 5,
          paddingRight: () => 5,
          paddingTop: () => 5,
          paddingBottom: () => 5
        }
      }
    ],

    styles: {
      title: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        color: '#1A2B4C',
        margin: [0, 0, 0, 6]
      },

      subtitle: {
        fontSize: 11,
        alignment: 'center',
        color: '#4B5563',
        margin: [0, 0, 0, 14]
      },

      tableHeader: {
        bold: true,
        color: '#FFFFFF',
        fontSize: 8
      }
    },

    defaultStyle: {
      fontSize: 7
    }
  };
}

function formatCategory(category) {
  const value = String(category || '').trim();

  if (!value) {
    return '';
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function truncateText(value, maximumLength) {
  const text = String(value || '');

  return text.length > maximumLength
    ? `${text.substring(0, maximumLength)}…`
    : text;
}


// ============================
// PDF GENERATION
// ============================
function generateCataloguePDF(clickedButton) {
  const button =
    clickedButton ||
    document.getElementById('generatePdfBtn');

  const originalHtml =
    button?.innerHTML ||
    '<i class="fas fa-download"></i> Download Catalogue (PDF)';

  try {
    if (!window.pdfMake) {
      throw new Error('pdfMake failed to load.');
    }

    if (!Array.isArray(products) || products.length === 0) {
      throw new Error(
        'Products are still loading. Please try again.'
      );
    }

    if (button) {
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    }

    const documentDefinition =
      buildCatalogueDocDefinition();

    window.pdfMake
      .createPdf(documentDefinition)
      .download(
        'educore-catalogue-2026.pdf',
        function () {
          restorePdfButton(button, originalHtml);
        }
      );
  } catch (error) {
    console.error('PDF generation failed:', error);

    restorePdfButton(button, originalHtml);

    alert(`PDF generation failed: ${error.message}`);
  }
}

function restorePdfButton(button, originalHtml) {
  if (!button) return;

  button.disabled = false;
  button.removeAttribute('aria-busy');
  button.innerHTML = originalHtml;
}

function openCataloguePDFForPrint(clickedButton) {
  const button =
    clickedButton ||
    document.getElementById('printPdfBtn');

  const originalHtml =
    button?.innerHTML ||
    '<i class="fas fa-print"></i> Print Catalogue';

  try {
    if (!window.pdfMake) {
      throw new Error('pdfMake failed to load.');
    }

    if (!Array.isArray(products) || products.length === 0) {
      throw new Error(
        'Products are still loading. Please try again.'
      );
    }

    if (button) {
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Preparing...';
    }

    const documentDefinition =
      buildCatalogueDocDefinition();

    window.pdfMake
      .createPdf(documentDefinition)
      .getBlob(function (blob) {
        restorePdfButton(button, originalHtml);

        const pdfUrl = URL.createObjectURL(blob);
        const printWindow = window.open(pdfUrl, '_blank');

        if (!printWindow) {
          URL.revokeObjectURL(pdfUrl);

          alert(
            'The browser blocked the print window. Please allow popups.'
          );

          return;
        }

        setTimeout(function () {
          try {
            printWindow.print();
          } finally {
            setTimeout(function () {
              URL.revokeObjectURL(pdfUrl);
            }, 5000);
          }
        }, 1500);
      });
  } catch (error) {
    console.error('PDF print failed:', error);

    restorePdfButton(button, originalHtml);

    alert(`PDF print failed: ${error.message}`);
  }
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




// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    filterProducts();
  });
});

// Set initial active filter
document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');


// Set initial active filter
document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
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
// GOOGLE SHEETS LOADER
// ============================

async function loadProductsFromSheet() {

  try {

    console.log("Starting Google Sheet load...");

    products = await getProductsFromGoogleSheets();

    console.log(`Loaded ${products.length} products from Google Sheets`);
    console.table(products.slice(0, 5));

    console.log("FIRST PRODUCT:", products[0]);

console.log(
  "CATEGORY SLIDERS:",
  document.getElementById("category-sliders")
);

console.log(
  "CATALOGUE GRID:",
  document.getElementById("catalogue-grid")
);

console.log(
  "CATEGORIES RECEIVED:",
  [...new Set(products.map(product => product.category))]
);
    renderSliders();

    renderCatalogue(products);


    const countEl = document.getElementById("pdfProductCount");
    if (countEl) countEl.textContent = products.length;


    const countEl2 = document.getElementById("pdfProductCount2");
    if (countEl2) countEl2.textContent = products.length;


    const featureCount = document.getElementById("featureProductCount");
    if (featureCount) featureCount.textContent = products.length;


  } catch (error) {

    console.error(
      "Failed to load Google Sheets products:",
      error
    );

  }

}



// ============================
// INITIALIZATION
// ============================

document.addEventListener('DOMContentLoaded', function() {
  loadProductsFromSheet();
  renderBasket();

initialiseMobileMenu();


const generatePdfButton =
  document.getElementById('generatePdfBtn');

const printPdfButton =
  document.getElementById('printPdfBtn');

generatePdfButton?.addEventListener(
  'click',
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    generateCataloguePDF(this);
  }
);

printPdfButton?.addEventListener(
  'click',
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    openCataloguePDFForPrint(this);
  }
);

document.querySelectorAll("[data-section]").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const section = this.dataset.section;

    if (!section) return;

    showSection(section);

    document
      .getElementById("mobile-menu")
      ?.classList.add("hidden");
  });
});


// --- Attach search events ---
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const mobileSearch = document.getElementById('mobile-search');
  const clearDesktop = document.getElementById('clear-search-desktop');
  const clearMobile = document.getElementById('clear-search-mobile');


  
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



document
  .querySelectorAll("#mobile-menu .nav-link")
  .forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu?.classList.add("hidden");

      menuToggle?.setAttribute("aria-expanded", "false");

      const icon = menuToggle?.querySelector("i");

      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    });
  });

  if (mobileSearch) {
    mobileSearch.addEventListener('input', function() {
      const desktop = document.getElementById('search-input');

      if (desktop) {
        desktop.value = this.value;
      }

      performSearch();
    });
  }

  if (clearDesktop) {
    clearDesktop.addEventListener('click', clearSearch);
  }

  if (clearMobile) {
    clearMobile.addEventListener('click', clearSearch);
  }

  [searchInput, mobileSearch].forEach(input => {
    if (!input) return;

    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        clearSearch();
        this.blur();
      }
    });
  });

  // EmailJS initialization
  if (typeof emailjs !== 'undefined') {
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = document.getElementById('contact-submit-btn');
      const feedback = document.getElementById('contact-feedback');

      const formData = {
        from_name: document.getElementById('contact-name')?.value || '',
        from_email: document.getElementById('contact-email')?.value || '',
        company: document.getElementById('contact-company')?.value || '',
        subject: document.getElementById('contact-subject')?.value || '',
        message: document.getElementById('contact-message')?.value || '',
        to_email: 'info@educore.co.za'
      };

      if (
        !formData.from_name ||
        !formData.from_email ||
        !formData.message
      ) {
        if (feedback) {
          feedback.className =
            'text-center text-sm mt-2 text-red-600';

          feedback.textContent =
            'Please fill in all required fields.';

          feedback.classList.remove('hidden');
        }

        return;
      }

      if (typeof emailjs === 'undefined') {
        console.error('EmailJS library is not loaded.');

        if (feedback) {
          feedback.className =
            'text-center text-sm mt-2 text-red-600';

          feedback.textContent =
            'Email service is currently unavailable.';

          feedback.classList.remove('hidden');
        }

        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';
      }

      feedback?.classList.add('hidden');

      emailjs
        .send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          formData
        )
        .then(function() {
          if (feedback) {
            feedback.className =
              'text-center text-sm mt-2 text-green-600';

            feedback.textContent =
              '✅ Your message was sent successfully!';

            feedback.classList.remove('hidden');
          }

          contactForm.reset();
        })
        .catch(function(error) {
          console.error('EmailJS error:', error);

          if (feedback) {
            feedback.className =
              'text-center text-sm mt-2 text-red-600';

            feedback.textContent =
              '❌ There was an error sending your message.';

            feedback.classList.remove('hidden');
          }
        })
        .finally(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML =
              '<i class="fas fa-paper-plane"></i> Send Message';
          }
        });
    });
  }

  // Default section
  showSection('home');
});

  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {

    link.addEventListener('click', function(e) {

      e.preventDefault();

      showSection(this.dataset.section);

    });

  });



 

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



// ============================
// CONTACT FORM – EmailJS
// ============================


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

console.table({
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalBackLink: document.getElementById("modalBackLink"),
  modalContactSales: document.getElementById("modalContactSales"),
  modalAddToQuote: document.getElementById("modalAddToQuote")
});


const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalBackLink = document.getElementById("modalBackLink");
const modalContactSales = document.getElementById("modalContactSales");
const modalAddToQuote = document.getElementById("modalAddToQuote");

modalCloseBtn?.addEventListener("click", function (event) {
  event.preventDefault();
  closeProductModal();
});

modalOverlay?.addEventListener("click", function () {
  closeProductModal();
});

modalBackLink?.addEventListener("click", function (event) {
  event.preventDefault();
  closeProductModal();
  showSection("catalogue");
});

modalContactSales?.addEventListener("click", function () {
  closeProductModal();
  showSection("contact");
});

modalAddToQuote?.addEventListener("click", function () {
  if (!currentProduct) return;

  const quantity = Number(
    document.getElementById("modalQtyValue")?.textContent || 1
  );

  addToBasket(currentProduct.id, quantity);
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

document.addEventListener('click', function (event) {
  const downloadButton = event.target.closest('#generatePdfBtn');

  if (downloadButton) {
    event.preventDefault();
    event.stopPropagation();
    generateCataloguePDF();
    return;
  }

  const printButton = event.target.closest('#printPdfBtn');

  if (printButton) {
    event.preventDefault();
    event.stopPropagation();
    openCataloguePDFForPrint();
  }
});

  // Default home
  showSection('home');
});

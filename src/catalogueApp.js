import { getProductsFromGoogleSheets } from "./services/googleSheets.js";
import {
  addQuoteItem,
  getQuoteBasket,
  quoteItemCount,
  removeQuoteItem
} from "./services/quoteBasket.js";

const state = { products: [], category: "all", query: "", selected: null, quantity: 1 };
const fallbackImage = "/images/placeholders/educore-placeholder.webp";
const categoryLabels = {
  all: "All Products",
  stationery: "Stationery",
  furniture: "Furniture",
  ppe: "PPE",
  cleaning: "Cleaning & Hygiene",
  hospital: "Hospital Equipment"
};

const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[character]));

function productCard(product) {
  return `<article class="product-card flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm" data-product-id="${escapeHtml(product.id)}">
    <button class="view-product h-52 bg-gray-50" type="button" aria-label="View ${escapeHtml(product.name)} details">
      <img src="${escapeHtml(product.image || fallbackImage)}" alt="${escapeHtml(product.name)}" class="h-full w-full object-contain p-4" onerror="this.onerror=null;this.src='${fallbackImage}'">
    </button>
    <div class="flex flex-1 flex-col p-4">
      <p class="text-xs font-semibold uppercase tracking-wide text-[#F05A28]">${escapeHtml(categoryLabels[product.category] || product.category)}</p>
      <button class="view-product mt-1 text-left text-lg font-bold text-[#1A2B4C] hover:text-[#F05A28]" type="button">${escapeHtml(product.name)}</button>
      <p class="mt-2 line-clamp-2 flex-1 text-sm text-gray-600">${escapeHtml(product.description)}</p>
      <div class="mt-4 flex items-center justify-between gap-3">
        <span class="font-bold text-[#F05A28]">${escapeHtml(product.price || "Request Quote")}</span>
        <button type="button" class="add-to-quote rounded-lg bg-[#F05A28] px-3 py-2 text-sm font-semibold text-white hover:bg-[#d94a1e]" data-product-id="${escapeHtml(product.id)}"><i class="fas fa-plus mr-1"></i>Add to Quote</button>
      </div>
      <button class="view-product mt-3 text-left text-xs font-medium text-[#1A2B4C] hover:underline" type="button">View product details →</button>
    </div>
  </article>`;
}

function filteredProducts() {
  const query = state.query.toLowerCase();
  return state.products.filter(product => {
    const categoryMatch = state.category === "all" || product.category === state.category;
    const text = `${product.name} ${product.sku} ${product.description} ${product.brand}`.toLowerCase();
    return categoryMatch && (!query || text.includes(query));
  });
}

function renderProducts() {
  const grid = document.getElementById("catalogue-grid");
  const products = filteredProducts();
  document.getElementById("catalogue-title").textContent = categoryLabels[state.category] || "Products";
  document.getElementById("catalogue-result-count").textContent = `${products.length} product${products.length === 1 ? "" : "s"}`;
  grid.innerHTML = products.length ? products.map(productCard).join("") : `<div class="col-span-full py-14 text-center"><i class="fas fa-search mb-3 block text-4xl text-gray-300"></i><p class="font-medium text-gray-600">No products found.</p><button id="reset-catalogue" class="mt-3 text-sm font-semibold text-[#F05A28]">Clear filters</button></div>`;
}

function updateUrl() {
  const params = new URLSearchParams();
  if (state.category !== "all") params.set("category", state.category);
  if (state.query) params.set("q", state.query);
  history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
}

function selectCategory(category) {
  state.category = categoryLabels[category] ? category : "all";
  document.querySelectorAll("[data-category-filter]").forEach(link => link.classList.toggle("active", link.dataset.categoryFilter === state.category));
  updateUrl();
  renderProducts();
}

function ensureModal() {
  document.body.insertAdjacentHTML("beforeend", `<div id="product-modal" class="fixed inset-0 z-[70] hidden items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-name">
    <button id="product-modal-overlay" class="absolute inset-0 bg-black/60" aria-label="Close product details"></button>
    <div class="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
      <button id="close-product-modal" class="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-600 shadow" aria-label="Close product details"><i class="fas fa-times"></i></button>
      <div class="grid md:grid-cols-2">
        <div class="flex min-h-72 items-center justify-center bg-gray-50 p-6"><img id="modal-image" class="max-h-96 w-full object-contain" alt=""></div>
        <div class="p-6 md:p-8">
          <p id="modal-category" class="text-xs font-bold uppercase tracking-wide text-[#F05A28]"></p>
          <h2 id="modal-name" class="mt-1 text-2xl font-bold text-[#1A2B4C]"></h2>
          <p id="modal-price" class="mt-3 text-2xl font-bold text-[#F05A28]"></p>
          <div class="mt-3 flex flex-wrap gap-2 text-xs text-gray-600"><span id="modal-sku" class="rounded-full bg-gray-100 px-3 py-1"></span><span id="modal-unit" class="rounded-full bg-gray-100 px-3 py-1"></span></div>
          <p id="modal-description" class="mt-4 text-sm leading-6 text-gray-600"></p>
          <ul id="modal-features" class="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600"></ul>
          <div class="mt-6 flex flex-wrap items-center gap-3"><div class="flex items-center rounded-lg border"><button id="modal-minus" class="h-10 w-10" type="button" aria-label="Decrease quantity">−</button><span id="modal-quantity" class="w-10 text-center font-bold">1</span><button id="modal-plus" class="h-10 w-10" type="button" aria-label="Increase quantity">+</button></div><button id="modal-add" class="rounded-lg bg-[#F05A28] px-5 py-2.5 font-semibold text-white" type="button"><i class="fas fa-plus mr-1"></i>Add to Quote</button><a href="/quote.html" class="rounded-lg border border-[#1A2B4C] px-4 py-2.5 font-semibold text-[#1A2B4C]">View Quote</a></div>
        </div>
      </div>
    </div>
  </div>`);
}

function openModal(product) {
  state.selected = product;
  state.quantity = 1;
  document.getElementById("modal-image").src = product.image || fallbackImage;
  document.getElementById("modal-image").alt = product.name;
  document.getElementById("modal-category").textContent = categoryLabels[product.category] || product.category;
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-price").textContent = product.price || "Request Quote";
  document.getElementById("modal-sku").textContent = `SKU: ${product.sku || "N/A"}`;
  document.getElementById("modal-unit").textContent = `Unit: ${product.unit || "Each"}`;
  document.getElementById("modal-description").textContent = product.description || "Contact us for full product specifications.";
  document.getElementById("modal-features").innerHTML = product.features.length ? product.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("") : "";
  document.getElementById("modal-quantity").textContent = "1";
  document.getElementById("product-modal").classList.replace("hidden", "flex");
  document.body.style.overflow = "hidden";
  document.getElementById("close-product-modal").focus();
}

function closeModal() {
  document.getElementById("product-modal").classList.replace("flex", "hidden");
  document.body.style.overflow = "";
}

function renderBasket() {
  const items = getQuoteBasket();
  const count = quoteItemCount(items);
  document.querySelectorAll("#basket-count").forEach(element => element.textContent = count);
  const container = document.getElementById("basket-items");
  const empty = document.getElementById("basket-empty");
  if (!container || !empty) return;
  empty.classList.toggle("hidden", items.length > 0);
  container.innerHTML = items.map(item => `<div class="flex items-start justify-between gap-3 border-b pb-3"><div><p class="text-sm font-semibold text-[#1A2B4C]">${escapeHtml(item.name)}</p><p class="text-xs text-gray-500">${escapeHtml(item.sku || "No SKU")} · Qty ${item.quantity}</p></div><button class="remove-quote-item text-red-500" data-id="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.name)}"><i class="fas fa-times"></i></button></div>`).join("");
}

function toggleDrawer(open) {
  document.getElementById("basket-drawer")?.classList.toggle("open", open);
  document.getElementById("drawer-overlay")?.classList.toggle("show", open);
}

async function initialise() {
  ensureModal();
  const params = new URLSearchParams(location.search);
  state.category = categoryLabels[params.get("category")] ? params.get("category") : "all";
  state.query = params.get("q") || "";
  document.querySelectorAll("#search-input, #mobile-search").forEach(input => input.value = state.query);
  selectCategory(state.category);
  renderBasket();

  try {
    state.products = await getProductsFromGoogleSheets();
    renderProducts();
  } catch (error) {
    console.error(error);
    document.getElementById("catalogue-grid").innerHTML = `<p class="col-span-full py-14 text-center text-red-600">The catalogue could not be loaded. Please refresh or contact EDUCORE.</p>`;
  }
}

document.addEventListener("click", event => {
  const category = event.target.closest("[data-category-filter]");
  if (category) { event.preventDefault(); selectCategory(category.dataset.categoryFilter); }
  const card = event.target.closest("[data-product-id]");
  const product = card && state.products.find(item => String(item.id) === String(card.dataset.productId));
  if (event.target.closest(".view-product") && product) openModal(product);
  const add = event.target.closest(".add-to-quote");
  if (add && product) { addQuoteItem(product); renderBasket(); toggleDrawer(true); }
  const remove = event.target.closest(".remove-quote-item");
  if (remove) { removeQuoteItem(remove.dataset.id); renderBasket(); }
  if (event.target.closest("#reset-catalogue")) { state.query = ""; document.querySelectorAll("#search-input, #mobile-search").forEach(input => input.value = ""); selectCategory("all"); }
  if (event.target.closest("#basket-btn")) toggleDrawer(true);
  if (event.target.closest("#close-drawer, #drawer-overlay")) toggleDrawer(false);
  if (event.target.closest("#close-product-modal, #product-modal-overlay")) closeModal();
  if (event.target.closest("#modal-minus")) { state.quantity = Math.max(1, state.quantity - 1); document.getElementById("modal-quantity").textContent = state.quantity; }
  if (event.target.closest("#modal-plus")) { state.quantity += 1; document.getElementById("modal-quantity").textContent = state.quantity; }
  if (event.target.closest("#modal-add") && state.selected) { addQuoteItem(state.selected, state.quantity); renderBasket(); closeModal(); toggleDrawer(true); }
  if (event.target.closest("#menu-toggle")) document.getElementById("mobile-menu")?.classList.toggle("hidden");
});

document.addEventListener("input", event => {
  if (!event.target.matches("#search-input, #mobile-search")) return;
  state.query = event.target.value.trim();
  document.querySelectorAll("#search-input, #mobile-search").forEach(input => { if (input !== event.target) input.value = event.target.value; });
  updateUrl();
  renderProducts();
});

document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
window.addEventListener("educore:basket-change", renderBasket);
document.addEventListener("DOMContentLoaded", initialise);

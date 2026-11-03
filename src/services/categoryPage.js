import { getProductsFromGoogleSheets } from "./googleSheets.js";
import { initialiseBackToTop } from "./backToTop.js";
import { addQuoteItem } from "./quoteBasket.js";
import { openBasketDrawer } from "./sharedBasketDrawer.js";

const state = {
  products: [],
  selected: null,
  quantity: 1
};

const fallbackImage = "/images/placeholders/educore-placeholder.webp";

const categoryLabels = {
  stationery: "Stationery",
  furniture: "Furniture",
  ppe: "PPE",
  cleaning: "Cleaning & Hygiene",
  printers: "Printers, Cartridges & Refills",
  educational: "Educational Resources",
  "fire-safety": "Fire & Emergency Safety",
  "office-accessories": "Office Accessories",
  "safety-signage": "Safety Signage",
  security: "Security Equipment"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function productCardHTML(product) {
  return `
    <article
      class="product-card flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
      data-product-id="${escapeHtml(product.id)}"
    >
      <button
        class="view-product h-52 bg-gray-50"
        type="button"
        aria-label="View ${escapeHtml(product.name)} details"
      >
        <img
          src="${escapeHtml(product.image || fallbackImage)}"
          alt="${escapeHtml(product.name)}"
          class="h-full w-full object-contain p-4"
          onerror="this.onerror=null;this.src='${fallbackImage}'"
        >
      </button>

      <div class="flex flex-1 flex-col p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[#F05A28]">
          ${escapeHtml(categoryLabels[product.category] || product.category || "")}
        </p>

        <button
          class="view-product mt-1 text-left text-lg font-bold text-[#1A2B4C] hover:text-[#F05A28]"
          type="button"
        >
          ${escapeHtml(product.name)}
        </button>

        <p class="mt-2 line-clamp-2 flex-1 text-sm text-gray-600">
          ${escapeHtml(product.description || "")}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${escapeHtml(product.price || "Request Quote")}
          </span>

          <button
            type="button"
            class="add-to-quote rounded-lg bg-[#F05A28] px-3 py-2 text-sm font-semibold text-white hover:bg-[#d94a1e]"
            data-product-id="${escapeHtml(product.id)}"
          >
            <i class="fas fa-plus mr-1"></i>Add to Quote
          </button>
        </div>

        <button
          class="view-product mt-3 text-left text-xs font-medium text-[#1A2B4C] hover:underline"
          type="button"
        >
          View product details →
        </button>
      </div>
    </article>
  `;
}


function ensureModal() {
  if (document.getElementById("product-modal")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div
      id="product-modal"
      class="fixed inset-0 z-[70] hidden items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-name"
    >
      <button
        id="product-modal-overlay"
        class="absolute inset-0 bg-black/60"
        aria-label="Close product details"
      ></button>

      <div class="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          id="close-product-modal"
          class="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-600 shadow"
          aria-label="Close product details"
          type="button"
        >
          ×
        </button>

        <div class="grid md:grid-cols-2">
          <div class="flex min-h-72 items-center justify-center bg-gray-50 p-6">
            <img
              id="modal-image"
              class="max-h-96 w-full object-contain"
              alt=""
            >
          </div>

          <div class="p-6 md:p-8">
            <p
              id="modal-category"
              class="text-xs font-bold uppercase tracking-wide text-[#F05A28]"
            ></p>

            <h2
              id="modal-name"
              class="mt-2 text-2xl font-bold text-[#1A2B4C]"
            ></h2>

            <p
              id="modal-price"
              class="mt-3 text-xl font-bold text-[#F05A28]"
            ></p>

            <p
              id="modal-sku"
              class="mt-2 text-sm text-gray-500"
            ></p>

            <p
              id="modal-unit"
              class="mt-1 text-sm text-gray-500"
            ></p>

            <p
              id="modal-description"
              class="mt-4 text-sm leading-6 text-gray-600"
            ></p>

            <ul
              id="modal-features"
              class="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600"
            ></ul>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <div class="flex items-center rounded-lg border">
                <button
                  id="modal-minus"
                  class="h-10 w-10"
                  type="button"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span
                  id="modal-quantity"
                  class="w-10 text-center font-bold"
                >
                  1
                </span>

                <button
                  id="modal-plus"
                  class="h-10 w-10"
                  type="button"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                id="modal-add"
                class="rounded-lg bg-[#F05A28] px-5 py-2.5 font-semibold text-white"
                type="button"
              >
                Add to Quote
              </button>

              <a
                href="/quote.html"
                class="rounded-lg border border-[#1A2B4C] px-4 py-2.5 font-semibold text-[#1A2B4C]"
              >
                View Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function openModal(product) {
  state.selected = product;
  state.quantity = 1;

  document.getElementById("modal-image").src =
    product.image || fallbackImage;

  document.getElementById("modal-image").alt = product.name || "Product";

  document.getElementById("modal-category").textContent =
    categoryLabels[product.category] || product.category || "";

  document.getElementById("modal-name").textContent =
    product.name || "Product";

  document.getElementById("modal-price").textContent =
    product.price || "Request Quote";

  document.getElementById("modal-sku").textContent =
    `SKU: ${product.sku || "N/A"}`;

  document.getElementById("modal-unit").textContent =
    product.unit ? `Unit: ${product.unit}` : "";

  document.getElementById("modal-description").textContent =
    product.description || "Product details available on request.";

  const features = document.getElementById("modal-features");
  features.innerHTML = "";

  if (Array.isArray(product.features)) {
    features.innerHTML = product.features
      .map(feature => `<li>${escapeHtml(feature)}</li>`)
      .join("");
  }

  document.getElementById("modal-quantity").textContent = state.quantity;

  const modal = document.getElementById("product-modal");
  modal.classList.replace("hidden", "flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("product-modal");

  if (modal) {
    modal.classList.replace("flex", "hidden");
  }

  document.body.style.overflow = "";
}

async function loadCategoryPage() {
  const grid = document.getElementById("category-grid");
  const category = document.body.dataset.category;

  if (!grid || !category) return;

  ensureModal();

  try {
    const products = await getProductsFromGoogleSheets();

    state.products = products.filter(
      product =>
        product.category?.toLowerCase().trim() ===
        category.toLowerCase().trim()
    );

    if (!state.products.length) {
      grid.innerHTML = `
        <p class="col-span-full py-12 text-center text-gray-500">
          No products found in this category.
        </p>
      `;
      return;
    }

    grid.innerHTML = state.products
      .map(productCardHTML)
      .join("");
  } catch (error) {
    console.error("Category products failed to load:", error);

    grid.innerHTML = `
      <p class="col-span-full py-12 text-center text-red-600">
        Products could not be loaded.
      </p>
    `;
  }
}

document.addEventListener("click", event => {
  const card = event.target.closest("[data-product-id]");
  const product =
    card &&
    state.products.find(
      item => String(item.id) === String(card.dataset.productId)
    );

  if (event.target.closest(".view-product") && product) {
    openModal(product);
    return;
  }

  const add = event.target.closest(".add-to-quote");

  if (add && product) {
    addQuoteItem(product);
    openBasketDrawer();
    return;
  }

  if (event.target.closest("#close-product-modal, #product-modal-overlay")) {
    closeModal();
    return;
  }

  if (event.target.closest("#modal-minus")) {
    state.quantity = Math.max(1, state.quantity - 1);
    document.getElementById("modal-quantity").textContent = state.quantity;
    return;
  }

  if (event.target.closest("#modal-plus")) {
    state.quantity += 1;
    document.getElementById("modal-quantity").textContent = state.quantity;
    return;
  }

  if (event.target.closest("#modal-add") && state.selected) {
    addQuoteItem(state.selected, state.quantity);
    closeModal();
    openBasketDrawer();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", loadCategoryPage);

initialiseBackToTop();

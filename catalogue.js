import { getProductsFromGoogleSheets } from "./src/services/googleSheets.js";
import { initialiseBackToTop } from "./services/backToTop.js";

let catalogueProducts = [];
let catalogueInitialised = false;

const PLACEHOLDER_IMAGE =
  "/images/placeholders/educore-placeholder.webp";

/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   DRAWER STYLES
========================================================= */

function injectDrawerStyles() {
  if (document.getElementById("catalogue-drawer-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "catalogue-drawer-styles";

  style.textContent = `
    #basket-drawer {
      transform: translateX(105%);
      visibility: hidden;
      pointer-events: none;
      transition:
        transform 0.3s ease,
        visibility 0s linear 0.3s;
    }

    #basket-drawer.open {
      transform: translateX(0);
      visibility: visible;
      pointer-events: auto;
      transition:
        transform 0.3s ease,
        visibility 0s linear 0s;
    }

    #drawer-overlay {
      position: fixed;
      inset: 0;
      z-index: 40;
      background: rgba(15, 23, 42, 0.55);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        opacity 0.3s ease,
        visibility 0s linear 0.3s;
    }

    #drawer-overlay.show {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transition:
        opacity 0.3s ease,
        visibility 0s linear 0s;
    }

    body.drawer-open {
      overflow: hidden;
    }

    @media (max-width: 480px) {
      #basket-drawer {
        width: 100%;
        max-width: 100%;
      }
    }
  `;

  document.head.appendChild(style);
}

/* =========================================================
   DRAWER CONTROLS
========================================================= */

function getDrawerElements() {
  return {
    drawer: document.getElementById("basket-drawer"),
    overlay: document.getElementById("drawer-overlay"),
    basketButton: document.getElementById("basket-btn"),
    closeButton: document.getElementById("close-drawer"),
  };
}

function setDrawerState(open) {
  const {
    drawer,
    overlay,
    basketButton,
  } = getDrawerElements();

  if (!drawer || !overlay) {
    console.warn("Quote drawer elements were not found.", {
      drawer,
      overlay,
    });

    return;
  }

  drawer.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  document.body.classList.toggle("drawer-open", open);

  drawer.setAttribute("aria-hidden", String(!open));
  overlay.setAttribute("aria-hidden", String(!open));
  basketButton?.setAttribute("aria-expanded", String(open));
}

function openBasketDrawer() {
  setDrawerState(true);
}

function closeBasketDrawer() {
  setDrawerState(false);
}

function toggleBasketDrawer() {
  const drawer = document.getElementById("basket-drawer");
  const isOpen = drawer?.classList.contains("open") ?? false;

  setDrawerState(!isOpen);
}

/* =========================================================
   PRODUCT CARDS
========================================================= */

function productCardHTML(product) {
  const productId = escapeHTML(product.id ?? "");
  const productName = escapeHTML(
    product.name || "Unnamed Product"
  );
  const description = escapeHTML(
    product.description || ""
  );
  const price = escapeHTML(
    product.price || "Request Quote"
  );
  const sku = escapeHTML(product.sku || "-");
  const image = escapeHTML(
    product.image || PLACEHOLDER_IMAGE
  );

  return `
    <article
      class="product-card w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
      data-id="${productId}"
    >
      <div class="h-52 bg-gray-50">
        <img
          src="${image}"
          alt="${productName}"
          class="h-full w-full object-contain p-4"
          loading="lazy"
          onerror="
            this.onerror = null;
            this.src = '${PLACEHOLDER_IMAGE}';
          "
        />
      </div>

      <div class="p-4">
        <h3 class="text-lg font-bold text-[#1A2B4C]">
          ${productName}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm text-gray-600">
          ${description}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${price}
          </span>

          <button
            type="button"
            class="request-quote-btn rounded-lg bg-[#F05A28] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d94a1e]"
            data-product-id="${productId}"
            aria-label="Request a quote for ${productName}"
          >
            Request Quote
          </button>
        </div>

        <div class="mt-2 text-xs text-gray-400">
          SKU: ${sku}
        </div>
      </div>
    </article>
  `;
}

function renderCatalogue(products) {
  const grid = document.getElementById("catalogue-grid");

  if (!grid) {
    console.error("catalogue-grid was not found.");
    return;
  }

  if (!Array.isArray(products) || products.length === 0) {
    grid.innerHTML = `
      <p class="col-span-full py-12 text-center text-gray-500">
        No products found.
      </p>
    `;

    return;
  }

  grid.innerHTML = products
    .map(productCardHTML)
    .join("");
}

/* =========================================================
   BASKET RENDERING
========================================================= */

function getQuoteBasket() {
  try {
    const storedBasket = localStorage.getItem(
      "educoreQuoteBasket"
    );

    const parsedBasket = storedBasket
      ? JSON.parse(storedBasket)
      : [];

    return Array.isArray(parsedBasket)
      ? parsedBasket
      : [];
  } catch (error) {
    console.warn(
      "Could not read the quote basket.",
      error
    );

    return [];
  }
}

function saveQuoteBasket(basket) {
  localStorage.setItem(
    "educoreQuoteBasket",
    JSON.stringify(basket)
  );
}

function updateBasketCount() {
  const basket = getQuoteBasket();
  const count = basket.reduce(
    (total, item) =>
      total + Number(item.quantity || 1),
    0
  );

  document
    .querySelectorAll("#basket-count")
    .forEach((element) => {
      element.textContent = String(count);
    });
}

function basketItemHTML(item) {
  const id = escapeHTML(item.id ?? "");
  const name = escapeHTML(
    item.name || "Unnamed Product"
  );
  const sku = escapeHTML(item.sku || "-");
  const quantity = Number(item.quantity || 1);

  return `
    <div
      class="rounded-lg border border-gray-200 p-4"
      data-basket-item-id="${id}"
    >
      <div class="flex items-start justify-between gap-3">
        <div>
          <h4 class="font-semibold text-[#1A2B4C]">
            ${name}
          </h4>

          <p class="mt-1 text-xs text-gray-400">
            SKU: ${sku}
          </p>

          <p class="mt-2 text-sm text-gray-600">
            Quantity: ${quantity}
          </p>
        </div>

        <button
          type="button"
          class="remove-basket-item text-gray-400 transition hover:text-red-600"
          data-product-id="${id}"
          aria-label="Remove ${name} from quote basket"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `;
}

function renderBasket() {
  const basketItems = document.getElementById(
    "basket-items"
  );
  const basketEmpty = document.getElementById(
    "basket-empty"
  );

  const basket = getQuoteBasket();

  updateBasketCount();

  if (!basketItems) {
    return;
  }

  if (basket.length === 0) {
    basketItems.innerHTML = "";

    basketEmpty?.classList.remove("hidden");

    return;
  }

  basketEmpty?.classList.add("hidden");

  basketItems.innerHTML = basket
    .map(basketItemHTML)
    .join("");
}

function addProductToBasket(productId) {
  const product = catalogueProducts.find(
    (item) =>
      String(item.id) === String(productId)
  );

  if (!product) {
    console.warn(
      `Product ${productId} was not found.`
    );

    return;
  }

  const basket = getQuoteBasket();

  const existingItem = basket.find(
    (item) =>
      String(item.id) === String(product.id)
  );

  if (existingItem) {
    existingItem.quantity =
      Number(existingItem.quantity || 1) + 1;
  } else {
    basket.push({
      id: product.id,
      name: product.name,
      sku: product.sku,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  saveQuoteBasket(basket);
  renderBasket();
  openBasketDrawer();
}

function removeProductFromBasket(productId) {
  const basket = getQuoteBasket().filter(
    (item) =>
      String(item.id) !== String(productId)
  );

  saveQuoteBasket(basket);
  renderBasket();
}

/* =========================================================
   EVENT HANDLING
========================================================= */

function handleCatalogueClick(event) {
  const closeTarget = event.target.closest(
    "#close-drawer, #drawer-overlay"
  );

  if (closeTarget) {
    event.preventDefault();
    event.stopPropagation();

    closeBasketDrawer();
    return;
  }

  const basketButton = event.target.closest(
    "#basket-btn"
  );

  if (basketButton) {
    event.preventDefault();
    event.stopPropagation();

    toggleBasketDrawer();
    return;
  }

  const requestQuoteButton = event.target.closest(
    ".request-quote-btn"
  );

  if (requestQuoteButton) {
    event.preventDefault();
    event.stopPropagation();

    addProductToBasket(
      requestQuoteButton.dataset.productId
    );

    return;
  }

  const removeButton = event.target.closest(
    ".remove-basket-item"
  );

  if (removeButton) {
    event.preventDefault();
    event.stopPropagation();

    removeProductFromBasket(
      removeButton.dataset.productId
    );
  }
}

function handleCatalogueKeydown(event) {
  if (event.key === "Escape") {
    closeBasketDrawer();
  }
}

/* =========================================================
   INITIALISATION
========================================================= */

async function initialiseCataloguePage() {
  initialiseBackToTop();
  if (catalogueInitialised) {
    return;
  }

  catalogueInitialised = true;

  injectDrawerStyles();

  // Always begin with the quote drawer closed.
  closeBasketDrawer();

  document.addEventListener(
    "click",
    handleCatalogueClick
  );

  document.addEventListener(
    "keydown",
    handleCatalogueKeydown
  );

  renderBasket();

  const grid = document.getElementById(
    "catalogue-grid"
  );

  if (!grid) {
    console.error(
      "catalogue-grid was not found."
    );

    return;
  }

  grid.innerHTML = `
    <p class="col-span-full py-12 text-center text-gray-500">
      Loading catalogue...
    </p>
  `;

  try {
    catalogueProducts =
      await getProductsFromGoogleSheets();

    console.log(
      `Catalogue page loaded ${catalogueProducts.length} products`
    );

    renderCatalogue(catalogueProducts);
  } catch (error) {
    console.error(
      "Catalogue loading failed:",
      error
    );

    grid.innerHTML = `
      <p class="col-span-full py-12 text-center text-red-600">
        Products could not be loaded.
      </p>
    `;
  }
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialiseCataloguePage,
    { once: true }
  );
} else {
  initialiseCataloguePage();
}
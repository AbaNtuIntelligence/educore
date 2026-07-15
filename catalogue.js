import { getProductsFromGoogleSheets } from "./src/services/googleSheets.js";

let catalogueProducts = [];

function productCardHTML(product) {
  return `
    <article
      class="product-card w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
      data-id="${product.id}"
    >
      <div class="h-52 bg-gray-50">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-full w-full object-contain p-4"
          onerror="this.onerror=null; this.src='/images/placeholders/educore-placeholder.webp';"
        />
      </div>

      <div class="p-4">
        <h3 class="text-lg font-bold text-[#1A2B4C]">
          ${product.name || "Unnamed Product"}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm text-gray-600">
          ${product.description || ""}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${product.price || "Request Quote"}
          </span>

          <button
            type="button"
            class="rounded-lg bg-[#F05A28] px-4 py-2 text-sm font-semibold text-white"
          >
            Request Quote
          </button>
        </div>

        <div class="mt-2 text-xs text-gray-400">
          SKU: ${product.sku || "-"}
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

  if (!products.length) {
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

async function initialiseCataloguePage() {
  const grid = document.getElementById("catalogue-grid");

  if (!grid) return;

  grid.innerHTML = `
    <p class="col-span-full py-12 text-center text-gray-500">
      Loading catalogue...
    </p>
  `;

  try {
    catalogueProducts = await getProductsFromGoogleSheets();

    console.log(
      `Catalogue page loaded ${catalogueProducts.length} products`
    );

    renderCatalogue(catalogueProducts);
  } catch (error) {
    console.error("Catalogue loading failed:", error);

    grid.innerHTML = `
      <p class="col-span-full py-12 text-center text-red-600">
        Products could not be loaded.
      </p>
    `;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  initialiseCataloguePage
);
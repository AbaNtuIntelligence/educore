import { getProductsFromGoogleSheets } from "./googleSheets.js";

function productCardHTML(product) {
  return `
    <article class="product-card w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div class="h-52 bg-gray-50">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-full w-full object-contain p-4"
          onerror="this.onerror=null; this.src='/images/placeholders/educore-placeholder.webp';"
        />
      </div>

      <div class="p-4">
        <h3 class="font-bold text-[#1A2B4C]">
          ${product.name}
        </h3>

        <p class="mt-2 text-sm text-gray-600">
          ${product.description || ""}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${product.price || "Request quote"}
          </span>

          <button
            type="button"
            class="add-to-quote rounded-lg bg-[#F05A28] px-4 py-2 text-sm font-semibold text-white"
            data-id="${product.id}"
          >
            Add to Quote
          </button>
        </div>
      </div>
    </article>
  `;
}

async function loadCategoryPage() {
  const grid = document.getElementById("category-grid");
  const category = document.body.dataset.category;

  if (!grid || !category) return;

  try {
    const products = await getProductsFromGoogleSheets();

    const filtered = products.filter(
      product =>
        product.category?.toLowerCase().trim() ===
        category.toLowerCase().trim()
    );

    if (!filtered.length) {
      grid.innerHTML = `
        <p class="col-span-full py-12 text-center text-gray-500">
          No products found in this category.
        </p>
      `;
      return;
    }

    grid.innerHTML = filtered
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

document.addEventListener("DOMContentLoaded", loadCategoryPage);
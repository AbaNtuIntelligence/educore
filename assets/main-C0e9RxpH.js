import{t as e}from"./googleSheets-C77qoy7_.js";import"./quoteBasket-6Lo7OGJ4.js";/* empty css              */import"./main-CTMe6UQv.js";var t=[];function n(e){return`
    <article
      class="product-card w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
      data-id="${e.id}"
    >
      <div class="h-52 bg-gray-50">
        <img
          src="${e.image}"
          alt="${e.name}"
          class="h-full w-full object-contain p-4"
          onerror="this.onerror=null; this.src='/images/placeholders/educore-placeholder.webp';"
        />
      </div>

      <div class="p-4">
        <h3 class="text-lg font-bold text-[#1A2B4C]">
          ${e.name||`Unnamed Product`}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm text-gray-600">
          ${e.description||``}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${e.price||`Request Quote`}
          </span>

          <button
            type="button"
            class="rounded-lg bg-[#F05A28] px-4 py-2 text-sm font-semibold text-white"
          >
            Request Quote
          </button>
        </div>

        <div class="mt-2 text-xs text-gray-400">
          SKU: ${e.sku||`-`}
        </div>
      </div>
    </article>
  `}function r(e){let t=document.getElementById(`catalogue-grid`);if(!t){console.error(`catalogue-grid was not found.`);return}if(!e.length){t.innerHTML=`
      <p class="col-span-full py-12 text-center text-gray-500">
        No products found.
      </p>
    `;return}t.innerHTML=e.map(n).join(``)}async function i(){let n=document.getElementById(`catalogue-grid`);if(n){n.innerHTML=`
    <p class="col-span-full py-12 text-center text-gray-500">
      Loading catalogue...
    </p>
  `;try{t=await e(),console.log(`Catalogue page loaded ${t.length} products`),r(t)}catch(e){console.error(`Catalogue loading failed:`,e),n.innerHTML=`
      <p class="col-span-full py-12 text-center text-red-600">
        Products could not be loaded.
      </p>
    `}}}document.addEventListener(`DOMContentLoaded`,i);
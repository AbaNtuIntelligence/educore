import{t as e}from"./googleSheets-C77qoy7_.js";function t(e){return`
    <article class="product-card w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div class="h-52 bg-gray-50">
        <img
          src="${e.image}"
          alt="${e.name}"
          class="h-full w-full object-contain p-4"
          onerror="this.onerror=null; this.src='/images/placeholders/educore-placeholder.webp';"
        />
      </div>

      <div class="p-4">
        <h3 class="font-bold text-[#1A2B4C]">
          ${e.name}
        </h3>

        <p class="mt-2 text-sm text-gray-600">
          ${e.description||``}
        </p>

        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="font-bold text-[#F05A28]">
            ${e.price||`Request quote`}
          </span>

          <button
            type="button"
            class="add-to-quote rounded-lg bg-[#F05A28] px-4 py-2 text-sm font-semibold text-white"
            data-id="${e.id}"
          >
            Add to Quote
          </button>
        </div>
      </div>
    </article>
  `}async function n(){let n=document.getElementById(`category-grid`),r=document.body.dataset.category;if(!(!n||!r))try{let i=(await e()).filter(e=>e.category?.toLowerCase().trim()===r.toLowerCase().trim());if(!i.length){n.innerHTML=`
        <p class="col-span-full py-12 text-center text-gray-500">
          No products found in this category.
        </p>
      `;return}n.innerHTML=i.map(t).join(``)}catch(e){console.error(`Category products failed to load:`,e),n.innerHTML=`
      <p class="col-span-full py-12 text-center text-red-600">
        Products could not be loaded.
      </p>
    `}}document.addEventListener(`DOMContentLoaded`,n);
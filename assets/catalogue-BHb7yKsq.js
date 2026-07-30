import{t as e}from"./googleSheets-CkKW2Qub.js";import"./main-BwAbOl3g.js";function t(e,t){let n=t.find(t=>Number(t.id)===Number(e));if(!n){console.warn(`Product not found:`,e);return}let r=document.getElementById(`productModal`),a=document.getElementById(`modalName`),o=document.getElementById(`modalImage`),s=document.getElementById(`modalDescription`),c=document.getElementById(`modalPrice`),l=document.getElementById(`modalSku`),u=document.getElementById(`modalUnit`),d=document.getElementById(`modalCategory`),f=document.getElementById(`modalFeatures`),p=document.getElementById(`modalQtyValue`);if(!r){console.error(`Product modal was not found.`);return}if(a&&(a.textContent=n.name||`Unnamed Product`),o&&(o.src=n.image||`/images/placeholders/educore-placeholder.webp`,o.alt=n.name||`Product image`,o.onerror=function(){this.onerror=null,this.src=`/images/placeholders/educore-placeholder.webp`}),s&&(s.textContent=n.description||`No product description is currently available.`),c&&(c.textContent=n.price||`Request Quote`),l&&(l.textContent=n.sku||`-`),u&&(u.textContent=n.unit||`-`),d&&(d.textContent=n.category||`-`),f){let e=Array.isArray(n.features)?n.features.filter(Boolean):[];f.innerHTML=e.length?e.map(e=>`<li>${i(e)}</li>`).join(``):`<li>No additional features listed.</li>`}p&&(p.textContent=`1`),r.dataset.productId=String(n.id),r.scrollTop=0,r.classList.remove(`hidden`),document.body.style.overflow=`hidden`}function n(){let e=document.getElementById(`productModal`);e&&(e.classList.add(`hidden`),e.scrollTop=0,e.removeAttribute(`data-product-id`),document.body.style.overflow=``)}function r(){let e=document.getElementById(`productModal`),t=document.getElementById(`modalCloseBtn`),r=document.getElementById(`modalBackLink`);if(!e){console.warn(`Product modal markup is not present.`);return}t?.addEventListener(`click`,function(e){e.preventDefault(),n()}),r?.addEventListener(`click`,function(e){e.preventDefault(),n()}),e.addEventListener(`click`,function(t){t.target===e&&n()}),document.addEventListener(`keydown`,function(t){t.key===`Escape`&&!e.classList.contains(`hidden`)&&n()})}function i(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}var a=[];function o(e){return`
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
  `}function s(e){let t=document.getElementById(`catalogue-grid`);if(!t){console.error(`catalogue-grid was not found.`);return}if(!e.length){t.innerHTML=`
      <p class="col-span-full py-12 text-center text-gray-500">
        No products found.
      </p>
    `;return}t.innerHTML=e.map(o).join(``)}async function c(){if(document.getElementById(`catalogue-grid`))try{a=await e(),s(a),r(),console.log(`Catalogue page loaded ${a.length} products`)}catch(e){console.error(`Catalogue loading failed:`,e)}}document.addEventListener(`click`,function(e){let n=e.target instanceof Element?e.target:null;if(!n||n.closest(`.add-to-quote`))return;let r=n.closest(`.product-card`);if(!r?.dataset.id)return;let i=Number(r.dataset.id);console.log(`Catalogue card clicked:`,i),t(i,a)}),document.addEventListener(`DOMContentLoaded`,c),document.addEventListener(`click`,function(e){let t=e.target.closest(`.add-to-quote`);if(!t)return;let n=Number(t.dataset.id),r=a.find(e=>e.id===n);r&&(console.log(`Adding quote:`,r),alert(`${r.name} added to quote`))});
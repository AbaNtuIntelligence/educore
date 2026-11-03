
import {
  getQuoteBasket,
  quoteItemCount,
  removeQuoteItem
} from "./quoteBasket.js";

const DRAWER_MARKUP = `
  <div
    id="basket-drawer"
    class="drawer fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-2xl overflow-y-auto p-6"
    style="z-index: 10001;"
    role="dialog"
    aria-modal="true"
    aria-labelledby="basket-drawer-title"
  >
    <div class="flex justify-between items-center border-b pb-4 mb-4">
      <h3
        id="basket-drawer-title"
        class="text-xl font-bold text-[#1A2B4C]"
      >
        Your Quote Basket
      </h3>

      <button
        id="close-drawer"
        type="button"
        class="text-gray-500 hover:text-gray-700"
        aria-label="Close quote basket"
      >
        <i class="fas fa-times text-xl"></i>
      </button>
    </div>

    <div id="basket-items" class="space-y-4"></div>

    <div id="basket-empty" class="text-center text-gray-500 py-8">
      <i class="fas fa-shopping-basket text-4xl text-gray-300 mb-2 block"></i>
      <p>Your basket is empty.</p>
    </div>

    <div class="mt-6 border-t pt-4">
      <button
        id="request-quote-btn"
        type="button"
        class="w-full bg-[#F05A28] hover:bg-[#d94a1e] text-white font-semibold py-3 rounded-lg transition"
      >
        Request Quote
      </button>
    </div>
  </div>

  <div
    id="drawer-overlay"
    class="fixed inset-0 bg-black/30"
    style="z-index: 10000;"
  ></div>
`;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function ensureDrawer() {
  if (document.getElementById("basket-drawer")) return;

  document.body.insertAdjacentHTML("beforeend", DRAWER_MARKUP);
}

export function renderBasketDrawer() {
  const items = getQuoteBasket();
  const count = quoteItemCount(items);

  document.querySelectorAll("#basket-count").forEach(badge => {
    badge.textContent = count;
    badge.setAttribute(
      "aria-label",
      `${count} quote item${count === 1 ? "" : "s"}`
    );
  });

  const container = document.getElementById("basket-items");
  const empty = document.getElementById("basket-empty");

  if (!container || !empty) return;

  empty.style.display = count ? "none" : "block";

  container.innerHTML = items.map(item => `
    <div class="flex justify-between items-start border-b pb-3">
      <div>
        <p class="font-medium text-sm text-[#1A2B4C]">
          ${escapeHtml(item.name)}
        </p>

        <p class="text-xs text-gray-500">
          SKU: ${escapeHtml(item.sku || "No SKU")} |
          Qty: ${item.quantity}
        </p>
      </div>

      <button
        type="button"
        class="remove-from-basket text-red-500 hover:text-red-700 text-sm"
        data-id="${escapeHtml(item.id)}"
        aria-label="Remove ${escapeHtml(item.name)}"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join("");
}

export function closeBasketDrawer() {
  document.getElementById("basket-drawer")?.classList.remove("open");
  document.getElementById("drawer-overlay")?.classList.remove("show");
  document.body.style.overflow = "";
}

export function openBasketDrawer() {
  ensureDrawer();
  renderBasketDrawer();

  document.getElementById("basket-drawer")?.classList.add("open");
  document.getElementById("drawer-overlay")?.classList.add("show");

  document.body.style.overflow = "hidden";
}

function initialiseBasketDrawer() {
  ensureDrawer();
  renderBasketDrawer();

  document.addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-from-basket");

    if (removeButton) {
      removeQuoteItem(removeButton.dataset.id);
      renderBasketDrawer();

      if (!getQuoteBasket().length) {
        closeBasketDrawer();
      }

      return;
    }

    if (event.target.closest("#close-drawer, #drawer-overlay")) {
      closeBasketDrawer();
      return;
    }

    if (event.target.closest("#request-quote-btn")) {
      if (!getQuoteBasket().length) {
        alert("Your basket is empty.");
        return;
      }

      window.location.href = "/quote.html";
    }
  });

  window.addEventListener("educore:basket-change", renderBasketDrawer);

  window.addEventListener("storage", event => {
    if (
      event.key === "educore_quote_basket_v2" ||
      event.key === "educore_basket"
    ) {
      renderBasketDrawer();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeBasketDrawer();
    }
  });

  
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseBasketDrawer, {
    once: true
  });
} else {
  initialiseBasketDrawer();
}

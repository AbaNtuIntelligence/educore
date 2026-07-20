import {
  clearQuoteBasket,
  getQuoteBasket,
  quoteItemCount,
  removeQuoteItem,
  setQuoteItemQuantity
} from "./services/quoteBasket.js";

const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[character]));

function renderQuote() {
  const items = getQuoteBasket();
  const total = quoteItemCount(items);
  const container = document.getElementById("quote-basket-items");
  const empty = document.getElementById("quote-basket-empty");
  const summary = document.getElementById("quote-summary");
  const actions = document.getElementById("quote-actions");
  const submit = document.getElementById("submit-quote-btn");

  document.getElementById("quote-item-count").textContent = `${total} item${total === 1 ? "" : "s"}`;
  document.getElementById("quote-total-items").textContent = total;
  document.getElementById("quote-unique-items").textContent = items.length;
  empty.style.display = items.length ? "none" : "block";
  summary.classList.toggle("hidden", !items.length);
  actions.classList.toggle("hidden", !items.length);
  submit.disabled = !items.length;
  submit.classList.toggle("opacity-50", !items.length);

  container.innerHTML = items.map(item => `<div class="flex items-center justify-between gap-3 border-b border-gray-100 pb-3" data-quote-id="${escapeHtml(item.id)}">
    <div class="min-w-0 flex-1"><p class="text-sm font-medium text-[#1A2B4C]">${escapeHtml(item.name)}</p><p class="text-xs text-gray-400">SKU: ${escapeHtml(item.sku || "N/A")}${item.unit ? ` · ${escapeHtml(item.unit)}` : ""}</p></div>
    <div class="flex items-center gap-2"><button class="quote-minus flex h-7 w-7 items-center justify-center rounded border" type="button" aria-label="Decrease quantity">−</button><span class="w-7 text-center text-sm font-semibold">${item.quantity}</span><button class="quote-plus flex h-7 w-7 items-center justify-center rounded border" type="button" aria-label="Increase quantity">+</button><button class="quote-remove ml-1 text-red-500" type="button" aria-label="Remove item"><i class="fas fa-times"></i></button></div>
  </div>`).join("");
}

function quoteMessage(form) {
  const data = new FormData(form);
  const items = getQuoteBasket();
  const lines = items.map((item, index) => `${index + 1}. ${item.name} | SKU: ${item.sku || "N/A"} | Quantity: ${item.quantity}${item.unit ? ` | Unit: ${item.unit}` : ""}`);
  return [
    "EDUCORE QUOTE REQUEST", "",
    `Name: ${data.get("name")}`, `Company: ${data.get("company") || "Not provided"}`,
    `Email: ${data.get("email")}`, `Phone: ${data.get("phone") || "Not provided"}`, "",
    "PRODUCTS REQUESTED", ...lines, "", `Additional notes: ${data.get("notes") || "None"}`
  ].join("\n");
}

document.addEventListener("click", event => {
  const row = event.target.closest("[data-quote-id]");
  if (row) {
    const item = getQuoteBasket().find(entry => entry.id === row.dataset.quoteId);
    if (item && event.target.closest(".quote-minus")) setQuoteItemQuantity(item.id, item.quantity - 1);
    if (item && event.target.closest(".quote-plus")) setQuoteItemQuantity(item.id, item.quantity + 1);
    if (event.target.closest(".quote-remove")) removeQuoteItem(row.dataset.quoteId);
    renderQuote();
  }
  if (event.target.closest("#clear-quote-btn") && confirm("Clear all products from this quote?")) {
    clearQuoteBasket();
    renderQuote();
  }
});

document.getElementById("quote-form")?.addEventListener("submit", event => {
  event.preventDefault();
  if (!getQuoteBasket().length) {
    alert("Please add at least one product to your quote.");
    return;
  }
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const subject = `EDUCORE quote request – ${new FormData(form).get("name")}`;
  const mailto = `mailto:info@educore.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(quoteMessage(form))}`;
  window.location.href = mailto;
  document.getElementById("quote-status").classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quote-form")?.insertAdjacentHTML("beforeend", `<p id="quote-status" class="hidden rounded-lg bg-green-50 p-3 text-sm text-green-800"><strong>Your email app has been opened.</strong> Send the prepared message to complete the request. Your basket remains saved until you clear it.</p>`);
  renderQuote();
});
window.addEventListener("educore:basket-change", renderQuote);

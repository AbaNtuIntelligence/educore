import { getQuoteBasket, quoteItemCount } from "./services/quoteBasket.js";

function updateQuoteBadge() {
  const count = quoteItemCount(getQuoteBasket());
  document.querySelectorAll("#basket-count").forEach(badge => {
    badge.textContent = count;
    badge.setAttribute("aria-label", `${count} quote item${count === 1 ? "" : "s"}`);
  });
}

function submitSearch(input) {
  const query = input?.value.trim();
  if (query) window.location.href = `/catalogue.html?q=${encodeURIComponent(query)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateQuoteBadge();

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("header a[href]").forEach(link => {
    const destination = new URL(link.href, window.location.href).pathname.split("/").pop();
    if (destination === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.getElementById("menu-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.toggle("hidden");
  });

  document.getElementById("basket-btn")?.addEventListener("click", () => {
    window.location.href = "/quote.html";
  });

  document.querySelectorAll("#search-input, #mobile-search").forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") submitSearch(input);
    });
  });
});

window.addEventListener("educore:basket-change", updateQuoteBadge);

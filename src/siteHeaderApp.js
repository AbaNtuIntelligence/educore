import { getQuoteBasket, quoteItemCount } from "./services/quoteBasket.js";

const links = [
  ["/index.html", "Home"],
  ["/catalogue.html", "Catalogue"],
  ["/about.html", "About"],
  ["/contact.html", "Contact"],
  ["/quote.html", "Request Quote"],
  ["/download.html", "Download"]
];

const cataloguePages = new Set([
  "catalogue.html",
  "stationery.html",
  "cleaning.html",
  "ppe.html",
  "furniture.html",
  "hospital.html"
]);

function navigationLinks(mobile = false) {
  const current = window.location.pathname.split("/").pop() || "index.html";
  return links.map(([href, label]) => {
    const active = href.endsWith(current);
    return `<a href="${href}" ${active ? 'aria-current="page"' : ""} class="${mobile ? "block rounded-lg px-3 py-2" : "border-b-2 px-1 py-2"} font-semibold transition ${active ? "border-[#F05A28] text-[#F05A28]" : "border-transparent text-[#1A2B4C] hover:border-[#F05A28] hover:text-[#F05A28]"}">${label}</a>`;
  }).join("");
}

function headerMarkup() {
  return `<header id="site-header" class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
    <div class="hidden bg-[#1A2B4C] py-1.5 text-sm text-white lg:block"><div class="mx-auto flex max-w-7xl items-center justify-between px-4"><span class="text-white/80">Your trusted partner for stationery, PPE, hygiene and hospital equipment.</span><a href="/download.html" class="font-medium hover:text-[#F05A28]">Download Product Catalogue</a></div></div>
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
      <a href="/index.html" class="flex min-w-0 items-center gap-3"><img src="/images/hero/logo.jpeg" alt="EDUCORE" class="h-12 w-12 rounded-lg object-contain"><div class="hidden sm:block"><p class="text-xl font-bold text-[#1A2B4C]">EDUCORE</p><p class="text-xs font-semibold text-[#F05A28]">Stationery, PPE & Hygiene Solutions</p></div></a>
      <nav id="desktop-nav" class="items-center gap-5 text-sm" aria-label="Primary navigation">${navigationLinks()}</nav>
      <div class="flex items-center gap-2">
        <div class="relative hidden xl:block"><input id="site-search" type="search" placeholder="Search products…" class="w-48 rounded-full border border-gray-300 py-2 pl-4 pr-9 text-sm outline-none focus:border-[#F05A28]"><span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">⌕</span></div>
        <button id="basket-btn" type="button" class="relative rounded-full p-2 text-xl text-[#1A2B4C] hover:bg-gray-100" aria-label="Open quote basket"><span aria-hidden="true">🛒</span><span id="basket-count" class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F05A28] px-1 text-xs font-bold text-white">0</span></button>
        <button id="menu-toggle" type="button" class="rounded p-2 text-2xl text-[#1A2B4C] hover:bg-gray-100 lg:hidden" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      </div>
    </div>
    <nav id="mobile-menu" class="flex-col border-t bg-white px-4 py-3" aria-label="Mobile navigation">${navigationLinks(true)}<div class="mt-3"><input id="mobile-search" type="search" placeholder="Search products…" class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-[#F05A28]"></div></nav>
  </header>`;
}

function updateBasketCount() {
  const count = quoteItemCount(getQuoteBasket());
  document.querySelectorAll("#basket-count").forEach(badge => badge.textContent = count);
}

function initialiseBackToTop() {
  const currentPage =
    window.location.pathname
      .split("/")
      .pop() || "index.html";

  /*
   * Only display the button on the main catalogue
   * and its category pages.
   */
  if (!cataloguePages.has(currentPage)) {
    return;
  }

  /*
   * Prevent duplicate buttons.
   */
  if (document.getElementById("back-to-top")) {
    return;
  }

  const button = document.createElement("button");

  button.id = "back-to-top";
  button.type = "button";
  button.title = "Back to top";
  button.setAttribute(
    "aria-label",
    "Scroll back to the top of the page"
  );

  button.innerHTML = `
    <span
      aria-hidden="true"
      style="
        display:block;
        font-size:24px;
        line-height:1;
        transform:translateY(-1px);
      "
    >
      ↑
    </span>
  `;

  Object.assign(button.style, {
    position: "fixed",
    right: "22px",
    bottom: "22px",
    width: "48px",
    height: "48px",
    border: "2px solid rgba(255,255,255,0.35)",
    borderRadius: "50%",
    background: "#F05A28",
    color: "#FFFFFF",
    boxShadow: "0 10px 25px rgba(26,43,76,0.28)",
    cursor: "pointer",
    zIndex: "9999",

    /*
     * Hidden until the user scrolls down.
     */
    opacity: "0",
    visibility: "hidden",
    pointerEvents: "none",
    transform: "translateY(12px)",

    transition:
      "opacity 180ms ease, transform 180ms ease, visibility 180ms ease, background-color 180ms ease"
  });

  document.body.appendChild(button);

  function updateButtonVisibility() {
    const visible = window.scrollY > 400;

    button.style.opacity =
      visible ? "1" : "0";

    button.style.visibility =
      visible ? "visible" : "hidden";

    button.style.pointerEvents =
      visible ? "auto" : "none";

    button.style.transform =
      visible
        ? "translateY(0)"
        : "translateY(12px)";
  }

  button.addEventListener(
    "mouseenter",
    () => {
      button.style.backgroundColor =
        "#D94A1E";
    }
  );

  button.addEventListener(
    "mouseleave",
    () => {
      button.style.backgroundColor =
        "#F05A28";
    }
  );

  button.addEventListener(
    "focus",
    () => {
      button.style.outline =
        "3px solid rgba(240,90,40,0.35)";

      button.style.outlineOffset =
        "3px";
    }
  );

  button.addEventListener(
    "blur",
    () => {
      button.style.outline = "none";
    }
  );

  button.addEventListener(
    "click",
    () => {
      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior:
          reducedMotion
            ? "auto"
            : "smooth"
      });
    }
  );

  window.addEventListener(
    "scroll",
    updateButtonVisibility,
    {
      passive: true
    }
  );

  updateButtonVisibility();
}

function initialiseHeader() {
  const existing = document.querySelector("body > header");
  if (existing) existing.outerHTML = headerMarkup();
  else document.body.insertAdjacentHTML("afterbegin", headerMarkup());
  updateBasketCount();

  document.getElementById("menu-toggle")?.addEventListener("click", event => {
    event.stopImmediatePropagation();
    const menu = document.getElementById("mobile-menu");
    const open = menu?.classList.toggle("is-open") || false;
    event.currentTarget.setAttribute("aria-expanded", String(open));
  }, true);

  document.getElementById("basket-btn")?.addEventListener("click", event => {
    if (document.getElementById("basket-drawer")) return;
    event.stopImmediatePropagation();
    window.location.href = "/quote.html";
  }, true);

  document.querySelectorAll("#site-search, #mobile-search").forEach(input => input.addEventListener("keydown", event => {
    if (event.key === "Enter" && input.value.trim()) window.location.href = `/catalogue.html?q=${encodeURIComponent(input.value.trim())}`;
  }));
}

document.addEventListener("DOMContentLoaded", initialiseHeader);
window.addEventListener("educore:basket-change", updateBasketCount);
initialiseBackToTop();
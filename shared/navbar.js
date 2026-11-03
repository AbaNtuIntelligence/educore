// ============================================================
// EDUCORE SHARED NAVBAR
// shared/navbar.js
// ============================================================

(function () {
  "use strict";

  const NAVBAR_HTML = `
    <header class="ec-header" id="ec-header">

      <!-- =====================================================
           TOP UTILITY BAR
           ===================================================== -->
      <div class="ec-topbar">
        <div class="ec-container ec-topbar-inner">

          <span class="ec-topbar-message">
            Your trusted partner for stationery, PPE &amp; hygiene solutions.
          </span>

          <div class="ec-topbar-actions">

            <a href="#" aria-label="Facebook" class="ec-social-link">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="LinkedIn" class="ec-social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="Instagram" class="ec-social-link">
              <i class="fab fa-instagram"></i>
            </a>

            <a href="#" aria-label="YouTube" class="ec-social-link">
              <i class="fab fa-youtube"></i>
            </a>

            <span class="ec-divider">|</span>

            <a
              href="/download.html"
              class="ec-download-link"
            >
              <i class="fas fa-download"></i>
              <span>Download Catalogue</span>
            </a>

          </div>
        </div>
      </div>


      <!-- =====================================================
           MAIN NAVIGATION
           ===================================================== -->
      <div class="ec-nav-wrapper">
        <div class="ec-container ec-nav-inner">

          <!-- Logo -->
          <a
            href="/index.html"
            id="logo-link"
            class="ec-brand"
            aria-label="EDUCORE home"
          >

            <div class="ec-logo-box">

              <img
                src="/images/hero/logo.jpeg"
                alt="EDUCORE logo"
                class="ec-logo-image"
                onerror="
                  this.style.display='none';
                  this.nextElementSibling.style.display='flex';
                "
              />

              <div class="ec-logo-fallback">
                E
              </div>

            </div>

            <div class="ec-brand-text">

              <span class="ec-brand-name">
                EDUCORE
              </span>

              <span class="ec-brand-tagline">
                Stationery, PPE &amp; Hygiene Solutions
              </span>

            </div>

          </a>


          <!-- =================================================
               DESKTOP NAVIGATION
               ================================================= -->
          <nav
            class="ec-desktop-nav"
            aria-label="Main navigation"
          >

            <a href="/index.html" data-nav-link="home">
              Home
            </a>

            <a href="/catalogue.html" data-nav-link="catalogue">
              Catalogue
            </a>

            <a href="/about.html" data-nav-link="about">
              About
            </a>

            <a href="/contact.html" data-nav-link="contact">
              Contact
            </a>

            <a href="/quote.html" data-nav-link="quote">
              Request Quote
            </a>

            <a
              href="/download.html"
              class="ec-nav-pdf"
              data-nav-link="download"
            >
              Catalogue PDF
            </a>

          </nav>


          <!-- =================================================
               HEADER ACTIONS
               ================================================= -->
          <div class="ec-header-actions">

            <!-- Desktop Search -->
            <div class="ec-desktop-search">

              <input
                type="search"
                id="search-input"
                placeholder="Search products..."
                autocomplete="off"
                aria-label="Search products"
              />

              <button
                type="button"
                id="clear-search-desktop"
                aria-label="Clear search"
              >
                &times;
              </button>

            </div>


            <!-- Mobile Search Toggle -->
            <button
              type="button"
              id="mobile-search-toggle"
              class="ec-action-button"
              aria-label="Open product search"
              aria-controls="mobile-search-panel"
              aria-expanded="false"
            >
              <i class="fas fa-search"></i>
            </button>


            <!-- Quote Basket -->
            <button
              type="button"
              id="basket-btn"
              class="ec-action-button ec-basket-button"
              aria-label="Open quote basket"
              aria-controls="basket-drawer"
            >
              <i class="fas fa-shopping-basket"></i>

              <span
                id="basket-count"
                class="ec-basket-count"
              >
                0
              </span>
            </button>


            <!-- Mobile Menu -->
            <button
              type="button"
              id="menu-toggle"
              class="ec-action-button ec-menu-toggle"
              aria-label="Open navigation menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <i class="fas fa-bars"></i>
            </button>

          </div>

        </div>


        <!-- ===================================================
             MOBILE SEARCH
             =================================================== -->
        <div
          id="mobile-search-panel"
          class="ec-mobile-search"
          aria-hidden="true"
        >

          <div class="ec-container">

            <div class="ec-mobile-search-inner">

              <input
                type="search"
                id="mobile-search"
                placeholder="Search products..."
                autocomplete="off"
                aria-label="Search products"
              />

              <button
                type="button"
                id="clear-search-mobile"
                aria-label="Clear search"
              >
                &times;
              </button>

            </div>

          </div>

        </div>


        <!-- ===================================================
             MOBILE NAVIGATION
             =================================================== -->
        <div
          id="mobile-menu"
          class="ec-mobile-menu"
          aria-hidden="true"
        >

          <nav
            class="ec-mobile-nav"
            aria-label="Mobile navigation"
          >

            <a href="/index.html" data-nav-link="home">
              Home
            </a>

            <a href="/catalogue.html" data-nav-link="catalogue">
              Catalogue
            </a>

            <a href="/about.html" data-nav-link="about">
              About
            </a>

            <a href="/contact.html" data-nav-link="contact">
              Contact
            </a>

            <a href="/quote.html" data-nav-link="quote">
              Request Quote
            </a>

            <a href="/download.html" data-nav-link="download">
              <i class="fas fa-download"></i>
              Download Catalogue
            </a>


            <!-- Social links -->
            <div class="ec-mobile-social">

              <span>Connect with us</span>

              <div>

                <a href="#" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>

                <a href="#" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>

              </div>

            </div>

          </nav>

        </div>

      </div>

    </header>
  `;


  // ==========================================================
  // RENDER NAVBAR
  // ==========================================================

  function renderNavbar() {

    const mount = document.getElementById("site-header");

    if (!mount) {
      console.warn(
        "EDUCORE Navbar: #site-header was not found."
      );
      return;
    }

    // Prevent duplicate rendering
    if (document.getElementById("ec-header")) {
      return;
    }

    mount.innerHTML = NAVBAR_HTML;

    initialiseNavbar();
  }


  // ==========================================================
  // NAVBAR INITIALISATION
  // ==========================================================

  function initialiseNavbar() {

    const menuToggle =
      document.getElementById("menu-toggle");

    const mobileMenu =
      document.getElementById("mobile-menu");

    const mobileSearchToggle =
      document.getElementById("mobile-search-toggle");

    const mobileSearchPanel =
      document.getElementById("mobile-search-panel");

    const basketBtn =
      document.getElementById("basket-btn");


    // --------------------------------------------------------
    // MOBILE MENU
    // --------------------------------------------------------

    if (menuToggle && mobileMenu) {

      menuToggle.addEventListener("click", function () {

        const isOpen =
          menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {

          closeMobileMenu();

        } else {

          openMobileMenu();

        }

      });

    }


    // --------------------------------------------------------
    // MOBILE SEARCH
    // --------------------------------------------------------

    if (
      mobileSearchToggle &&
      mobileSearchPanel
    ) {

      mobileSearchToggle.addEventListener(
        "click",
        function () {

          const isOpen =
            mobileSearchToggle.getAttribute(
              "aria-expanded"
            ) === "true";

          if (isOpen) {

            closeMobileSearch();

          } else {

            openMobileSearch();

          }

        }
      );

    }


    // --------------------------------------------------------
    // BASKET
    // --------------------------------------------------------

    if (basketBtn) {

      basketBtn.addEventListener(
        "click",
        function () {

          if (
            typeof window.openBasketDrawer ===
            "function"
          ) {

            window.openBasketDrawer();

          } else {

            const drawer =
              document.getElementById(
                "basket-drawer"
              );

            const overlay =
              document.getElementById(
                "drawer-overlay"
              );

            if (drawer) {
              drawer.classList.toggle("open");
            }

            if (overlay) {
              overlay.classList.toggle("show");
            }

          }

        }
      );

    }


    // --------------------------------------------------------
    // CLEAR SEARCH
    // --------------------------------------------------------

    setupSearchClear(
      "search-input",
      "clear-search-desktop"
    );

    setupSearchClear(
      "mobile-search",
      "clear-search-mobile"
    );


    // --------------------------------------------------------
    // CLOSE MOBILE MENU WHEN A LINK IS CLICKED
    // --------------------------------------------------------

    document
      .querySelectorAll("#mobile-menu a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            closeMobileMenu();

          }
        );

      });


    // --------------------------------------------------------
    // ESCAPE KEY
    // --------------------------------------------------------

    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key !== "Escape") {
          return;
        }

        closeMobileMenu();
        closeMobileSearch();

      }
    );

    // --------------------------------------------------------
    // RESPONSIVE BREAKPOINT RESET
    // --------------------------------------------------------
    // When the viewport crosses the 1024px breakpoint in either
    // direction, force every mobile panel back to its closed
    // state so a stale `is-open` class can never leak through.

    const desktopMedia = window.matchMedia("(min-width: 1024px)");

    function handleBreakpointChange() {
      closeMobileMenu();
      closeMobileSearch();
    }

    if (typeof desktopMedia.addEventListener === "function") {
      desktopMedia.addEventListener("change", handleBreakpointChange);
    } else if (typeof desktopMedia.addListener === "function") {
      // Safari < 14 fallback
      desktopMedia.addListener(handleBreakpointChange);
    }
    // --------------------------------------------------------
    // ACTIVE PAGE
    // --------------------------------------------------------

    setActiveNavigation();


    // --------------------------------------------------------
    // BASKET COUNT
    // --------------------------------------------------------

    updateBasketCount();


    console.log(
      "EDUCORE shared navbar initialised"
    );

  }


  // ==========================================================
  // MOBILE MENU FUNCTIONS
  // ==========================================================

  function openMobileMenu() {

    const menu =
      document.getElementById("mobile-menu");

    const toggle =
      document.getElementById("menu-toggle");

    if (!menu || !toggle) {
      return;
    }

    // Close mobile search first
    closeMobileSearch();

    menu.classList.add("is-open");

    menu.setAttribute(
      "aria-hidden",
      "false"
    );

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

    toggle.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

    toggle.innerHTML =
      '<i class="fas fa-times"></i>';

  }


  function closeMobileMenu() {

    const menu =
      document.getElementById("mobile-menu");

    const toggle =
      document.getElementById("menu-toggle");

    if (!menu || !toggle) {
      return;
    }

    menu.classList.remove("is-open");

    menu.setAttribute(
      "aria-hidden",
      "true"
    );

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    toggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    toggle.innerHTML =
      '<i class="fas fa-bars"></i>';

  }


  // ==========================================================
  // MOBILE SEARCH FUNCTIONS
  // ==========================================================

  function openMobileSearch() {

    const panel =
      document.getElementById(
        "mobile-search-panel"
      );

    const toggle =
      document.getElementById(
        "mobile-search-toggle"
      );

    if (!panel || !toggle) {
      return;
    }

    closeMobileMenu();

    panel.classList.add("is-open");

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

    const input =
      document.getElementById(
        "mobile-search"
      );

    if (input) {
      setTimeout(
        () => input.focus(),
        100
      );
    }

  }


  function closeMobileSearch() {

    const panel =
      document.getElementById(
        "mobile-search-panel"
      );

    const toggle =
      document.getElementById(
        "mobile-search-toggle"
      );

    if (!panel || !toggle) {
      return;
    }

    panel.classList.remove("is-open");

    panel.setAttribute(
      "aria-hidden",
      "true"
    );

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  // ==========================================================
  // SEARCH CLEAR
  // ==========================================================

  function setupSearchClear(
    inputId,
    buttonId
  ) {

    const input =
      document.getElementById(inputId);

    const button =
      document.getElementById(buttonId);

    if (!input || !button) {
      return;
    }

    input.addEventListener(
      "input",
      function () {

        button.classList.toggle(
          "is-visible",
          input.value.length > 0
        );

      }
    );

    button.addEventListener(
      "click",
      function () {

        input.value = "";

        button.classList.remove(
          "is-visible"
        );

        input.focus();

        input.dispatchEvent(
          new Event("input", {
            bubbles: true
          })
        );

      }
    );

  }


  // ==========================================================
  // ACTIVE NAVIGATION
  // ==========================================================

  function setActiveNavigation() {

    const currentPath =
      window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    let currentPage = "home";

    if (
      currentPath === "catalogue.html"
    ) {
      currentPage = "catalogue";

    } else if (
      currentPath === "about.html"
    ) {
      currentPage = "about";

    } else if (
      currentPath === "contact.html"
    ) {
      currentPage = "contact";

    } else if (
      currentPath === "quote.html"
    ) {
      currentPage = "quote";

    } else if (
      currentPath === "download.html"
    ) {
      currentPage = "download";
    }


    document
      .querySelectorAll(
        "[data-nav-link]"
      )
      .forEach(function (link) {

        link.classList.toggle(
          "is-active",
          link.dataset.navLink === currentPage
        );

      });

  }


  // ==========================================================
  // BASKET COUNT
  // ==========================================================

function updateBasketCount() {
  const badge = document.getElementById("basket-count");

  if (!badge) return;

  let items = [];

  try {
    const savedBasket =
      localStorage.getItem("educore_quote_basket_v2") ||
      localStorage.getItem("educore_basket");

    const parsedBasket = savedBasket
      ? JSON.parse(savedBasket)
      : [];

    if (Array.isArray(parsedBasket)) {
      items = parsedBasket;
    }
  } catch (error) {
    console.warn(
      "EDUCORE: Could not read saved quote basket.",
      error
    );
  }

  const count = items.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  badge.textContent = count;
}


  // Expose functions for other Educore scripts
  window.EducoreNavbar = {

    openMobileMenu,
    closeMobileMenu,
    openMobileSearch,
    closeMobileSearch,
    updateBasketCount

  };


  // ==========================================================
  // START
  // ==========================================================

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      renderNavbar
    );

  } else {

    renderNavbar();

  }

})();
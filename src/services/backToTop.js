export function initialiseBackToTop() {
  let button = document.getElementById("back-to-top");

  if (!button) {
    button = document.createElement("button");
    button.id = "back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Back to top");
    button.setAttribute("title", "Back to top");

    button.innerHTML = `
      <i class="fas fa-arrow-up" aria-hidden="true"></i>
    `;

    document.body.appendChild(button);
  }

  if (!document.getElementById("back-to-top-styles")) {
    const style = document.createElement("style");
    style.id = "back-to-top-styles";

    style.textContent = `
      #back-to-top {
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 9998;
        display: flex;
        width: 48px;
        height: 48px;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        background: #f05a28;
        border: 0;
        border-radius: 9999px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.25);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(14px);
        cursor: pointer;
        transition:
          opacity 0.25s ease,
          visibility 0.25s ease,
          transform 0.25s ease,
          background-color 0.2s ease;
      }

      #back-to-top:hover {
        background: #d94a1e;
      }

      #back-to-top:focus-visible {
        outline: 3px solid rgba(240, 90, 40, 0.35);
        outline-offset: 3px;
      }

      #back-to-top.is-visible {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
      }

      @media (max-width: 640px) {
        #back-to-top {
          right: 16px;
          bottom: 16px;
          width: 44px;
          height: 44px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #back-to-top {
          transition: none;
        }
      }
    `;

    document.head.appendChild(style);
  }

  const updateVisibility = () => {
    button.classList.toggle(
      "is-visible",
      window.scrollY > 350
    );
  };

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  });

  window.addEventListener("scroll", updateVisibility, {
    passive: true,
  });

  updateVisibility();
}
// Back-to-top deployment refresh

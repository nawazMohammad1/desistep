/* =====================================================
   VASTRAA
   NEW ARRIVALS JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       SCROLL REVEAL
    ========================================== */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* =========================================
       PRODUCT FILTER
    ========================================== */

  const filterButtons = document.querySelectorAll(".filter-btn");

  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.dataset.filter;

      productCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");

        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("hidden");

          requestAnimationFrame(() => {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            requestAnimationFrame(() => {
              card.style.transition = "opacity .45s ease, transform .45s ease";

              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            });
          });
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  /* =========================================
       WISHLIST
    ========================================== */

  const wishlistButtons = document.querySelectorAll(".wishlist");

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");

      icon.classList.toggle("fa-regular");

      icon.classList.toggle("fa-solid");

      button.animate(
        [
          {
            transform: "scale(1)",
          },
          {
            transform: "scale(1.25)",
          },
          {
            transform: "scale(1)",
          },
        ],
        {
          duration: 350,
        },
      );
    });
  });

  /* =========================================
       QUICK VIEW
    ========================================== */

  const quickViewButtons = document.querySelectorAll(".quick-view");

  quickViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");

      const productName = card.querySelector("h3").textContent;

      const price = card.querySelector(".product-price").textContent;

      alert(
        `${productName}\n\nPrice: ${price}\n\nWhatsApp us to enquire about sizes, colours and availability.`,
      );
    });
  });

  /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 40px rgba(40,25,15,.07)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  /* =========================================
       NEWSLETTER
    ========================================== */

  const newsletter = document.querySelector(".newsletter-form");

  if (newsletter) {
    newsletter.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = newsletter.querySelector("input");

      if (input.value.trim() !== "") {
        alert(
          "Welcome to Vastraa ✨\n\nYou'll be the first to know about our newest arrivals.",
        );

        input.value = "";
      }
    });
  }

  /* =========================================
   MOBILE HAMBURGER MENU
========================================= */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuBtn.setAttribute("aria-expanded", isOpen);

      menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

      /* Prevent page scrolling */
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    /* =========================================
       CLOSE MENU WHEN LINK IS CLICKED
    ========================================== */

    const mobileLinks = navLinks.querySelectorAll("a");

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.style.overflow = "";
      });
    });

    /* =========================================
       CLOSE MENU WITH ESCAPE
    ========================================== */

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.classList.contains("active")) {
        menuBtn.classList.remove("active");

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";
      }
    });
  }
});

/* =========================================
   VASTRAA COLLECTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================
       PAGE LOADER
    ===================================== */

  const loader = document.querySelector(".page-loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 700);
  });

  /* =====================================
       NAVBAR
    ===================================== */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* =====================================
       MOBILE MENU
    ===================================== */

  const menuToggle = document.querySelector(".menu-toggle");

  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");

      navMenu.classList.remove("open");

      document.body.classList.remove("menu-open");
    });
  });

  /* =====================================
       SEARCH
    ===================================== */

  const searchBtn = document.querySelector(".search-btn");

  const searchOverlay = document.querySelector(".search-overlay");

  const closeSearch = document.querySelector(".close-search");

  const searchInput = document.querySelector(".search-line input");

  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("open");

    setTimeout(() => {
      searchInput.focus();
    }, 400);
  });

  closeSearch.addEventListener("click", () => {
    searchOverlay.classList.remove("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchOverlay.classList.remove("open");
    }
  });

  /* =====================================
       SEARCH DEMO
    ===================================== */

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const searchValue = searchInput.value.trim();

      if (searchValue) {
        alert(`Searching Vastraa for "${searchValue}"`);
      }
    }
  });

  /* =====================================
       SCROLL REVEAL
    ===================================== */

  const revealItems = document.querySelectorAll(".reveal");

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

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });

  /* =====================================
       CATEGORY FILTER
    ===================================== */

  const categoryButtons = document.querySelectorAll(".category-btn");

  const collectionCards = document.querySelectorAll(".collection-card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /* ACTIVE BUTTON */

      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      /* FILTER */

      const filter = button.dataset.filter;

      collectionCards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.style.display = "";

          setTimeout(() => {
            card.style.opacity = "1";

            card.style.transform = "scale(1)";
          }, 30);
        } else {
          card.style.opacity = "0";

          card.style.transform = "scale(.92)";

          setTimeout(() => {
            card.style.display = "none";
          }, 350);
        }
      });
    });
  });

  /* =====================================
       BACK TO TOP
    ===================================== */

  const backTop = document.querySelector(".back-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });

  /* =====================================
       HERO PARALLAX
    ===================================== */

  const heroImage = document.querySelector(".hero-image");

  window.addEventListener("mousemove", (event) => {
    if (window.innerWidth < 900) return;

    const x = event.clientX / window.innerWidth - 0.5;

    const y = event.clientY / window.innerHeight - 0.5;

    heroImage.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
  });

  /* =====================================
       IMAGE HOVER MOVEMENT
    ===================================== */

  document.querySelectorAll(".collection-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      if (window.innerWidth < 900) return;

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const moveX = (x / rect.width - 0.5) * 8;

      const moveY = (y / rect.height - 0.5) * 8;

      const image = card.querySelector("img");

      image.style.transform = `scale(1.08)
                         translate(${moveX}px, ${moveY}px)`;
    });

    card.addEventListener("mouseleave", () => {
      const image = card.querySelector("img");

      image.style.transform = "scale(1)";
    });
  });
});

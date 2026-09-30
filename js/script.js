/* =========================================
   VASTRAA
   Homepage JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       PRELOADER
    ========================================= */

  const preloader = document.querySelector(".preloader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 700);
  });

  /* =========================================
       NAVBAR SCROLL
    ========================================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* =========================================
       MOBILE MENU
    ========================================= */

  const menuToggle = document.querySelector(".menu-toggle");

  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");
  });

  /* Close mobile menu */

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");

      navMenu.classList.remove("open");

      document.body.classList.remove("menu-open");
    });
  });

  /* =========================================
       SEARCH
    ========================================= */

  const searchButton = document.querySelector(".search-btn");

  const searchOverlay = document.querySelector(".search-overlay");

  const closeSearch = document.querySelector(".close-search");

  const searchInput = document.querySelector(".search-box input");

  searchButton.addEventListener("click", () => {
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

  /* =========================================
       SEARCH DEMO
    ========================================= */

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const value = searchInput.value.trim();

      if (value !== "") {
        alert(`Searching Vastraa for: ${value}`);
      }
    }
  });

  /* =========================================
       SCROLL REVEAL
    ========================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
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
       WISHLIST
    ========================================= */

  const wishlistButtons = document.querySelectorAll(".wishlist");

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");

      icon.classList.toggle("fa-regular");

      icon.classList.toggle("fa-solid");

      button.classList.toggle("liked");
    });
  });

  /* =========================================
       BACK TO TOP
    ========================================= */

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

  /* =========================================
       PARALLAX HERO
    ========================================= */

  const heroVisual = document.querySelector(".hero-visual");

  window.addEventListener("mousemove", (event) => {
    if (window.innerWidth <= 850) return;

    const x = event.clientX / window.innerWidth - 0.5;

    const y = event.clientY / window.innerHeight - 0.5;

    heroVisual.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  });

  /* =========================================
       PRODUCT IMAGE HOVER TILT
    ========================================= */

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      if (window.innerWidth < 900) return;

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 80;

      const rotateY = (centerX - x) / 80;

      card.style.transform = `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    });
  });
});

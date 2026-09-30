/* =========================================================
   VASTRAA
   ABOUT PAGE JAVASCRIPT
   Tradition. Style. You.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       PRELOADER
    ===================================================== */

  const preloader = document.querySelector(".preloader");

  document.body.classList.add("loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");

      document.body.classList.remove("loading");
    }, 900);
  });

  /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

  const navbar = document.querySelector(".navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);

  handleNavbarScroll();

  /* =========================================
   MOBILE HAMBURGER MENU
========================================= */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      const menuIsOpen = navLinks.classList.contains("active");

      if (menuIsOpen) {
        /* CLOSE */

        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.style.overflow = "";
      } else {
        /* OPEN */

        navLinks.classList.add("active");
        menuBtn.classList.add("active");

        menuBtn.setAttribute("aria-expanded", "true");

        menuBtn.setAttribute("aria-label", "Close menu");

        document.body.style.overflow = "hidden";
      }
    });

    /* CLOSE WHEN NAV LINK IS CLICKED */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.style.overflow = "";
      });
    });

    /* CLOSE WITH ESC KEY */

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.style.overflow = "";
      }
    });
  }
  /* =====================================================
       SCROLL REVEAL
    ===================================================== */

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
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

  const cursorDot = document.querySelector(".cursor-dot");

  const cursorRing = document.querySelector(".cursor-ring");

  if (cursorDot && cursorRing && window.innerWidth > 900) {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorDot.style.left = `${mouseX}px`;

      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.14;

      ringY += (mouseY - ringY) * 0.14;

      cursorRing.style.left = `${ringX}px`;

      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    /* Cursor hover effect */

    const interactiveElements = document.querySelectorAll(
      "a, button, .gallery-item, .philosophy-card",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursorRing.classList.add("hover");
      });

      element.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("hover");
      });
    });
  }

  /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();

          const navbarHeight = navbar.offsetHeight;

          const targetPosition =
            target.getBoundingClientRect().top + window.scrollY - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

  const heroImage = document.querySelector(".hero-image-frame img");

  window.addEventListener(
    "scroll",
    () => {
      if (!heroImage) return;

      if (window.innerWidth > 900) {
        const scrollValue = window.scrollY;

        heroImage.style.transform = `translateY(${scrollValue * 0.06}px) scale(1.02)`;
      }
    },
    {
      passive: true,
    },
  );

  /* =====================================================
       MAGNETIC BUTTON EFFECT
    ===================================================== */

  const magneticButtons = document.querySelectorAll(
    ".btn, .outline-btn, .whatsapp-outline",
  );

  if (window.innerWidth > 900) {
    magneticButtons.forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;

        const y = event.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  }

  /* =====================================================
       IMAGE TILT
    ===================================================== */

  const philosophyCards = document.querySelectorAll(".philosophy-card");

  if (window.innerWidth > 900) {
    philosophyCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 5;

        const rotateX = (y / rect.height - 0.5) * -5;

        card.style.transform = `translateY(-12px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* =====================================================
       ACTIVE NAV LINK
    ===================================================== */

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

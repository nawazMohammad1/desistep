/* =========================================
   VASTRAA
   Contact Page JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
       PRELOADER
    ========================================= */

  const preloader = document.querySelector(".preloader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add("hide");
      }
    }, 900);
  });

  /* =========================================
       HAMBURGER MENU
    ========================================= */

  const menuBtn = document.getElementById("menuBtn");

  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("active");

      if (isOpen) {
        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.classList.remove("menu-open");
      } else {
        navLinks.classList.add("active");

        menuBtn.classList.add("active");

        menuBtn.setAttribute("aria-expanded", "true");

        menuBtn.setAttribute("aria-label", "Close menu");

        document.body.classList.add("menu-open");
      }
    });

    /* Close menu after clicking link */

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.classList.remove("menu-open");
      });
    });

    /* Escape key */

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.setAttribute("aria-label", "Open menu");

        document.body.classList.remove("menu-open");
      }
    });
  }

  /* =========================================
       SCROLL REVEAL
    ========================================= */

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
       CUSTOM CURSOR
    ========================================= */

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

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
      });

      element.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
    });
  }

  /* =========================================
       CONTACT FORM
    ========================================= */

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();

      const phone = document.getElementById("phone").value.trim();

      const email = document.getElementById("email").value.trim();

      const interest = document.getElementById("interest").value;

      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !email || !interest || !message) {
        alert("Please fill in all the fields.");

        return;
      }

      const whatsappMessage =
        `Hello Vastraa!%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Interested in: ${encodeURIComponent(interest)}%0A%0A` +
        `Message:%0A${encodeURIComponent(message)}`;

      const whatsappURL = `https://wa.me/919999999999?text=${whatsappMessage}`;

      window.open(whatsappURL, "_blank");

      contactForm.reset();
    });
  }

  /* =========================================
       INPUT FOCUS EFFECT
    ========================================= */

  const fields = document.querySelectorAll(
    ".field input, .field textarea, .field select",
  );

  fields.forEach((field) => {
    field.addEventListener("focus", () => {
      field.parentElement.classList.add("focused");
    });

    field.addEventListener("blur", () => {
      field.parentElement.classList.remove("focused");
    });
  });

  /* =========================================
       PARALLAX HERO
    ========================================= */

  const heroImage = document.querySelector(".hero-background img");

  if (heroImage) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY < window.innerHeight) {
          heroImage.style.transform = `scale(1.04) translateY(${window.scrollY * 0.08}px)`;
        }
      },
      { passive: true },
    );
  }

  /* =========================================
       MAGNETIC BUTTONS
    ========================================= */

  const magneticButtons = document.querySelectorAll(
    ".submit-btn, .cta-button, .map-btn",
  );

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

  /* =========================================
       CARD TILT
    ========================================= */

  const cards = document.querySelectorAll(".quick-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      if (window.innerWidth <= 900) return;

      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 5;

      const rotateX = (y / rect.height - 0.5) * -5;

      card.style.transform = `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* =========================================
       CURRENT YEAR
    ========================================= */

  const yearElement = document.querySelector(".footer-bottom span");

  if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace(
      "2026",
      new Date().getFullYear(),
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  /* PRELOADER */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("hide"), 450);
  });
  // Fallback if load event already fired
  setTimeout(() => {
    if (preloader && !preloader.classList.contains("hide")) {
      preloader.classList.add("hide");
    }
  }, 1000);

  /* SCROLL REVEAL OBSERVER */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  /* GALLERY THUMBNAIL SWITCHER */
  const mainImage = document.getElementById("mainImage");
  const thumbBtns = document.querySelectorAll(".thumb-btn");

  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      thumbBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const newSrc = btn.getAttribute("data-image");

      // Fade transition effect
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = 1;
      }, 200);
    });
  });
  mainImage.style.transition = "opacity 0.2s ease";

  /* WISHLIST TOGGLE */
  const wishlistBtn = document.getElementById("wishlistBtn");
  wishlistBtn.addEventListener("click", () => {
    const icon = wishlistBtn.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    wishlistBtn.style.color = icon.classList.contains("fa-solid")
      ? "#651d48"
      : "";
  });

  /* SIZE & QUANTITY STATE */
  let selectedSize = "Unstitched Blouse";
  let quantity = 1;

  const sizeBtns = document.querySelectorAll(".size-btn");
  const quantityVal = document.getElementById("quantityVal");
  const increaseQty = document.getElementById("increaseQty");
  const decreaseQty = document.getElementById("decreaseQty");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  function updateWhatsAppLink() {
    const productName = "Ivory Grace Saree";
    const productPrice = "₹2,499";
    const message = `Hello Vastraa! I would like to order the ${productName} (${productPrice}) - Size/Option: ${selectedSize}, Qty: ${quantity}. Please confirm availability.`;
    whatsappOrderBtn.href = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
  }

  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.getAttribute("data-size");
      updateWhatsAppLink();
    });
  });

  increaseQty.addEventListener("click", () => {
    if (quantity < 10) {
      quantity++;
      quantityVal.textContent = quantity;
      updateWhatsAppLink();
    }
  });

  decreaseQty.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityVal.textContent = quantity;
      updateWhatsAppLink();
    }
  });

  /* ACCORDION TOGGLE */
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const wasActive = item.classList.contains("active");

      // Close all accordions
      document.querySelectorAll(".accordion-item").forEach((acc) => {
        acc.classList.remove("active");
      });

      // Open clicked if it wasn't active
      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });

  // Open first accordion by default
  if (document.querySelector(".accordion-item")) {
    document.querySelector(".accordion-item").classList.add("active");
  }

  /* BACK TO TOP */
  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 700);
  });
  backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  /* MOBILE MENU TOGGLE */
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => {
    alert(
      "Mobile navigation: connect this button to your shared Vastraa menu.",
    );
  });
});

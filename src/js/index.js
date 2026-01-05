const btn = document.getElementById("hamburger-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  // Toggle antara hidden dan flex
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./src/assets/images/hero/1.png",
    "./src/assets/images/hero/2.png",
    "./src/assets/images/hero/3.png",
  ];

  let index = 0;
  const heroImage = document.querySelector(".hero-image");

  if (!heroImage) return;

  function playZoom() {
    // RESET animation
    heroImage.style.animation = "none";
    heroImage.offsetHeight; // force reflow
    heroImage.style.animation = "zoomHero 2s ease-in-out forwards";
  }

  function changeImage() {
    heroImage.style.backgroundImage = `url(${images[index]})`;
    playZoom();
    index = (index + 1) % images.length;
  }

  // start
  changeImage();

  // 2s zoom + 2s hold
  setInterval(changeImage, 4000);
});

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".gallery-image").forEach((img) => {
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

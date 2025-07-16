feather.replace();

// Grab elements
const overlay = document.getElementById("overlay");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

function showOverlay() {
  overlay.classList.add("active-overlay");

  // To ensure removal when re-opening quickly
  overlay.classList.remove("slide-to-right");
  // To slide from right to left
  overlay.classList.add("slide-from-right");

  menuIcon.classList.add("hidden-on-mobile");
  closeIcon.classList.add("shown-on-mobile");
}

function hideOverlay() {
  // For the animation
  overlay.classList.add("slide-to-right");

  const handleAnimationEnd = () => {
    overlay.classList.remove("active-overlay");
    overlay.classList.remove("slide-from-right");
    overlay.classList.remove("slide-to-right");
    overlay.removeEventListener("animationend", handleAnimationEnd);

    menuIcon.classList.remove("hidden-on-mobile");
    closeIcon.classList.remove("shown-on-mobile");
  };

  overlay.addEventListener("animationend", handleAnimationEnd);
}

// Hide close icon by default
window.addEventListener("DOMContentLoaded", () => {});

// Grab elements
const overlay = document.getElementById("overlay");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

function showOverlay() {
  overlay.style.display = "flex";
  overlay.classList.remove("slide-to-right");
  // Add the CSS class for sliding from right to left
  overlay.classList.add("slide-from-right");

  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function hideOverlay() {
  overlay.classList.add("slide-to-right");

  const handleAnimationEnd = () => {
    overlay.style.display = "none";
    overlay.classList.remove("slide-from-right");
    overlay.classList.remove("slide-to-right");
    overlay.removeEventListener("animationend", handleAnimationEnd);
    menuIcon.style.display = "";
  };

  overlay.addEventListener("animationend", handleAnimationEnd);

  closeIcon.style.display = "none";
}

// Hide close icon by default
window.addEventListener("DOMContentLoaded", () => {
  feather.replace();
  closeIcon.style.display = "none";
});

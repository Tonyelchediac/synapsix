// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navlabel = document.getElementById("navlabel");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navlabel.classList.toggle("active");
});

// Close everything when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navlabel.classList.remove("active");
  });
});

navlabel.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navlabel.classList.remove("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Preloader functionality
window.addEventListener("load", () => {
  const preloader = document.getElementById("loader");
  preloader.classList.add("hidden");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Initialize Lucide icons
lucide.createIcons();
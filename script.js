/* ===========================
   MENÚ HAMBURGUESA
=========================== */
const hamburger = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("menu-backdrop");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  backdrop.classList.toggle("show");
});

backdrop.addEventListener("click", () => {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  backdrop.classList.remove("show");
});

/* ===========================
   PARALLAX HERO
=========================== */
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.25;
  hero.style.backgroundPositionY = `-${offset}px`;
});

/* ===========================
   SCROLL REVEAL
=========================== */
const revealEls = document.querySelectorAll('.section--reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealEls.forEach(el => observer.observe(el));
import  { renderAchievementsCards } from './achievementsCards.js';
import { renderServicesCards } from './servicesCards.js';
import { renderTeamCards } from './teamCards.js';
import { renderTestimonialsCards } from './testimonialCards.js';

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".navbar__toggle");
  const navList = document.querySelector(".navbar__list");
  const overlay = document.querySelector(".navbar__overlay");

  const toggleNavbar = () => {
    toggle.classList.toggle("navbar__toggle--active");
    navList.classList.toggle("navbar__list--active");
    navbar__list__item__link.classList.toggle("navbar__list__item__link--active");
    overlay.style.display = navList.classList.contains("navbar__list--active")
      ? "block"
      : "none";
  };

  toggle.addEventListener("click", toggleNavbar);
  overlay.addEventListener("click", toggleNavbar);
  navList.addEventListener("click", toggleNavbar);
});


renderTestimonialsCards();
renderTeamCards();
renderServicesCards();
renderAchievementsCards();

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar__toggle");
  const nav = document.querySelector(".navbar__nav");

  toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("navbar__toggle--active");
      nav.classList.toggle("navbar__nav--active");
  });
});


const renderAchievementsCards = async () => {
  const achievementsCardsContainer = document.querySelector(
    ".achievements__cards"
  );

  try {
    const response = await fetch("./assets/about/about.json");
    if (!response.ok) {
      throw new Error("Failed to load JSON file.");
    }

    const aboutData = await response.json();

    aboutData.about.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("achievements__card");

      card.innerHTML = `
          <div class="achievements__card__image">
            <img src="${item.path}" alt="${item.name}">
          </div>
          <div class="achievements__card__content">
            <h2 class="achievements__card__content__title">${item.name}</h2>
            <p class="achievements__card__content__desc">${item.description}</p>
          </div>
        `;

      achievementsCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};


const renderServicesCards = async () => {
  const servicesCardsContainer = document.querySelector(".services__cards");

  try {
    const response = await fetch("./assets/services/services.json");
    if (!response.ok) {
      throw new Error("Failed to load JSON file.");
    }

    const servicesData = await response.json();

    servicesData.services.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("services__card");

      card.innerHTML = `
          <div class="services__card__image">
            <img src="${item.path}" alt="${item.name}">
          </div>
          <div class="services__card__content">
            <h2 class="services__card__content__title">${item.name}</h2>
            <p class="services__card__content__desc">${item.description}</p>
          </div>
        `;

      servicesCardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};

const renderTeamCards = async () => {
  const teamCarouselTrack = document.querySelector(".team__carousel__track");
  let currentIndex = 0;

  try {
    const response = await fetch("./assets/team/team.json");
    if (!response.ok) {
      throw new Error("Failed to load JSON file.");
    }

    const teamData = await response.json();

    teamData.team.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("team__carousel__card");

      card.innerHTML = `
          <div class="team__carousel__card__image">
            <img src="${member.path}" alt="${member.name}">
          </div>
          <div class="team__carousel__card__content">
            <h2 class="team__carousel__card__content__name">${member.name}</h2>
            <p class="team__carousel__card__content__role">${member.role}</p>
            <p class="team__carousel__card__content__desc">${member.description}</p>
          </div>
        `;

      teamCarouselTrack.appendChild(card);
    });

    const cards = document.querySelectorAll(".team__carousel__card");
    const cardWidth = cards[0].offsetWidth + 32;
    const totalCards = cards.length;

    const prevButton = document.querySelector(".team__buttons__btn--prev");
    const nextButton = document.querySelector(".team__buttons__btn--next");

    const updateCarouselPosition = () => {
      teamCarouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
      if (currentIndex === 0) {
        currentIndex = totalCards - 3; 
      } else {
        currentIndex -= 1;
      }
      updateCarouselPosition();
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex === totalCards - 3) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      updateCarouselPosition();
    });
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};


const renderTestimonialsCards = async () => {
  const testimonialsCardsContainer = document.querySelector(".testimonials__cards");
  const prevButton = document.querySelector(".testimonials__carousel__btn--prev");
  const nextButton = document.querySelector(".testimonials__carousel__btn--next");

  try {
    const response = await fetch("./assets/testimonials/testimonials.json");
    if (!response.ok) {
      throw new Error("Failed to load JSON file.");
    }

    const testimonialsData = await response.json();
    const cards = [];

    testimonialsData.testimonials.forEach((testimonial) => {
      const card = document.createElement("div");
      card.classList.add("testimonials__card");

      card.innerHTML = `
        <div class="testimonials__card__content__first">
          <span class="testimonials__card__content__rating">
            <img src="./assets/testimonials/star.png" alt="star">
            <img src="./assets/testimonials/star.png" alt="star">
            <img src="./assets/testimonials/star.png" alt="star">
            <img src="./assets/testimonials/star.png" alt="star">
            <img src="./assets/testimonials/star.png" alt="star">
          </span>
          <p class="testimonials__card__content__desc">${testimonial.description}</p>
        </div>
        <div class="testimonials__card__content">
          <img class="testimonials__card__content__image" src="${testimonial.path}" alt="${testimonial.name}">
          <div class="testimonials__card__content__details">
          <h2 class="testimonials__card__content__name">${testimonial.name}</h2>
          <p class="testimonials__card__content__role">${testimonial.role || ''}</p>
          </div>
        </div>
      `;

      cards.push(card);
    });

    cards.forEach((card) => testimonialsCardsContainer.appendChild(card));

    let currentIndex = 0;

    const updateCarouselPosition = () => {
      const cardWidth = cards[0].offsetWidth + 32; 
      testimonialsCardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
      if (currentIndex === 0) {
        currentIndex = cards.length - 2; 
      } else {
        currentIndex -= 1;
      }
      updateCarouselPosition();
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex === cards.length - 2) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      updateCarouselPosition();
    });

  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};


renderTestimonialsCards();
renderTeamCards();
renderServicesCards();
renderAchievementsCards();

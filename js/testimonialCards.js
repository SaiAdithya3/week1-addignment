export const renderTestimonialsCards = async () => {
  const testimonialsCardsContainer = document.querySelector(
    ".testimonials__cards"
  );
  const prevButton = document.querySelector(
    ".testimonials__carousel__btn--prev"
  );
  const nextButton = document.querySelector(
    ".testimonials__carousel__btn--next"
  );

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
            <p class="testimonials__card__content__desc">${
              testimonial.description
            }</p>
          </div>
          <div class="testimonials__card__content">
            <img class="testimonials__card__content__image" src="${
              testimonial.path
            }" alt="${testimonial.name}">
            <div class="testimonials__card__content__details">
            <h2 class="testimonials__card__content__name">${
              testimonial.name
            }</h2>
            <p class="testimonials__card__content__role">${
              testimonial.role || ""
            }</p>
            </div>
          </div>
        `;

      cards.push(card);
    });

    cards.forEach((card) => testimonialsCardsContainer.appendChild(card));

    let currentIndex = 0;

    const updateCarouselPosition = () => {
      const cardWidth = cards[0].offsetWidth + 32;
      testimonialsCardsContainer.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
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

export const renderTeamCards = async () => {
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
      teamCarouselTrack.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
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

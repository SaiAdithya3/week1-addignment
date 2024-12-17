export const renderAchievementsCards = async () => {
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

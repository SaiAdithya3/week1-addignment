export const renderServicesCards = async () => {
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
  
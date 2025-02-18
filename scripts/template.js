function getDishesTemplate(index) {
  let dish = russianMenu[0].items[index];
  return `<div class="dish-wrapper">
                <div class="dish">
                  <h2 id=dish-name>${dish.name}</h2>
                  <p id="dish-description">${dish.description}</p>
                  <p id="dish-price">${formatPrice(dish.price) + "€"}</p>
                </div>
                <img id=""
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}

function getSidesTemplate(index) {
  let side = russianMenu[1].items[index];
  return `<div class="dish-wrapper">
                <div class="dish">
                  <h2 id=dish-name>${side.name}</h2>
                  <p id="dish-description">${side.description}</p>
                  <p id="dish-price">${formatPrice(side.price) + "€"}</p>
                </div>
                <img id=""
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}
function getDesertsTemplate(index) {
  let desert = russianMenu[2].items[index];
  return `<div class="dish-wrapper">
                <div class="dish">
                  <h2 id=dish-name>${desert.name}</h2>
                  <p id="dish-description">${desert.description}</p>
                  <p id="dish-price">${formatPrice(desert.price) + "€"}</p>
                </div>
                <img id=""
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}

function getDishesTemplate(itemIndex) {
  let dish = russianMenu[0].items[itemIndex];
  return `<div class="dish-wrapper">
                <div class="dish" onclick="addPortion(0, ${itemIndex})">
                  <h2 class="dish-name">${dish.name}</h2>
                  <p class="dish-description">${dish.description}</p>
                  <p class="dish-price">${formatPrice(dish.price) + "€"}</p>
                </div>
                <img id="add-portion" onclick="addPortion(0, ${itemIndex})"
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}

function getSidesTemplate(itemIndex) {
  let side = russianMenu[1].items[itemIndex];
  return `<div class="dish-wrapper">
                <div class="dish" onclick="addPortion(1, ${itemIndex})">
                  <h2 class="dish-name">${side.name}</h2>
                  <p class="dish-description">${side.description}</p>
                  <p class="dish-price">${formatPrice(side.price) + "€"}</p>
                </div>
                <img id="add-portion" onclick="addPortion(1, ${itemIndex})"
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}

function getDessertsTemplate(itemIndex) {
  let desert = russianMenu[2].items[itemIndex];
  return `<div class="dish-wrapper">
                <div class="dish" onclick="addPortion(2, ${itemIndex})">
                  <h2 class="dish-name">${desert.name}</h2>
                  <p class="dish-description">${desert.description}</p>
                  <p class="dish-price">${formatPrice(desert.price) + "€"}</p>
                </div>
                <img id="add-portion" onclick="addPortion(2, ${itemIndex})"
                  class="add-to-basket-button"
                  src="./assets/icons/addFood.png"
                  alt="add-to-basket"
                />
              </div>`;
}

function getBasketDishesTemplate(index) {
  let menuItem = basket[index];
  return ` <div class="basket-dish">
            <h4>${menuItem.name}</h4>
            <div class="cart-control">
              <div class="amount-control">
                <img
                  id=""
                  onclick="changePortionAmount(${index}, 'decrement')"
                  src="./assets/icons/deleteFood.png"
                  alt="remove-one"
                />
                <p id="">${menuItem.amount + "x"}</p>
                <img
                  id="" onclick="changePortionAmount(${index}, 'increment')"
                  src="./assets/icons/addFood.png"
                  alt="add-more"
                />
              </div>
              <p class="basket-price">${formatPrice(menuItem.price) + "€"}</p>
              <img id="toTrash"
                onclick="deleteAllPortions(${index})"
                src="./assets/icons/trash.png"
                alt="delete-all"
              />
            </div>
          </div>
`;
}

function getEmptyBasketTemplate() {
  return `     <img class="bag-icon" src="./assets/icons/shoppingBag.png" alt="bag-png" />
            <p class="basket-text">Choose delicious dishes from the menu and order your meal.</p>`;
}

function getPriceSummaryTemplate() {
  return `<div class="cost-breakdown-wrapper">
  <hr />
  <div class="cost-breakdown">
    <div class="subtotal-price">
      <p>Subtotal</p>
      <p>${formatPrice(subtotalCost) + "€"}</p>
    </div>
    <div class="delivery-price">
      <p>Delivery costs</p>
      <p>${formatPrice(deliveryCost) + "€"}</p>
    </div>
    <div class="total-price">
      <p>Total</p>
      <p>${formatPrice(totalCost) + "€"}</p>
    </div>
  </div>
  <button class="payment-btn" onclick="openOverlay()" type="button">payment</button>
</div>`;
}

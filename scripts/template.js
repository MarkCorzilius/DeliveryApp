function getDishesTemplate(itemIndex) {
  let dish = russianMenu[0].items[itemIndex];
  return `<div class="dish-wrapper">
                <div class="dish">
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
                <div class="dish">
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
                <div class="dish">
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
                  onclick=""
                  src="./assets/icons/deleteFood.png"
                  alt="remove_one"
                />
                <p id="">${menuItem.amount + "x"}</p>
                <img
                  id="" onclick=""
                  src="./assets/icons/addFood.png"
                  alt="add_more"
                />
              </div>
              <p class="basket-price">${formatPrice(menuItem.price) + "€"}</p>
              <img
                onclick=""
                src="./assets/icons/trash.png"
                alt="delete_all"
              />
            </div>
          </div>
`;
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
</div>`;
}

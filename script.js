function init() {
  renderMenu(0, "dishes-template-output", getDishesTemplate);
  renderMenu(1, "sides-template-output", getSidesTemplate);
  renderMenu(2, "desserts-template-output", getDessertsTemplate);
}

function updateUI() {
  isAllAmountZero();
  calcSummaryPrices();
  renderOrderSummary();
  renderBasketDishes();
}

function renderMenu(categoryIndex, outputId, templateFunction) {
  let contentRef = document.getElementById(outputId);
  contentRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < russianMenu[categoryIndex].items.length; itemIndex++) {
    contentRef.innerHTML += templateFunction(itemIndex);
  }
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",");
}

function addPortion(categoryIndex, itemIndex) {
  let meal = russianMenu[categoryIndex].items[itemIndex];
  let basketItem = null;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === meal.name) {
      basketItem = basket[i];
      break;
    }
  }
  if (basketItem) {
    basketItem.amount++;
  }

  updateUI();
  showBasketItemCount();
}

function isAllAmountZero() {
  let basketRef = document.getElementById("basket-dishes-output");
  let allZero = true;

  for (let index = 0; index < basket.length; index++) {
    if (basket[index].amount !== 0) {
      allZero = false;
      break;
    }
  }
  if (allZero) {
    basketRef.innerHTML = "";
    basketRef.innerHTML = getEmptyBasketTemplate();
    renderOrderSummary();
    renderBasketDishes();
  }
}

function renderBasketDishes() {
  let basketRef = document.getElementById("basket-dishes-output");
  basketRef.innerHTML = "";

  for (let index = 0; index < basket.length; index++) {
    if (basket[index].amount > 0) {
      basketRef.innerHTML += getBasketDishesTemplate(index);
    }
  }
  if (basket.length === 0 || basket.every((item) => item.amount === 0)) {
    basketRef.innerHTML = getEmptyBasketTemplate();
  }
}

function renderOrderSummary() {
  let contentRef = document.getElementById("order-summary-template-output");
  let allZero = true;

  for (let index = 0; index < basket.length; index++) {
    if (basket[index].amount > 0) {
      allZero = false;
      break;
    }
  }
  if (!allZero) {
    contentRef.innerHTML = getPriceSummaryTemplate();
  } else {
    contentRef.innerHTML = "";
  }
}

function calcSummaryPrices() {
  subtotalCost = 0;
  for (let index = 0; index < basket.length; index++) {
    subtotalCost += basket[index].amount * basket[index].price;
  }
  totalCost = subtotalCost + deliveryCost;
}

function deleteAllPortions(index) {
  basket[index].amount = 0;
  updateUI();
  showBasketItemCount();
}

function changePortionAmount(index, action) {
  let item = basket[index];

  switch (action) {
    case "increment":
      item.amount++;
      break;
    case "decrement":
      item.amount--;
      break;
  }
  updateUI();
  showBasketItemCount();
}

function toggleBasketOverlay() {
  let basketRef = document.getElementById("basket-wrapper");

  if (basketRef.style.display == "block") {
    basketRef.style.display = "none";
    document.body.style.overflow = "auto"; // Aktiviert Scrollen wieder
  } else {
    basketRef.style.display = "block";
    document.body.style.overflow = "hidden"; // Verhindert Scrollen
  }

  toggleBasketButton();
}

function toggleBasketButton() {
  let buttonRef = document.getElementById("mobile-footer-basket");

  if (buttonRef.classList.contains("mobile-footer-basket")) {
    buttonRef.classList.replace("mobile-footer-basket", "footer-basket-opened");
  } else buttonRef.classList.replace("footer-basket-opened", "mobile-footer-basket");
}

function adjustBasketWidth() {
  let basketRef = document.getElementById("basket-wrapper");
  let buttonRef = document.getElementById("mobile-footer-basket");

  if (window.innerWidth > 991.98) {
    basketRef.style.display = "block";
    buttonRef.classList.replace("footer_basket_opened", "mobile-footer-basket");
  }
  if (window.innerWidth == 991.98) {
    basketRef.style.display = "none";
  }
}

function openOverlay() {
  document.getElementById("overlay").style.display = "block";
  clearBasket();
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function showBasketItemCount() {
  basketTotalCount = 0;
  let contentRef = document.getElementById("basket-count");
  contentRef.innerHTML = "";

  for (let mealIndex = 0; mealIndex < basket.length; mealIndex++) {
    let meal = basket[mealIndex];
    basketTotalCount += meal.amount;
  }
  contentRef.innerHTML = `<p>[ You have <strong class="basket-meals-total">${basketTotalCount}</strong> meals in your basket ] </p>`;
  updateUI();
}

function clearBasket() {
  for (let mealIndex = 0; mealIndex < basket.length; mealIndex++) {
    let meal = basket[mealIndex];
    meal.amount = 0;
  }
  updateUI();
  showBasketItemCount();
}

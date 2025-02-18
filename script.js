function init() {
  renderDishes();
  renderSides();
  renderDesserts();
}

function updateUI() {
  isAllAmountZero();
  calcSummaryPrices();
  renderOrderSummary();
  renderBasketDishes();
}

function renderDishes() {
  let contentRef = document.getElementById("dishes-template-output");
  contentRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < russianMenu[0].items.length; itemIndex++) {
    contentRef.innerHTML += getDishesTemplate(itemIndex);
  }
}

function renderSides() {
  let contentRef = document.getElementById("sides-template-output");
  contentRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < russianMenu[1].items.length; itemIndex++) {
    contentRef.innerHTML += getSidesTemplate(itemIndex);
  }
}

function renderDesserts() {
  let contentRef = document.getElementById("deserts-template-output");
  contentRef.innerHTML = "";

  for (let itemIndex = 0; itemIndex < russianMenu[2].items.length; itemIndex++) {
    contentRef.innerHTML += getDessertsTemplate(itemIndex);
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
}

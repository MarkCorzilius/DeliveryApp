function init() {
  renderDishes();
  renderSides();
  renderDeserts();
}

function renderDishes() {
  let contentRef = document.getElementById("dishes-template-output");
  contentRef.innerHTML = "";

  for (let index = 0; index < russianMenu[0].items.length; index++) {
    contentRef.innerHTML += getDishesTemplate(index);
  }
}
function renderSides() {
  let contentRef = document.getElementById("sides-template-output");
  contentRef.innerHTML = "";

  for (let index = 0; index < russianMenu[1].items.length; index++) {
    contentRef.innerHTML += getSidesTemplate(index);
  }
}
function renderDeserts() {
  let contentRef = document.getElementById("deserts-template-output");
  contentRef.innerHTML = "";

  for (let index = 0; index < russianMenu[2].items.length; index++) {
    contentRef.innerHTML += getDesertsTemplate(index);
  }
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",");
}

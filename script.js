let foodContentRef = document.getElementById("renderFoodContent");
let foodContent = foodContentRef;
let cartContentRef = document.getElementById("renderCartContent");
let cartContent = cartContentRef;
let billContentRef = document.getElementById("renderBillContent");
let billContent = billContentRef;
let switchButtonState = 0;
let delivery = 1500;

function render() {
    foodContent.innerHTML = "";
    for (let i = 0; i < pizzi.length; i++) {
        foodContent.innerHTML += getfoodContentTemplate(i);
    }
}

function renderCart() {
    cartContent.innerHTML = "";
    for (let j = 0; j < allCartPizzi.length; j++) {
        if (allCartPizzi[j].amount > 0) {
            let sumOfPizzi = (allCartPizzi[j].totalPreis()) / 100;
            cartContent.innerHTML += getCartTemplate(j, sumOfPizzi);
        }
    }
    countTotal();
}

function countTotal() {
    billContent.innerHTML = "";
    let result = [];
    let element = 0;
    for (let index = 0; index < allCartPizzi.length; index++) {
        if (allCartPizzi[index].amount > 0) {
            let numberToMulti = allCartPizzi[index].totalPreis();
            result.push(numberToMulti);
        }
    }
    if (result.length > 0) {
        for (let j = 0; j < result.length; j++) {
            element += parseFloat(result[j]);
        }
    }
    let billHome = 0;
    billHome = (element + switchButtonState + delivery) / 100;
    element = element / 100;
    let deliveryBracket = (delivery / 100)+ " €";
    billContent.innerHTML += getBillingTemplate(element, billHome, deliveryBracket);
}

function moveChosenMealToCart(index) {
    ++allCartPizzi[index].amount;
    renderCart();
}

function addMeal(index) {
    ++allCartPizzi[index].amount;
    renderCart();
}

function subMeal(index) {
    --allCartPizzi[index].amount;
    renderCart();
}

function deleteMeal(index) {
    allCartPizzi[index].amount = 0;
    renderCart();
}



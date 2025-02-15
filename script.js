let foodContentRef = document.getElementById("renderFoodContent");
let foodContent = foodContentRef;
let cartContentRef = document.getElementById("renderCartContent");
let cartContent = cartContentRef;
let billContentRef = document.getElementById("renderBillContent");
let billContent = billContentRef;
let flyDemoRef = document.getElementById("flyDemo");
let flyDemo = flyDemoRef;
let restaurantContentRef = document.getElementById("restaurantContent");
let restaurantContent = restaurantContentRef;
let shopAppraisalRef = document.getElementById("shopAppraisal");
let shopAppraisal = shopAppraisalRef;
let shopTitleRef = document.getElementById("shopTitle");
let shopTitle = shopTitleRef;
let nav_divRef = document.getElementById("nav");
let nav = nav_divRef;
let nav_imageRef = document.getElementById("nav_image");
let nav_image = nav_imageRef;
let nav_spanRef = document.getElementById("nav_span");
let nav_span = nav_spanRef;
let billRef = document.getElementById("bill");
let warenkorbTextRef = document.getElementById('warenkorbText');
let warenkorbText = warenkorbTextRef;
let warenkorb = document.getElementById('warenkorb');
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
    let deliveryBracket = (delivery / 100) + " €";
    billContent.innerHTML += getBillingTemplate(element, billHome, deliveryBracket);
}

function moveChosenMealToCart(index) {
    ++allCartPizzi[index].amount;
    renderCart();
    pizzaCountAmountInCart();
}

function addMeal(index) {
    ++allCartPizzi[index].amount;
    renderCart();
    pizzaCountAmountInCart();
}

function subMeal(index) {
    --allCartPizzi[index].amount;
    renderCart();
    pizzaCountAmountInCart();
}

function deleteMeal(index) {
    allCartPizzi[index].amount = 0;
    setCheckboxTrue();
    renderCart();
    pizzaCountAmountInCart();
}

function toggleWarenkorb() {
    foodContent.classList.toggle('dNone');
    nav.classList.toggle('dNone');
    restaurantContent.classList.toggle("fdc");
    restaurantContent.classList.toggle("jcfs");
    billContent.classList.toggle('dBlock');
    cartContent.classList.toggle('dBlock');
    warenkorb.classList.toggle('positionFixedTop');
    billContent.classList.toggle('positionFixedBottom');
    if (warenkorbText.innerText == 'Warenkorb schließen!') {
        warenkorbText.innerText = 'Warenkorb'
    } else {
        warenkorbText.innerText = 'Warenkorb schließen!';
    }
    pizzaCountAmountInCart();
}

function orderAndPay() {
    if (confirm("Möchten Sie die Bestellung abschließen?") == true) {
        alert("Vielen Dank, Sie haben gerade bestellt!");
        allCartPizzi.forEach((item) => {
            item.amount = 0;
        });
        cartContent.innerHTML = "";
        renderCart();
    } else {
        alert("Sie haben die Bestellung abgelehnt!");
    }
    countTotal();
    pizzaCountAmountInCart();
}

function pizzaCountAmountInCart() {
    let warenkorbP = document.getElementById('warenkorbP');
    let myCount = 0;
    for (let index = 0; index < allCartPizzi.length; index++) {
        myCount += allCartPizzi[index].amount;
    }
    warenkorbP.innerText = " " + myCount + "St." ;
}
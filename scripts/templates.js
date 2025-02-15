function getCartTemplate(j,sumOfPizzi){
    return `    <div id="foodCart${j}" class="foodCart">
                    <h3 class="cartTextCenter">${allCartPizzi[j].name}</h3>
                    <div id="cartButtonsTotal" class="cartButtonsTotal">
                        <div id="cartButtonsTotalAmount" class="cartButtonsTotalAmount"> <button
                                 onclick="subMeal(${j})" id="foodCartButtons"><img class="foodCartButtons" src="./assets/icons/minus-button.png"
                                    alt=""></button>
                            <h5>${allCartPizzi[j].amount}</h5>
                            <button onclick="addMeal(${j})" id="foodCartButtons"><img class="foodCartButtons"
                    src="./assets/icons/add-button.png" alt=""></button>
                        </div>
                        <h5 class="df aic">${sumOfPizzi} €</h5>
                       <button onclick="deleteMeal(${j})" id="foodCartButtons"><img class="foodCartButtons foodCartButtonDelete" src="./assets/icons/dustbin.png" alt=""></button>
                    </div>
                    <div id="foodCardInfo" class="foodCardInfo">
                    </div>
                </div>`
}

function getfoodContentTemplate(i){
    return `<div id="foodCard" class="foodCard">
                    <div id="foodCardInfo" class="foodCardInfo">
                        <h2 class="nameFood">${pizzi[i].name}</h2>
                        <h3 class="ingredientsFood">${pizzi[i].ingredients}</h3>
                        <h4 class="infoFood">${pizzi[i].info}</h4>
                        <h4 class="preisFood">${pizzi[i].preis} €</h4>
                    </div>
                    <img id="foodCardImage" class="foodCardImage" src="./assets/img/${pizzi[i].picture}" alt="">
                    <div id="foodCardButton" class="foodCardButton">
                       <button id="foodCardButtonToCart" onclick="moveChosenMealToCart(${i})"><img class="foodCardButtonToCartImg" id="foodCardButtonToCartImg" value="${i}" src="./assets/icons/add-button.png" alt=""></button>
                    </div>
                </div>`
}

function getBillingTemplate(bill,billAndDelivery,delivery){
    return	`<div id="bill" class="foodCart foodCartBill">
                    <div class="foodCartBilling">
                        <p id="" class="cartTextCenter">Zwischensumme:</p>
                        <h3 id="billTotal" class="cartTextCenter">${bill} €</h3>
                    </div>
                    <div class="foodCartBilling">
                        <p id="" class="cartTextCenter">Liferkosten:</p>
                        <h3 id="billDeliveryAmount" class="cartTextCenter">${delivery}</h3>
                    </div>
                     <div class="foodCartBilling">
                        <p id="" class="cartTextCenter">Selbstabholung:</p>
                        <div >
                            <label  class="switch" for="myCheckBox">
                              <input  id="myCheckBox" type="checkbox" role="switch" onclick="toggleCheckbox()" >
                              <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div class="foodCartBilling">
                        <p id="" class="cartTextCenter"><strong>Gesamt:</strong></p>
                        <h3 id="billAndDelivery" class="cartTextCenter">${billAndDelivery} €</h3>
                    </div>
                </div>
                 <button id="buttonOrder" class="warenkorb buttonOrder" onclick=" orderAndPay()">  <h1 class="cartTextCenter cartLabel">Bezahlen</h1></button>`
}
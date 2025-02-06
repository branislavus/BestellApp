function getCartTemplate(j,sumOfPizzi){
    return `    <div id="foodCart${j}" class="foodCart">
                    <h3 class="cartTextCenter">${allCartPizzi[j].name}</h3>
                    <div id="cartButtonsTotal" class="cartButtonsTotal">
                        <div id="cartButtonsTotalAmount" class="cartButtonsTotalAmount"> <a href="#"
                                 onclick="subMeal(${j})" id="foodCartButtons"><img class="foodCartButtons" src="./assets/icons/minus-button.png"
                                    alt=""></a>
                            <h5>${allCartPizzi[j].amount}</h5>
                            <a href="#"  onclick="addMeal(${j})" id="foodCartButtons"><img class="foodCartButtons"
                                    src="./assets/icons/add-button.png" alt=""></a>
                        </div>
                        <h5 class="df aic">${sumOfPizzi} €</h5>
                        <a href="#"  onclick="deleteMeal(${j})" id="foodCartButtons"><img class="foodCartButtons" src="./assets/icons/dustbin.png"
                                alt=""></a>
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
                        <a href="#" id="foodCardButtonToCart" onclick="moveChosenMealToCart(${i})"><img class="foodCardButtonToCart" value="${i}"
                                src="./assets/icons/add-button.png" alt=""></a>
                    </div>
                </div>`
}

function getBillingTemplate(bill,billHome,delivery){
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
                        <p id="" class="cartTextCenter">Gesamt:</p>
                        <h3 id="billTotalAndDrive" class="cartTextCenter">${billHome} €</h3>
                    </div>
                </div>`
}
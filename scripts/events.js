

function toggleCheckbox() {
    if (cartContent.innerHTML == "") {
        myCheckBox.checked = false;
        return;
    } else {
        let billAndDelivery = document.getElementById('billAndDelivery');
        let billDeliveryAmount = document.getElementById('billDeliveryAmount');
        let myCheckBox = document.getElementById('myCheckBox');
        let billTotal = document.getElementById('billTotal');
        if (myCheckBox.checked == true) {
            delivery = 0;
            billDeliveryAmount.innerText = "0 €";
            billAndDelivery.innerText = billTotal.innerText;
        } else {
            delivery = 1500;
            billDeliveryAmount.innerText = "15 €";
            billAndDelivery.innerText = (parseFloat(billTotal.innerText) * 100 + delivery) / 100 + " €";
        }
    }

}

function setCheckboxTrue() {
    let myCheckBox = document.getElementById('myCheckBox');
    if (myCheckBox.checked == true) {
        delivery = 1500;
        myCheckBox.checked = false;
    }
}


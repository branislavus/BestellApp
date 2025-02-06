
function toggleCheckbox() {
    var billDeliveryAmount = document.getElementById('billDeliveryAmount');

    switch (myCheckBox.checked == true) {
        case true:
            myCheckBox.checked = false;
            console.log("Checked");
            delivery = 1500;
            billDeliveryAmount.innerText = "15 €";
            break;
        case false:
            myCheckBox.checked == true;
            console.log("Unchecked");
            delivery = 0;
            billDeliveryAmount.innerText = "0 €";
            break;
        default:
            console.log("here went something wrong!");
    }
    countTotal();
}



function toggleCheckbox() {
    var billAndDelivery = document.getElementById('billAndDelivery');
    var billDeliveryAmount = document.getElementById('billDeliveryAmount');
    var myCheckBox = document.getElementById('myCheckBox');
    var billTotal = document.getElementById('billTotal');

    // countTotal();
    if (myCheckBox.checked) {
        delivery = 1500;
        billDeliveryAmount.innerText = "15 €";
        billAndDelivery.innerText = (parseFloat(billTotal.innerText)*100 +delivery)/100;
    } else {
        delivery = 0;
        billDeliveryAmount.innerText = "0 €";
        billAndDelivery.innerText = billTotal.innerText;
    }
}


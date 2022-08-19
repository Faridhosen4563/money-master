function getValueByInput(id) {
    const inputFieldElement = document.getElementById(id);
    const inputValueString = inputFieldElement.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;

}

function setTextValue(id, newValue) {
    const textElemnet = document.getElementById(id);
    textElemnet.innerText = newValue;

}

document.getElementById("calculate-btn").addEventListener('click', function () {
    const food = getValueByInput("food-value");
    const rent = getValueByInput("rent-value");
    const clothes = getValueByInput("clothes-value");

    if (isNaN(food) == false && isNaN(rent) == false && isNaN(clothes) == false) {
        if (food < 0 || rent < 0 || clothes < 0) {
            alert("Please provid positive value, you cant cost nagitive.")
            return;
        }
    }
    else {
        alert("enter value.")
        return;
    }

    const income = getValueByInput("total-income");
    if (isNaN(income) == false) {
        if (income < 0) {
            alert("You cant income nagitive.")
            return;
        }
    }
    else {
        alert("Enter Income Value");
        return;
    }
    const totalExpenses = food + rent + clothes;
    if (totalExpenses > income) {
        alert(`you cant spend ${totalExpenses}$, Because your current income ${income}$`);
        return;
    }
    setTextValue("total-expenses", totalExpenses);

    const newBalance = income - totalExpenses;

    setTextValue("balance", newBalance);
})

document.getElementById("save-btn").addEventListener('click', function () {
    const income = getValueByInput("total-income");
    const savingParcent = getValueByInput("saving");
    if (isNaN(income) == false) {
        if (income < 0) {
            alert("dont")
            return;
        }
    }
    else {
        alert("Enter Income Value");
        return;
    }
    if (isNaN(savingParcent) == false) {
        if (savingParcent < 0) {
            alert("Saving cannot nagative.")
            return;
        }
        else if (savingParcent > 100) {
            alert(`you cant save more 100% `);
            return;
        }
    }
    else {
        alert("Enter saving Value");
        return;
    }

    const saving = income * (savingParcent / 100);



    const totalBalanceElemnt = document.getElementById("balance");
    const totalBalanceString = totalBalanceElemnt.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    if (saving > totalBalanceNumber) {
        alert(`You cant save ${saving}$, Because your balance now ${totalBalanceNumber}$.`)
        return;
    }
    setTextValue("saving-amount", saving);

    const remainingAmount = totalBalanceNumber - saving;

    setTextValue("reamining", remainingAmount);


})
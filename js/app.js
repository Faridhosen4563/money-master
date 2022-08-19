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

    const totalExpenses = food + rent + clothes;

    setTextValue("total-expenses", totalExpenses);

    const income = getValueByInput("total-income");

    const newBalance = income - totalExpenses;
    setTextValue("balance", newBalance);
})

document.getElementById("save-btn").addEventListener('click', function () {
    const income = getValueByInput("total-income");
    const savingParcent = getValueByInput("saving");

    const saving = income * (savingParcent / 100);

    setTextValue("saving-amount", saving);

    const totalBalanceElemnt = document.getElementById("balance");
    const totalBalanceString = totalBalanceElemnt.innerText;
    const totalBalanceNumber = parseFloat(totalBalanceString);

    const remainingAmount = totalBalanceNumber - saving;

    setTextValue("reamining", remainingAmount);


})
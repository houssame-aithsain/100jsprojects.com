const billAmountText = document.getElementById('inputBar1');
const tiPercentageText = document.getElementById('inputBar2');
const totalText = document.getElementById('total');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener("click", function calculate() {
    const billAmount = billAmountText.value;
    const tiPercentage = tiPercentageText.value;

    const tipAmount = billAmount * (tiPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    totalText.innerText = totalAmount;
});

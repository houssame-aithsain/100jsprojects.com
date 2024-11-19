const ageText = document.getElementById('age-input');
const calcButton = document.querySelector('button');
const ageCalculated = document.querySelector('h2');

calcButton.addEventListener('click', function ageCalculate() {
    if (ageText.value === "" || ageText.value == null) {
        alert('Please enter your birthday');
    } else {
        let date = new Date()
        let year = date.getFullYear();

        const age = ageText.value.split('-');
        
        if (age[0] > year) {
            alert('incorrect input :(');
        } else {
            ageCalculated.innerText = `Your age is ${year - age[0]} years old`
        }
    }
});

var oddNumbers;
var evenNumbers;
var amountOfNumbers = 20;
var btn = document.getElementById("btnGenerator");
var oddDiv = document.getElementById("odd");
var evenDiv = document.getElementById("even");
var evenOddSort = function (value, evenMass, oddMass) {
    value % 2 === 0
        ? evenMass.splice(evenMass.length, 0, value)
        : oddMass.splice(oddMass.length, 0, value);
};
var minMax = function (mass) {
    mass.sort(function (a, b) { return a - b; });
};
var randomValueGenerate = function () {
    var currentIteration = 0;
    var currentValue = 0;
    evenNumbers = [];
    oddNumbers = [];
    while (currentIteration < amountOfNumbers) {
        currentValue = Math.floor(Math.random() * 100) + 1;
        evenOddSort(currentValue, evenNumbers, oddNumbers);
        currentIteration++;
    }
};
var handleClickButton = function () {
    randomValueGenerate();
    minMax(oddNumbers);
    minMax(evenNumbers);
    oddDiv.innerHTML = String(oddNumbers);
    evenDiv.innerHTML = String(evenNumbers);
};
btn.onclick = handleClickButton;

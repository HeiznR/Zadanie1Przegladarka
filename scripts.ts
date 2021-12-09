let oddNumbers: number[];
let evenNumbers: number[];
const amountOfNumbers: number = 20;
let btn = document.getElementById("btnGenerator");
let oddDiv = document.getElementById("odd");
let evenDiv = document.getElementById("even");

const evenOddSort = (value: number, evenMass: number[], oddMass: number[]) => {
    value % 2 === 0
        ? evenMass.splice(evenMass.length, 0, value)
        : oddMass.splice(oddMass.length, 0, value);
};

const minMax = (mass: number[]) => {
    mass.sort((a, b) => a - b);
};

const randomValueGenerate = () => {
    let currentIteration: number = 0;
    let currentValue: number = 0;
    evenNumbers = [];
    oddNumbers = [];
    while (currentIteration < amountOfNumbers) {
        currentValue = Math.floor(Math.random() * 100) + 1;
        evenOddSort(currentValue, evenNumbers, oddNumbers);
        currentIteration++;
    }
};

const handleClickButton = () => {
    randomValueGenerate();
    minMax(oddNumbers);
    minMax(evenNumbers);
    oddDiv.innerHTML = String(oddNumbers);
    evenDiv.innerHTML = String(evenNumbers);
};

btn.onclick = handleClickButton;

"use strict";

const inputs = [
  {
    element: document.getElementById("decimalInput"),
    base: 10,
  },
  {
    element: document.getElementById("binaryInput"),
    base: 2,
  },
  {
    element: document.getElementById("octalInput"),
    base: 8,
  },
  {
    element: document.getElementById("hexInput"),
    base: 16,
  },
];

const numberConversion = function (number, base) {
  return number.toString(base);
};

for (let input of inputs) {
  input.element.addEventListener("input", () => {
    const decimalNumber = parseInt(input.element.value, input.base);
    for (let numberInput of inputs) {
      numberInput.element.value = decimalNumber
        ? numberConversion(decimalNumber, numberInput.base)
        : "";
    }
  });
}

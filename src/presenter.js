import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const tercero = document.querySelector("#tercer-num");
const cuarto = document.querySelector("#cuarto-num");
const formMult = document.querySelector("#multiplicar-form");
const divMult = document.querySelector("#resultado-mult");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const tercerNum = Number.parseInt(tercero.value);
  const cuartoNum = Number.parseInt(cuarto.value);

  divMult.innerHTML = "<p>" + multiplicar(tercerNum, cuartoNum) + "</p>";
});
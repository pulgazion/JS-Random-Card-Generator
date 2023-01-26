/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let randomSymbol = generateRandomSymbol();
  document.querySelectorAll(".symbolCard").forEach(symbol => {
    symbol.innerHTML = randomSymbol;
  });

  document.querySelector(".numberCard").innerHTML = generateRandomNumber();
};

let generateRandomSymbol = () => {
  let symbolCard = ["♦️", "♥️", "♠️", "♣️"];
  let indexCard = Math.floor(Math.random() * symbolCard.length);
  let symbol = symbolCard[indexCard];
  if (symbol === "♥️" || symbol === "♦️") {
    symbol = "<span style='color:red'>" + symbol + "</span>";
  }
  return symbol;
};

let generateRandomNumber = () => {
  let numberCard = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numberCard.length);
  return numberCard[indexNumbers];
};

let initialPrice = document.querySelector("#initial-price");
let stocksQuantity = document.querySelector("#stocks-quantity");
let currentPrice = document.querySelector("#current-price");
let btnCalculate = document.querySelector("#btn-calculate");
let outputValue = document.querySelector("#output-value");

btnCalculate.addEventListener("click", calculateHandler);

function calculateHandler() {
  let intP = Number(initialPrice.value);
  let qty = Number(stocksQuantity.value);
  let currP = Number(currentPrice.value);

  calculateProfitAndLoss(intP, qty, currP);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
    showOutput(
      `Hey the loss is Rs.${loss} and percentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is Rs.${profit} and the percentage is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain no gain, no gain no pain");
  }
}

function showOutput(message) {
  outputValue.innerHTML = message;
}

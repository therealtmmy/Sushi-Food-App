let price = document.getElementById("price");

const subBtn = document.getElementById("sub");
const addBtn = document.getElementById("add");

let input = document.getElementById("inputEl");
let inputOne = document.getElementById("inputElOne");
let inputTwo = document.getElementById("inputElTwo");
let inputThree = document.getElementById("inputElThree");

let firstPrice = document.getElementById("priceOne");

const subFirstBtn = document.getElementById("subOne");
const addFirstBtn = document.getElementById("addOne");

let secondPrice = document.getElementById("priceTwo");

const subSecondBtn = document.getElementById("subTwo");
const addSecondBtn = document.getElementById("addTwo");

let thirdPrice = document.getElementById("priceThree");

const subThirdBtn = document.getElementById("subThree");
const addThirdBtn = document.getElementById("addThree");

let totalOutcome = document.getElementById("total");
let conculsion = document.getElementById("order");

let count = 0,
  countOne = 0,
  countTwo = 0,
  priceDetail = 0,
  priceDetailOne = 0,
  priceDetailTwo = 0;

subBtn.addEventListener("click", () => {
  if (count < 1) {
    return (count = 0);
  }
  count = count - 1;
  input.textContent = count;
  priceDetail -= 20;
  price.textContent = priceDetail;
  outPut();
});

addBtn.addEventListener("click", () => {
  count = count + 1;
  input.textContent = count;
  priceDetail += 20;
  price.textContent = priceDetail;
  outPut();
});

subFirstBtn.addEventListener("click", () => {
  if (countOne < 1) {
    return (countOne = 0);
  }
  countOne = countOne - 1;
  inputOne.textContent = countOne;
  priceDetailOne -= 10;
  firstPrice.textContent = priceDetailOne;
  outPut();
});

addFirstBtn.addEventListener("click", () => {
  countOne = countOne + 1;
  inputOne.textContent = countOne;
  priceDetailOne += 10;
  firstPrice.textContent = priceDetailOne;
  outPut();
});

subSecondBtn.addEventListener("click", () => {
  if (countTwo < 1) {
    return (countTwo = 0);
  }
  countTwo = countTwo - 1;
  inputTwo.textContent = countTwo;
  priceDetailTwo -= 25;
  secondPrice.textContent = priceDetailTwo;
  outPut();
});

addSecondBtn.addEventListener("click", () => {
  countTwo = countTwo + 1;
  inputTwo.textContent = countTwo;
  priceDetailTwo += 25;
  secondPrice.textContent = priceDetailTwo;
  outPut();
});

let countThird = 0;
let priceDetailThree = 0;

subThirdBtn.addEventListener("click", () => {
  if (countThird < 1) {
    return (countThird = 0);
  }
  countThird = countThird - 1;
  inputThree.textContent = countThird;
  priceDetailThree -= 25;
  thirdPrice.textContent = priceDetailThree;
  outPut();
});

addThirdBtn.addEventListener("click", () => {
  countThird = countThird + 1;
  inputThree.textContent = countThird;
  priceDetailThree += 25;
  thirdPrice.textContent = priceDetailThree;
  outPut();
});

const outPut = () => {
  let fallBack =
    +price.textContent +
    +firstPrice.textContent +
    +secondPrice.textContent +
    +thirdPrice.textContent;
  totalOutcome.textContent = fallBack;
  // Used the unary operator to return value as integer from strings
};

let conclude = document.getElementById("orderConfirm");

conculsion.addEventListener("click", () => {
  const bounceBack = totalOutcome.textContent;
  if (bounceBack == 0) {
    return conclude;
  }

  conculsion.innerHTML = "<p class='order'>Thank you for your order.</p>";
});

let promoCode = document.getElementById("promo");
let promoBtn = document.getElementById("btn");
let promoT = document.getElementById("promoText");

promoBtn.addEventListener("click", () => {
  const promoInput = promoCode.value;
  if (promoInput == "" || promoInput == undefined) {
    return promoBtn;
  }

  promoT.innerHTML = "<p class='promoText'>Approved. Continue shopping</p>";
  promoBtn += promoT.innerHTML;
  promoCode.value = " ";
});

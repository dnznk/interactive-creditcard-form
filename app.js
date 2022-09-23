const cardName = document.querySelector(".card-name-front");
const cardNumber = document.querySelector(".card-number-front");
const cardExpiryDateM = document.querySelector(".mm");
const cardExpiryDateY = document.querySelector(".yy");
const cardCvc = document.querySelector(".cvc-number-back");
const confirmButton = document.querySelector(".confirm-button");
const continueButton = document.querySelector(".confirmed.continue-button");
const formContainer = document.querySelector(".form");
const containerConfirm = document.querySelector(".confirmed-container");

const no1 = document.getElementById("name-input");
const no2 = document.getElementById("card-number-input");
const no3 = document.getElementById("month-input");
const no4 = document.getElementById("year-input");
const no5 = document.getElementById("cvc-input");

function cardname(name) {
  cardName.innerText = name.value;
}

function cardnumber(name) {
  cardNumber.innerText = name.value;
}

function month(name) {
  cardExpiryDateM.innerText = name.value;
}

function year(name) {
  cardExpiryDateY.innerText = name.value;
}

function cvc(name) {
  cardCvc.innerText = name.value;
}

function confirmedScreen() {
  formContainer.style.display = "none";
  containerConfirm.style.display = "block";
}

function cont() {
  formContainer.style.display = "block";
  containerConfirm.style.display = "none";
  cardName.innerText = "Jane Appleseed";
  cardNumber.innerText = "0000 0000 0000 0000";
  cardExpiryDateM.innerText = "00";
  cardExpiryDateY.innerText = "00";
  cardCvc.innerText = "000";
  no1.value = "";
  no2.value = "";
  no3.value = "";
  no4.value = "";
  no5.value = "";
}

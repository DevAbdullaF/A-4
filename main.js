const loginForm = document.getElementById("login-form");
const loginPage = document.getElementById("login-page");
const homePage = document.getElementById("home-page");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (
    email === "shakibhosen999@gmail.com" &&
    password === "sakib999"
  ) {
    alert("Logged in successfully!");

    loginPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  } else {
    alert("Invalid email or password!");
  }
});



// add moneyy

let balance = 0;

const addMoneyForm = document.getElementById("add-money-form");

document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("home-content").classList.add("hidden");
  document.getElementById("add-money-page").classList.remove("hidden");
});

addMoneyForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const bank = document.getElementById("bank-selector").value;
  const account = document.getElementById("account").value;
  const amount = Number(document.getElementById("amount").value);
  const pin = document.getElementById("pin").value;

  if (bank === "" || account.length < 10 || amount <= 0 || pin !== "1234") {
    alert("Please enter correct information!");
  } else {
    balance = balance + amount;
    document.getElementById("balance").innerText = balance.toFixed(2);

    alert("Money added successfully!");

    addMoneyForm.reset();
    document.getElementById("add-money-page").classList.add("hidden");
    document.getElementById("home-content").classList.remove("hidden");
  }
});

// home
document.getElementById("home-btn").addEventListener("click", function () {
  document.getElementById("add-money-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");
  document.getElementById("home-content").classList.remove("hidden");
});

// shop now er
const shopButtons = document.querySelectorAll(".shop-btn");

shopButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const price = Number(button.dataset.price);

    if (balance < price) {
      alert("You have not enough balance");
    }
  });
});

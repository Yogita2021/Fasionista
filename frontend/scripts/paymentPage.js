const form = document.querySelector("#payment-form");
const nameValue = document.querySelector("#name-value");
const phoneValue = document.querySelector("#phone-value");
const emailValue = document.querySelector("#email-value");
const addressValue = document.querySelector("#address-value");
const paymentOptionValue = document.querySelector("#payment-option-value");
const cardNumberValue = document.querySelector("#card-number-value");
const expiryDateValue = document.querySelector("#expiry-date-value");
const cvvValue = document.querySelector("#cvv-value");
const paymentDetails = document.querySelector("#payment-details");
const paymentSuccessful = document.querySelector("#payment-successful");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;
  const paymentOption = document.querySelector("#payment-option").value;

  nameValue.textContent = name;
  phoneValue.textContent = phone;
  emailValue.textContent = email;
  addressValue.textContent = address;
  paymentOptionValue.textContent = paymentOption;

  if (paymentOption == "debit-card") {
    const cardNumber = document.querySelector("#card-number").value;
    const expiryDate = document.querySelector("#expiry-date").value;
    const cvv = document.querySelector("#cvv").value;

    cardNumberValue.textContent = cardNumber;
    expiryDateValue.textContent = expiryDate;
    cvvValue.textContent = cvv;

    paymentDetails.classList.add("hidden");
    document.querySelector("#card-details").classList.remove("hidden");
  } else {
    paymentDetails.classList.add("hidden");
    document.querySelector("#card-details").classList.add("hidden");
  }

  paymentSuccessful.classList.add("hidden");
  paymentDetails.classList.remove("hidden");

  setTimeout(() => {
    paymentDetails.classList.add("hidden");
    paymentSuccessful.classList.remove("hidden");
  }, 3000);
  setTimeout(() => {
    window.location = "../index.html";
  }, 5000);
});

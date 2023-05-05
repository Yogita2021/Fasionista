// buttons
function loginpage() {
  window.location.href = "../html/login.html";
}
function facebookpage() {
  window.location.href = "https://www.facebook.com/";
}
function googlepage() {
  window.location.href = "https://accounts.google.com/";
}
// registration
const url = "http://localhost:3030";
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    email: form.email.value,
    password: form.password.value,
  };

  fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.msg);
      if (data.msg == "New User registered successfully!!!") {
        window.location.href = "../html/login.html";
        console.log("hi");
      }
    })
    .catch((err) => console.log(err));
});

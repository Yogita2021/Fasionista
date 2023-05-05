// buttons
function registerpage() {
  window.location.href = "../html/register.html";
}
function facebookpage() {
  window.location.href = "https://www.facebook.com/";
}
function googlepage() {
  window.location.href = "https://accounts.google.com/";
}
// login request
const url = "http://localhost:3030";

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {
    email: form.email.value,
    password: form.password.value,
  };
  console.log(user);
  fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(data.msg);
      if (data.msg == "Login successfull!!!") {
        window.location.href = "../index.html";
      }

      localStorage.setItem("token", data.token);
    })
    .catch((err) => console.log(err));
});

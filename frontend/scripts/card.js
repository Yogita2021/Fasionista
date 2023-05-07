let LSData = JSON.parse(localStorage.getItem("product")) || [];
// console.log(LSData)
let pay = document.getElementById("btn");
let Container = document.getElementById("Container");
let total = document.getElementById("cart-total");
let totalcart = document.getElementById("cart-total1");
pay.addEventListener("click", () => {
  location.replace("./paymentPage.html");
});

console.log(LSData);
function DisplayData() {
  Container.innerHTML = "";
  LSData.forEach((element) => {
    let Card = document.createElement("div");
    let Image1 = document.createElement("img");
    let Brand = document.createElement("h4");
    let Price = document.createElement("h4");
    let description = document.createElement("p");
    let AddtoCart = document.createElement("button");
    let increase = document.createElement("button");
    let decrease = document.createElement("button");
    let quantity = document.createElement("span");

    increase.textContent = "+";
    decrease.textContent = "-";
    quantity.textContent = element.quantity;
    Image1.src = element.image;
    Brand.innerText = element.brand;
    description.innerText = element.description;
    Price.innerText = `₹${element.price}`;
    AddtoCart.innerText = "Remove from cart";
    AddtoCart.setAttribute("id", "btn");
    increase.setAttribute = ("id", "inc");

    AddtoCart.addEventListener("click", () => {
      LSData = LSData.filter((ele) => {
        if (ele._id !== element._id) return true;
      });
      total.textContent = +sum;
      totalcart.textContent = +sum;
      localStorage.setItem("product", JSON.stringify(LSData));

      DisplayData();
      console.log(LSData);
    });

    increase.addEventListener("click", () => {
      element = element.quantity++;

      localStorage.setItem("product", JSON.stringify(LSData));
      DisplayData();
    });

    decrease.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
        localStorage.setItem("product", JSON.stringify(LSData));
        DisplayData();
      }
    });

    let sum = 0;

    for (let i = 0; i < LSData.length; i++) {
      sum += LSData[i].price * LSData[i].quantity;
      console.log();
    }

    total.textContent = +sum;
    totalcart.textContent = +sum;

    Card.append(
      Image1,
      Brand,
      description,
      Price,
      increase,
      quantity,
      decrease,
      AddtoCart
    );
    Container.append(Card);
  });
}

DisplayData();

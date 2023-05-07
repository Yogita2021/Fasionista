let Wishlist = JSON.parse(localStorage.getItem("wishlistproduct")) || [];
let Container = document.getElementById("ProductContainer");

function DisplayData() {
  Container.innerHTML = "";
  Wishlist.forEach((element) => {
    let Card = document.createElement("div");
    Card.className = "Card";
    let Image1 = document.createElement("img");
    let Brand = document.createElement("h4");

    let Price = document.createElement("h4");
    let description = document.createElement("p");
    let Delete = document.createElement("button");

    Image1.src = element.image;
    Brand.innerText = element.brand;
    description.innerText = element.description;
    Price.innerText = `₹${element.price}`;
    Delete.innerText = "Delete";

    Delete.textContent = "Delete";

    Delete.addEventListener("click", () => {
      console.log(element, "Price");
      Wishlist = Wishlist.filter((ele) => {
        return ele._id !== element._id;
      });
      localStorage.setItem("wishlistproduct", JSON.stringify(Wishlist));
      DisplayData();
    });

    Card.append(Image1, Brand, description, Price, Delete);
    Container.append(Card);
  });
}
DisplayData();

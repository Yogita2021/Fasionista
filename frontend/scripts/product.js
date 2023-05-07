//////////////range//////////////////////////////////

let range = document.getElementById("volume");
let rangeMin = document.querySelector(".rangeMin");

range.addEventListener("change", function () {
  let filterData = dataArray.filter((el) => {
    if (el.price >= 100 && el.price <= range.value) {
      return true;
    }
  });

  display(filterData);

  rangeMin.innerText = `₹${range.value}`;
});

// search functioality///////////

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchParams = searchForm.search.value;

  let filterData = dataArray.filter((el) => {
    if (el.brand.toUpperCase().includes(searchParams.toUpperCase()) === true) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterData);
  display(filterData);
});
//
let apiProduct = document.getElementById("apiProduct");
let dataArray = [];
let paginationData = [];
let categoryData = [];
let Page = 1;

const url = "http://localhost:3030";

fetch(`${url}/product`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.product);
    dataArray = data.product;
    console.log(dataArray);
    paginationData = data.product;
    display(dataArray);
  });

function display(data) {
  apiProduct.innerHTML = "";
  let arr = [];
  data.forEach((element) => {
    let CardList = getCard(
      element._id,
      element.brand,
      element.price,
      element.description,
      element.image
    );
    arr.push(CardList);
  });

  apiProduct.innerHTML = arr.join("");
}

function getCard(_id, brand, price, description, image) {
  let card = `
     <div class="Card" id=${_id}>
     <img src=${image}>
     <h4>${brand}</h4>
     <p>${description}</p>
     <h4> ₹${price}</h4>
     <div>
     <button class="AddToCart" value=${_id}>Add to Cart</button>
     <button class="AddToWishlist" value=${_id}>Add to Wishlist</button>
     </div>
   

     </div>
    `;
  return card;
}

function getButton(text, id) {
  return `<button class="pagination-btn" data-page-Number=${id}>${text}</button>`;
}
// add to cart functionality////////////////////////////////////////
let logedUser = localStorage.getItem("token") || "";
console.log(logedUser);
let cartarr = JSON.parse(localStorage.getItem(`product`)) || [];
// let cartCount = document.querySelector("#cart-count");
// cartCount.textContent = cartarr.length;

setTimeout(() => {
  let addToCart = document.querySelectorAll(".AddToCart");
  console.log(addToCart);
  addToCart.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      btnClicked(Btn);
    });
  });
}, 2000);

function btnClicked(Btn) {
  addToCartfn(Btn.value);
  console.log(Btn.value);
}

function addToCartfn(Btn) {
  for (let i = 0; i < dataArray.length; i++) {
    if (
      dataArray[i]._id == Btn &&
      checkProduct(dataArray[i]) &&
      checkUserLoging()
    ) {
      cartarr.push({ ...dataArray[i], quantity: 1 });
      localStorage.setItem(`product`, JSON.stringify(cartarr));
      // cartCount.textContent = cartarr.length;
      alert("Product Added To The Cart");
      break;
    }
  }
}

function checkUserLoging() {
  if (logedUser == localStorage.getItem("token")) {
    return true;
  } else {
    alert("First Login on Website");
  }
}

function checkProduct(element) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i]._id === element._id) {
      alert("Product Already Exist In The Cart");
      return false;
    }
  }
  return true;
}
// add to wishlist///////////////////////////////////////////////
let User = localStorage.getItem("token") || "";
let cartarr1 = JSON.parse(localStorage.getItem(`wishlistproduct`)) || [];
// let cartCount = document.querySelector("#cart-count");
// cartCount.textContent = cartarr.length;

setTimeout(() => {
  let AddToWishlist = document.querySelectorAll(".AddToWishlist");
  console.log(AddToWishlist);
  AddToWishlist.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      btnClickedfn(Btn);
    });
  });
}, 2000);

function btnClickedfn(Btn) {
  AddToWishlistfn(Btn.value);
  console.log(Btn.value);
}

function AddToWishlistfn(Btn) {
  for (let i = 0; i < dataArray.length; i++) {
    if (
      dataArray[i]._id == Btn &&
      checkProductfn(dataArray[i]) &&
      checkUserLogingfn()
    ) {
      cartarr1.push({ ...dataArray[i], quantity: 1 });
      localStorage.setItem(`wishlistproduct`, JSON.stringify(cartarr1));
      // cartCount.textContent = cartarr.length;
      alert("Product Added To The Wishlist");
      break;
    }
  }
}

function checkUserLogingfn() {
  if (User == localStorage.getItem("token")) {
    return true;
  } else {
    alert("First Login on Website");
  }
}

function checkProductfn(element) {
  for (let i = 0; i < cartarr1.length; i++) {
    if (cartarr1[i]._id === element._id) {
      alert("Product Already Exist In The Wishlist");
      return false;
    }
  }
  return true;
}

// filter by category

let product = document.querySelector(".titleproduct");

let Tshirts = document.getElementById("Tshirts");

Tshirts.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Tshirts.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = Tshirts.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let LoungeTshirts = document.getElementById("LoungeTshirts");

LoungeTshirts.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == LoungeTshirts.value) {
        return true;
      }
    });
    if (filterData[0] == undefined) {
      apiProduct.innerHTML = `<h2 style="text-align:center;">OOps!! ${LoungeTshirts.value} is not available</h2>`;
    } else {
      display(filterData);
    }
    product.innerText = LoungeTshirts.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});
// filter by brands
let Roadster = document.getElementById("Roadster");

Roadster.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.brand == Roadster.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Roadster.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Friskers = document.getElementById("Friskers");

Friskers.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.brand == Friskers.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Friskers.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let TommyHilfige = document.getElementById("TommyHilfige");

TommyHilfige.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.brand == TommyHilfige.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = TommyHilfige.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Puma = document.getElementById("Puma");

Puma.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.brand == Puma.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Puma.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let HRXbyHrithikRoshan = document.getElementById("HRXbyHrithikRoshan");

HRXbyHrithikRoshan.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.brand == HRXbyHrithikRoshan.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = HRXbyHrithikRoshan.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});
// filter by color

let Black = document.getElementById("Black");

Black.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Black.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});

let Blue = document.getElementById("Blue");

Blue.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Blue.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let White = document.getElementById("White");

White.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == White.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let Orange = document.getElementById("Orange");

Orange.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Orange.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let Green = document.getElementById("Green");

Green.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Green.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let Yellow = document.getElementById("Yellow");

Yellow.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Yellow.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let Red = document.getElementById("Red");

Red.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Red.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});
let Brown = document.getElementById("Brown");

Brown.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.color == Brown.value) {
        return true;
      }
    });
    display(filterData);
  } else {
    display(paginationData);
  }
});

let asc = document.querySelector(".asc");

asc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price > paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});

let desc = document.querySelector(".desc");

desc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price < paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});

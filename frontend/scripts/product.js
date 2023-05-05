//////////////range//////////////////////////////////

let range = document.getElementById("volume");
let rangeMin = document.querySelector(".rangeMin");

range.addEventListener("change", function () {
  let filterData = dataArray.filter((el) => {
    if (el.price >= 15000 && el.price <= range.value) {
      return true;
    }
  });

  display(filterData);

  rangeMin.innerText = `₹${range.value}`;
});
//
let apiProduct = document.getElementById("apiProduct");
let dataArray = [];
let paginationData = [];
let categoryData = [];
let Page = 1;
// let ApiUrl = `https://teleapi.onrender.com/Television`;

fetch(`${ApiUrl}`)
  .then((request) => {
    return request.json();
  })
  .then((data) => {
    dataArray = data;
    paginationData = data;
    display(data);
  });

function display(data) {
  apiProduct.innerHTML = "";
  let arr = [];
  data.forEach((element) => {
    let CardList = getCard(
      element.id,
      element.name,
      element.price,
      element.description,
      element.image
    );
    arr.push(CardList);
  });

  apiProduct.innerHTML = arr.join("");
}

function getCard(id, name, price, description, image) {
  let card = `
     <div class="Card" id=${id}>
     <img src=${image}>
     <h4>${name}</h4>
     <p>${description}</p>
     <h4> ₹${price}</h4>
     <div>
     <button class="AddToCart" value=${id}>Add to Cart</button>
     <button>Add to Wishlist</button>
     </div>
   

     </div>
    `;
  return card;
}

function getButton(text, id) {
  return `<button class="pagination-btn" data-page-Number=${id}>${text}</button>`;
}
// filter by price
let GO = document.querySelector(".GO");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
GO.addEventListener("click", function () {
  if (min && max) {
    let filterData = paginationData.filter((el) => {
      if (el.price >= +min.value && el.price <= +max.value) {
        return true;
      }
    });
    display(filterData);
  }
});
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
      if (el.name == Roadster.value) {
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
      if (el.name == Friskers.value) {
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
      if (el.name == TommyHilfige.value) {
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
      if (el.name == Puma.value) {
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
      if (el.name == HRXbyHrithikRoshan.value) {
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
      if (el.name == Black.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Black.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Blue = document.getElementById("Blue");

Black.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Blue.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Blue.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});
let White = document.getElementById("White");

White.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == White.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = White.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});
let Orange = document.getElementById("Orange");

Orange.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Orange.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Orange.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});
let Green = document.getElementById("Green ");

Green.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Green.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Green.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
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

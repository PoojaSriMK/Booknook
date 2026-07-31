let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function removeItem(i) {
  total -= cart[i].price;
  cart.splice(i, 1);
  updateCart();
}

function updateCart() {
  document.getElementById("count").innerText = cart.length;
  document.getElementById("total").innerText = total;

  let list = document.getElementById("cart");
  list.innerHTML = "";

  cart.forEach((item, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price}
    <button onclick="removeItem(${i})">❌</button>`;
    list.appendChild(li);
  });
}

// 🔍 Search
function searchBooks() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

// 📚 Filter
function filterCategory(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}
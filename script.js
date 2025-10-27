let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

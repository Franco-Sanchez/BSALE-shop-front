import STORE from "../app/store.js";
import CartItem from "../components/CartItem.js";
import Header from "../components/Header.js";

function Cart(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
     <div class="container">
      <header class="header js-header"></header>
      <h2>Cart</h2>
      <div class="cart js-cart"></div>
      <div>
        <p>Total</p>
        <p>$${this.totalPrice()}</p>
      </div>
      <button></button>
     </div>
    `
  }
}

Cart.prototype.render = function() {
  this.parentElement.innerHTML = this;
  const header = new Header('.js-header');
  header.render();
  const products = this.renderCartItems('.js-cart');
  products.forEach(product => product.addEventListeners());
}

Cart.prototype.renderCartItems = function(parentSelector) {
  const container = this.parentElement.querySelector(parentSelector);
  const products = STORE.cart.map(product => new CartItem('.js-cart', product));
  container.innerHTML = products.join('');
  return products;
}

Cart.prototype.totalPrice = function() {
  return STORE.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
}

export default Cart;
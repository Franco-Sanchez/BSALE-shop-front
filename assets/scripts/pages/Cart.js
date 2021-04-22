import STORE from "../app/store.js";
import CartItem from "../components/CartItem.js";
import Header from "../components/Header.js";
import Home from "./Home.js";
import OrderSuccess from "./OrderSuccess.js";

function Cart(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
      <div class="container">
        <header class="header js-header"></header>
        <section class="cart">
          <h2 class="cart__title">Cart</h2>
          <div class="cart__list js-cart-list"></div>
          ${this.existProducts()}
        </section>
      </div>
    `;
  };
}

Cart.prototype.render = function () {
  this.parentElement.innerHTML = this;
  const header = new Header(".js-header");
  header.render();
  const products = this.renderCartItems(".js-cart-list");
  products.forEach((product) => product.addEventListeners());
  this.goToOrderSuccess();
  this.goToHome();
};

Cart.prototype.renderCartItems = function (parentSelector) {
  const container = this.parentElement.querySelector(parentSelector);
  const products = STORE.cart.map(
    (product) => new CartItem(".js-cart-list", product)
  );
  container.innerHTML = products.join("");
  return products;
};

Cart.prototype.totalPrice = function () {
  return STORE.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
};

Cart.prototype.existProducts = function () {
  return STORE.cart.length > 0
    ? `
      <div class="cart__payment-process">
        <p class="cart__total">Total:</p>
        <p class="cart__total-price">$${this.totalPrice()}</p>
        <button class="container__button-standard container__button-standard--buy js-button-buy">Comprar</button>
        <button class="container__button-standard container__button-standard--home js-button-home">Inicio</button>
      </div>
    `
    : `
      <div class="cart__without-products">
        <i class="fas fa-shopping-cart"></i>
        <h3 class="container__title">Ningún producto seleccionado</h3>
      </div>
  `;
};

Cart.prototype.goToOrderSuccess = function () {
  const button = this.parentElement.querySelector(".js-button-buy");
  if (button) {
    button.addEventListener("click", () => {
      STORE.cart = [];
      localStorage.setItem("cart", JSON.stringify(STORE.cart));
      const orderSuccess = new OrderSuccess(".js-app");
      orderSuccess.render();
    });
  }
};

Cart.prototype.goToHome = function () {
  const button = this.parentElement.querySelector(".js-button-home");
  if (button) {
    button.addEventListener("click", () => {
      const home = new Home(".js-app", "all");
      home.render();
    });
  }
};

export default Cart;

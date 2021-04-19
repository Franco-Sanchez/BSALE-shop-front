import Home from "../pages/Home.js";
import Search from "./Search.js";
import STORE from '../app/store.js';
import Cart from "../pages/Cart.js";

function Header(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <h1 class="header__title js-header-title">Bsale Test</h1>
      <form class="form js-form"></form>
      <button type="button" class="header__cart-icon js-cart-icon">
        <div class="header__cart-total">${STORE.cart.length}</div>
        <i class="fas fa-shopping-cart"></i>
      </button>
    `
  }
}

Header.prototype.render = function () {
  this.parentElement.innerHTML = this;
  const search = new Search('.js-form');
  search.render();
  this.returnHome();
  this.goToCart();
}

Header.prototype.returnHome = function() {
  const title = this.parentElement.querySelector('.js-header-title')
  title.addEventListener('click', () => {
    const home = new Home('.js-app', 'all');
    STORE.searchProducts = null;
    home.render();
  })
}

Header.prototype.goToCart = function() {
  const button = this.parentElement.querySelector('.js-cart-icon');
  button.addEventListener('click', () => {
    const cart = new Cart('.js-app');
    cart.render();
  })
}

export default Header;
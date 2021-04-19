import Home from "../pages/Home.js";
import Search from "./Search.js";
import STORE from '../app/store.js';

function Header(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <h1 class="header__title js-header-title">Bsale Test</h1>
      <form class="form js-form"></form>
      <button type="button" class="header__cart-icon">
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
}

Header.prototype.returnHome = function() {
  const title = this.parentElement.querySelector('.js-header-title')
  title.addEventListener('click', () => {
    const home = new Home('.js-app', 'all');
    STORE.searchProducts = null;
    home.render();
  })
}

export default Header;
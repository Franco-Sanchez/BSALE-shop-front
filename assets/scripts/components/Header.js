import Search from "./Search.js";

function Header(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <h1 class="header__title">Bsale Test</h1>
      <form class="form js-form"></form>
      <button type="button" class="header__cart-icon">
        <i class="fas fa-shopping-cart"></i>
      </button>
    `
  }
}

Header.prototype.render = function () {
  this.parentElement.innerHTML = this;
  const search = new Search('.js-form');
  search.render();
}

export default Header;
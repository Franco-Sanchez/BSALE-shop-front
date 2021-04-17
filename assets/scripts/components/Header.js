import Search from "./Search.js";

function Header() {
  this.search = new Search();
  this.toString = function() {
    return `
      <header class="header">
        <h1 class="header__title">Bsale Test</h1>
        ${this.search.render()}
        <button type="button" class="header__cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </header>
    `
  }
}

Header.prototype.render = function() { return this; } 

export default Header;
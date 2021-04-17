import Search from "./Search.js";

function Header() {
  this.search = new Search();
  this.toString = function() {
    return `
      ${this.search.render()}
    `
  }
}

Header.prototype.render = function () { return this; } 

export default Header;
function Header() {
  this.toString = function() {
    return ``
  }
}

Header.prototype.render = function () { return this; } 

export default Header;
function Cart(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `

    `
  }
}

Cart.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default Cart;
function OrderSuccess(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      
    `
  }
}

OrderSuccess.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default OrderSuccess;
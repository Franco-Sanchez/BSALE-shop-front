import Header from "../components/Header.js";

function OrderSuccess(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <div class="container">
        <header class="header js-header"></header>
        OrderSuccess
      </div>
    `
  }
}

OrderSuccess.prototype.render = function() {
  this.parentElement.innerHTML = this;
  const header = new Header('.js-header');
  header.render();
}

export default OrderSuccess;
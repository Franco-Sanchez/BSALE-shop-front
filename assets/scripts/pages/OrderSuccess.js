import Header from "../components/Header.js";
import Home from "./Home.js";

function OrderSuccess(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function () {
    return `
      <div class="container">
        <header class="header js-header"></header>
        <section class="order-success">
          <i class="far fa-check-circle"></i>
          <h4>¡La compra se realizó con éxito!</h4>
          <button class="container__button-standard container__button-standard--home js-button-home">Inicio</button>
        </section>
      </div>
    `;
  };
}

OrderSuccess.prototype.render = function () {
  this.parentElement.innerHTML = this;
  const header = new Header(".js-header");
  header.render();
  this.goToHome();
};

OrderSuccess.prototype.goToHome = function() {
  const button = this.parentElement.querySelector('.js-button-home');
  button.addEventListener('click', () => {
    const home = new Home('.js-app', 'all');
    home.render();
  })
}

export default OrderSuccess;

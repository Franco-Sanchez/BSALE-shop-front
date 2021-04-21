import STORE from "../app/store.js";
import Cart from "../pages/Cart.js";

function CartItem(parentSelector, item) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.item = item;
  this.toString = function () {
    return `
      <article class="cart__item">
        <img src=${this.item.url_image} />
        <div>
          <h5>${this.item.name}</h5>
          <p>${this.item.category}</p>
          <p>$${this.item.totalPrice}</p>
        </div>
        <div>
          <button class="js-delete-${this.item.id}">
            <i class="fas fa-minus"></i>
          </button>
          <p>${this.item.quantity}</p>
          <button class="js-add-${this.item.id}">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </article>
    `;
  };
}

CartItem.prototype.addEventListeners = function () {
  this.minimunOneProduct();
  this.addOneProduct();
  this.removeOneProduct();
};

CartItem.prototype.minimunOneProduct = function() {
  if(this.item.quantity < 1) {
    STORE.cart = STORE.cart.filter(product => product.id !== this.item.id);
    localStorage.setItem('cart', JSON.stringify(STORE.cart));
    const cart = new Cart('.js-app');
    cart.render();
  }
}

CartItem.prototype.addOneProduct = function () {
  const button = this.parentElement.querySelector(`.js-add-${this.item.id}`);
  button.addEventListener("click", () => this.updatedCart('add'));
};

CartItem.prototype.removeOneProduct = function () {
  const button = this.parentElement.querySelector(`.js-delete-${this.item.id}`);
  button.addEventListener("click", () => this.updatedCart('delete'));

};

CartItem.prototype.updatedCart = function (action) {
  const newQuantity =
    action === "add"
      ? this.item.quantity + 1
      : action === "delete"
      ? this.item.quantity - 1
      : null;
  const updatedProduct = { ...this.item, quantity: newQuantity, totalPrice: this.item.price * newQuantity };
  STORE.cart = STORE.cart.map((product) => {
    if (product.id === updatedProduct.id) {
      return updatedProduct;
    }
    return product;
  });
  localStorage.setItem("cart", JSON.stringify(STORE.cart));
  const cart = new Cart(".js-app");
  cart.render();
};

export default CartItem;

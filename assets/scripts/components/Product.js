import STORE from "../app/store.js";
import Home from "../pages/Home.js";

function Product(parentSelector, category, item) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.category = category;
  this.item = item;
  this.toString = function () {
    return `
      <article class="products__item js-product-item-${this.item.id}">
        <div class="products__item__data">
          <div class="products__item__img-box">
            <img class="products__item__img" src=${this.item.url_image} alt=${this.item.name} />
          </div>
          <h3 class="products__item__name">${this.item.name}</h3>
        </div>
        <div class="products__item__cart">
          <h6 class="products__item__price">$${this.item.price}</h6>
          <button class="products__item__cart-icon js-button-product-${this.item.id}">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </article>
    `;
  };
}

Product.prototype.addEventListeners = function () {
  this.addProductToCart();
  this.isInTheCart();
};

Product.prototype.addProductToCart = function () {
  const button = this.parentElement.querySelector(
    `.js-button-product-${this.item.id}`
  );
  button.addEventListener("click", () => {
    console.log(this.item);
    const productsCart = [
      {
        ...this.item,
        quantity: 1,
        totalPrice: this.item.price * 1,
      },
      ...STORE.cart,
    ];
    // Validate that if a product is in the cart it can not be added again
    const productUniques = productsCart.reduce((acc, curr) => {
      if (!acc[curr.id]) acc[curr.id] = curr;
      return acc;
    }, {});

    STORE.cart = [...Object.values(productUniques)];
    localStorage.setItem("cart", JSON.stringify(STORE.cart));
    const home = new Home(".js-app", this.category);
    home.render();
  });
};

Product.prototype.isInTheCart = function () {
  const button = this.parentElement.querySelector(
    `.js-button-product-${this.item.id}`
  );
  !!STORE.cart.find((product) => product.id === this.item.id)
    ? (button.disabled = true)
    : (button.disabled = false);
};

export default Product;

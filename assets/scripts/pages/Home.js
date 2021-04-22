import STORE from "../app/store.js";
import Category from "../components/Category.js";
import Header from "../components/Header.js";
import Product from "../components/Product.js";

function Home(parentSelector, category = null) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.category = category;
  this.toString = function () {
    return `
      <div class="container">
        <header class="header js-header"></header>
        <section class="container__main-section">
          <div class="categories js-categories"></div>
          <div class="container__status-box">
            ${this.validateLengthSearch()}
            ${
              STORE.loading
                ? `<div class="container__loading"><i class="fas fa-spinner fa-pulse"></i></div>`
                : ""
            }
          </div>
        </section>
      </div>
    `;
  };
}

Home.prototype.render = function () {
  this.parentElement.innerHTML = this;
  const header = new Header(".js-header");
  header.render();
  const categories = this.renderCategories(".js-categories");
  categories.forEach((category) => category.addEventListeners());
  const products = this.renderProducts(".js-products");
  products && products.forEach((product) => product.addEventListeners());
  
};

Home.prototype.renderCategories = function (parentSelector) {
  const container = this.parentElement.querySelector(parentSelector);
  const categories = STORE.categories.map(
    (category, index) => new Category(".js-categories", category, index)
  );
  container.innerHTML = categories.join("");
  return categories;
};

Home.prototype.renderProducts = function (parentSelector) {
  const container = this.parentElement.querySelector(parentSelector);
  if(container) {
    const filterProducts = this.filterProducts();
    const products = filterProducts.map((product) => new Product('.js-products', this.category, product));
    container.innerHTML = products.join("");
    return products;
  }
};

Home.prototype.filterProducts = function () {
  return this.category === "all"
    ? STORE.products
    : STORE.searchProducts && STORE.searchProducts.length > 0
    ? STORE.searchProducts
    : STORE.products.filter((product) => product.category === this.category);
};

Home.prototype.renderTitle = function () {
  const general = "Todos nuestros productos";
  const specific = `Sección ${this.category}`;
  const lengthSearch = STORE.searchProducts && STORE.searchProducts.length;
  const searchTitle =
    lengthSearch > 1
      ? `Hay ${lengthSearch} productos encontrados`
      : `Hay ${lengthSearch} producto encontrado`;
  return `
    <h3 class="container__title">
      ${
        this.category === "all" && !STORE.loading
          ? general
          : lengthSearch > 0
          ? searchTitle
          : STORE.loading
          ? ""
          : specific
      }
    </h3>
  `;
};

Home.prototype.validateLengthSearch = function () {
  if (
    Array.isArray(STORE.searchProducts) &&
    STORE.searchProducts.length === 0 &&
    !STORE.loading
  ) {
    return `
      <div class="container__not-found">
        <i class="fas fa-search"></i>
        <h3 class="container__title">No se encontró el producto</h3>
      </div>
    `;
  } else {
    return `
      ${this.renderTitle()}
      <div class="products js-products"></div>
    `;
  }
};

export default Home;

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
          ${this.renderTitle()}
          <div class="products js-products"></div>
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
  this.renderProducts(".js-products");
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
  const filterProducts = this.filterProducts();
  const products = filterProducts.map((product) => new Product(product));
  container.innerHTML = products.join("");
  return filterProducts;
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
    <h3 class="container__main-section__title">
      ${
        this.category === "all"
          ? general
          : lengthSearch > 0
          ? searchTitle
          : specific
      }
    </h3>
  `;
};

export default Home;

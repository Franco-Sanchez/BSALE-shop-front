import STORE from "../app/store.js";
import Category from "../components/Category.js";
import Header from "../components/Header.js";
import Product from "../components/Product.js";

function Home(parentSelector, category = "all") {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.category = category;
  this.header = new Header();
  this.toString = function () {
    return `
      <div class="container">
        ${this.header.render()}
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
  const categories = this.renderCategories(".js-categories");
  categories.forEach((category) => category.addEventListeners());
  const products = this.renderProducts(".js-products");
  products.forEach((product) => product.addEventListeners());
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
  const filterProducts =
    this.category === "all"
      ? STORE.products
      : STORE.products.filter((product) => product.category === this.category);
  const products = filterProducts.map(product => new Product(product));
  container.innerHTML = products.join("");
  return filterProducts;
};

Home.prototype.renderTitle = function() {
  const general = 'Todos nuestros productos';
  const specific = `Sección ${this.category}`;

  return `<h3 class="container__main-section__title">${this.category === 'all' ? general : specific}</h3>`
}

export default Home;

import CategoriesList from "../components/containers/CategoriesList.js";
import ProductsList from "../components/containers/ProductsList.js";
import Header from "../components/Header.js";

function Home(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.header = new Header();
  this.categoriesList = new CategoriesList();
  this.productsList = new ProductsList();
  this.toString = function() {
    return `
      <div class="container">
        ${this.header.render()}
        <section class="container__main-section">
          ${this.categoriesList.render()}
          ${this.productsList.render()}
        </section>
      </div>
    `
  }
}

Home.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default Home;
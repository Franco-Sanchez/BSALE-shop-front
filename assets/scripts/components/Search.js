import STORE from "../app/store.js";
import ProductServices from "../services/product_services.js";
import Home from '../pages/Home.js';
import ErrorPage from "../pages/ErrorPage.js";

function Search(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <input 
        class="form__input"
        name="query"
        type="text"
        placeholder="Ingrese el nombre de su producto preferido" />
      <button type="submit" class="form__button">
        <i class="fas fa-search"></i>
      </button>
    `
  }
}

Search.prototype.render = function() { 
  this.parentElement.innerHTML = this;
  this.searchForm();
}

Search.prototype.searchForm = function() {
  const form = this.parentElement;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { query } = e.target
    if(query.value.split(' ').join('')) { // validacion para que no busque si solo hay espacios en blanco
      try {
        const home = new Home('.js-app');
        const products = new ProductServices();
        STORE.loading = true;
        home.render();
        const data = await products.search(query.value);
        STORE.searchProducts = data;
        STORE.loading = false;
        home.render();
      } catch {
        const error = new ErrorPage('.js-app');
        error.render();
      }
    }
  })
}

export default Search;
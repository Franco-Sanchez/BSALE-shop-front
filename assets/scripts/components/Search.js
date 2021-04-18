import STORE from "../app/store.js";
import ProductServices from "../services/product_services.js";
import Home from '../pages/Home.js';

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
    const products = new ProductServices();
    const data = await products.search(query.value);
    STORE.searchProducts = data;
    const home = new Home('.js-app');
    home.render();
  })
}

export default Search;
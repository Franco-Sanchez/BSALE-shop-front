import apiFetch from "./api_fetch.js";
import BASE_URL from '../app/config.js';

function ProductServices() {
  if(!ProductServices.instance) {
    ProductServices.instance = this
  }
  return ProductServices.instance
}

ProductServices.prototype.list = () => apiFetch(`${BASE_URL}/products`);

ProductServices.prototype.search = (query) => apiFetch(`${BASE_URL}/products?name=${query}`);

export default ProductServices;
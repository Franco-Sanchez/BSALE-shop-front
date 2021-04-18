import STORE from "../../app/store.js";
import Product from '../Product.js';

function ProductsList() {
  this.toString = function() {
    return `
      <div class="products">
        ${STORE.products.map(product => {
          const productItem = new Product(product)
          return productItem.render();
        }).join('')}
      </div>
    `
  }
}

ProductsList.prototype.render = function() { return this; }

export default ProductsList;
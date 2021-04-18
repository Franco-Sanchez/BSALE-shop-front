function Product(item) {
  this.toString = function() {
    return `
      <article class="products__item">
        
      </article>
    `
  }
}
 Product.prototype.render = function() { return this; }

export default Product;
function Product(item) {
  this.toString = function() {
    return `
      <article class="products__item js-product-item-${item.id}">
        <div class="products__item__data">
          <div class="products__item__img-box">
            <img class="products__item__img" src=${item.url_image} alt=${item.name} />
          </div>
          <h3 class="products__item__name">${item.name}</h3>
        </div>
        <div class="products__item__cart">
          <h6 class="products__item__price">$${item.price}</h6>
          <button class="products__item__cart-icon">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </article>
    `
  }
}

Product.prototype.addEventListeners = function() {
  //
}

export default Product;
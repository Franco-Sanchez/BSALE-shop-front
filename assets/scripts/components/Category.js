function Category(item) {
  this.toString = function() {
    return `
      <button class="categories__item" type="button">
        ${item}
      </button>
    `
  }
}

Category.prototype.render = function() { return this; }

export default Category;
import Home from "../pages/Home.js";

function Category(parentSelector, item, index) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.indexItem = index
  this.item = item
  this.toString = function() {
    return `
      <button class="categories__item js-category-item-${this.indexItem}" type="button" value=${item}>
        ${item}
      </button>
    `
  }
}

Category.prototype.addEventListeners = function() {
  this.selectCategory();
}

Category.prototype.selectCategory = function() {
  const button = this.parentElement.querySelector(`.js-category-item-${this.indexItem}`);
  button.addEventListener('click', () => {
    const home = new Home('.js-app', button.value);
    home.render();
  })
}

export default Category;
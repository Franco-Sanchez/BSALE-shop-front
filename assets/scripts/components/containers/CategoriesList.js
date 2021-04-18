import STORE from '../../app/store.js';
import Category from '../Category.js';

function CategoriesList() {
  this.toString = function() {
    return `
      <div class="categories js-categories">
        ${STORE.categories.map((category, index) => {
          const categoryElement = new Category('.js-categories', category, index)
          return categoryElement.render();
        }).join('')}
      </div>    
    `
  }
}

CategoriesList.prototype.render = function() { return this; }

export default CategoriesList;
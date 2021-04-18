import STORE from '../../app/store.js';
import Category from '../Category.js';

function CategoriesList() {
  this.toString = function() {
    return `
      <div class="categories">
        ${STORE.categories.map(category => {
          const categoryElement = new Category(category)
          return categoryElement.render();
        }).join('')}
      </div>    
    `
  }
}

CategoriesList.prototype.render = function() { return this; }

export default CategoriesList;
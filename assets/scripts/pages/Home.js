import Card from "../components/Card.js";
import CategoriesList from "../components/CategoriesList.js";
import Header from "../components/Header.js";

function Home(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.header = new Header();
  this.categoriesList = new CategoriesList();
  this.card = new Card();
  this.toString = function() {
    return `
      ${this.header.render()}
      ${this.categoriesList.render()}
      ${this.card.render()}
    `
  }
}

Home.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default Home;
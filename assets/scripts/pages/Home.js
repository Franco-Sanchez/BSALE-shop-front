import Header from "../components/Header.js";

function Home(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector)
  this.header = new Header(); 
  this.toString = function() {
    return `
      ${this.header.render()}
    `
  }
}

Home.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default Home;
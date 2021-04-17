function ErrorPage(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `

    `
  }
}

ErrorPage.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default ErrorPage;
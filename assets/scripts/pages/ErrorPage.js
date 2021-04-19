function ErrorPage(parentSelector) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.toString = function() {
    return `
      <div class="container__error-box">
        <img src="/assets/images/error.png" />
        <h2>An error ocurred</h2>
      </div>
    `
  }
}

ErrorPage.prototype.render = function() {
  this.parentElement.innerHTML = this;
}

export default ErrorPage;
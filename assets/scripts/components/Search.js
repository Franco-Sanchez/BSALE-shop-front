function Search() {
  this.toString = function() {
    return `
      <form class="form">
        <input class="form__input" type="text" placeholder="Ingrese el nombre de su producto preferido" />
        <button type="submit" class="form__button">
          <i class="fas fa-search"></i>
        </button> 
      </form>
    `
  }
}

Search.prototype.render = function() { return this; }

export default Search;
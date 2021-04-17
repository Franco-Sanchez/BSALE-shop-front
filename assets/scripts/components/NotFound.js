function NotFound() {
  this.toString = function() {
    return `
      
    `
  }
}

NotFound.prototype.render = function() { return this; }

export default NotFound;
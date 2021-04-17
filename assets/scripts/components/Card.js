function Card() {
  this.toString = function() {
    return `

    `
  }
}

Card.prototype.render = function() { return this; }

export default Card;
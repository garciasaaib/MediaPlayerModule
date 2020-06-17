function Hero (name) {
  this.name = name
}

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`)
}

const zelda = new Hero("Zelda")
zelda.saludar()

const link = new Hero("Link")
link.saludar()

console.log('zelda.hasOwnProperty("saludar"): ' + zelda.hasOwnProperty("saludar"))
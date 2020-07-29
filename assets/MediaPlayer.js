//en si esto es una clase
function MediaPlayer(config) {
  //media es la variable direccionadora al elemento ;)
  this.media = config.element
  //plugins obtenidos desde donde se crea el objeto
  this.plugins = config.plugins || []

  //funcion inicializar los plugins
  this._initPlugins()
}


//este metodo inicializara todos los plugiins para que 
//funcionen como queremos
MediaPlayer.prototype._initPlugins = function() {
  
  //con esto el player que se le esta enviando al plugin es limitado, no tiene todo
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    //propiedades virtual que le damos 
    get muted() {
      return this.media.muted
    },
    set muted(value) {
      this.media.muted = value
    }
  }

  //en esta iteracion lo que hacemos es ir uno por uno todos los plugins y correrlos
  //console.log('inicializando plugins')
  this.plugins.forEach(plugin => {
    plugin.run(player)
  })
}



//y aqui le estamos agregando un metodo a la clase
MediaPlayer.prototype.play = function() {
  this.media.play()
}
//agregamos metodo pause
MediaPlayer.prototype.pause = function() {
  this.media.pause()
}
//agregamos metodo que lee el estado y lo cambia dependiendo
MediaPlayer.prototype.togglePlay = function() {
  this.media.paused ? this.play() : this.pause()
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}
MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}
MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute()
}

export default MediaPlayer
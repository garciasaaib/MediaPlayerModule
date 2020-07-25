function MediaPlayer (config) { 
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins() //los metodos pueden ser inicializados aqui mediante this
}

MediaPlayer.prototype._initPlugins = function() { //este es el contenido del método _initPlugins
  this.plugins.forEach(plugin => { //itera por cada plugin
    plugin.run(this) //y lo manda a hacer la funcion llamada run, que podria llamarse de otra manera
    //y para que pueda usarse como queremos le mandamos toda la instancia con this
  });
}

MediaPlayer.prototype.togglePlay = function() {
  this.media.paused ? this.media.play() : this.media.pause()
}
MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = !this.media.muted
}

export default MediaPlayer;
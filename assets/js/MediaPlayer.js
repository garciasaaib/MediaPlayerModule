function MediaPlayer (config) { 
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins() //los metodos pueden ser inicializados aqui mediante this
}

MediaPlayer.prototype._initPlugins = function() { //este es el contenido del método _initPlugins


  //no queremos que el plugin tenga todo el objeto this, puede ser peligroso 
  const player = { // creamos un objeto que contiene todo lo que queremos enviar

    media: this.media, // el elemento video referenciado
    
    //elementos de accion, funciones
    play: () => this.media.play(), 
    pause: () => this.media.pause(), 
    
    //getters son propiedades virtuales de lectura
    get muted() { // enviamos el estado del media.muted como una funcion
      return this.media.muted
    },

    //setters son propiedades virtuales de signacion
    set muted(value) { // creamos un metodo que cambie el estado del muted
      this.media.muted = value
    }
  }

  this.plugins.forEach(plugin => { //itera por cada plugin
    plugin.run(player) //y lo manda a hacer la funcion llamada run, que podria llamarse de otra manera
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
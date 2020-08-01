class MediaPlayer {
  media: HTMLMediaElement // se sabe con el console.log
  plugins: Array<any>

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this.initPlugins() //los metodos pueden ser inicializados aqui mediante this
  }
  private initPlugins() {
    //no queremos que el plugin tenga todo el objeto this, puede ser peligroso 
    
    this.plugins.forEach(plugin => {
      plugin.run(this) //y lo manda a hacer la funcion llamada run, que podria llamarse de otra manera

      //y para que pueda usarse como queremos le mandamos toda la instancia con this
    })
  }
  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }
  togglePlay() {
    this.media.paused ? this.play() : this.pause()
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  toggleMute() {
    this.media.muted ? this.unmute() : this.mute()
  }
}
export default MediaPlayer;
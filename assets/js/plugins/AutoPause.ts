import MediaPlayer from '../MediaPlayer.js'
class AutoPause {
  private threshold: number
  player: MediaPlayer


  constructor(){
    //al ser threshole un valor asignado no hay problema con this
    this.threshold = 0.25 
    
    /*al ser handler una funcion que maneja this dentro de ella, 
    ese this debe ser especificado, 
    de no hacerlo se toma el this del objeto contenedor 
    que es el IntersectionObserver */
    this.handlerObserver = this.handlerObserver.bind(this)
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  run(player) {
    this.player = player
    const observer = new IntersectionObserver(this.handlerObserver, {
      threshold: this.threshold
    })

    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.handleVisibility)
  }
  private handlerObserver(entries: IntersectionObserverEntry[]) {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold
    isVisible ? this.player.play() : this.player.pause()
  }

  private handleVisibility() {
    const isVisible: boolean = document.visibilityState === 'visible'
    isVisible ? this.player.play() : this.player.pause()
  }
}

export default AutoPause
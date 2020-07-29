class AutoPause {
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

  handlerObserver(entries) {
    const entry = entries[0]
    entry.isIntersecting ? this.player.play() : this.player.pause()
  }

  handleVisibility(){
    const isVisible = document.visibilityState === 'visible'
    isVisible ? this.player.play() : this.player.pause()
  }
}

export default AutoPause
//las clases son en si prototipos pero de una manera mas organizada a como son usualmente las clases
class AutoPause {
  constructor() {
    //porcentaje para que se vea le video
    this.threshold = 0.25

    //como esto se llama dentro de observer ese es su this, pero aqui declaramos que queremos que su this llame a este this global que es la clase AutoPause
    this.handleIntersection = this.handleIntersection.bind(this)
    
    //iguamlemte como el metodo handleVisibilityChange viene desde document necesitamos decirle que lo queremos desde AutoPause
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)

  }

  //este metodo es el primero que corre el asignador de plugins
  run(player){
    //obtenemos los metodos que nos mandan
    this.player = player
    /*creamos un observer que recive dos parametros, 
    el primero es una funcion que se encarga de todo lo que se hara cuando ocurra el evento
    el segundo es la conficuracion de los parametros de los eventos del observer, cosas como a cuanta distancia hacemos el evento y asi
    */
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold })
    
    //entonces ponemos al observer a observar
    //lo que va a observar es el media del player

    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  
  handleIntersection(entries) {
    //El observer puede tener varias entradas pero en este caso solo tiene una que es el media
    const entry = entries[0]
    //vemos si esta dentro del ratio
    const isVisible = entry.intersectionRatio >= this.threshold
    //si no lo esta mandamos un metodo u otro
    if(isVisible) {
      this.player.play()
    }else {
      this.player.pause()
    } 
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible'
    if(isVisible) {
      this.player.play()
    }else {
      this.player.pause()
    }   
  }
}


export default AutoPause
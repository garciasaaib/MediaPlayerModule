//este documento implementa los ads en el MediaPlayer para poder utilizar sus metodos play y pause
import MediaPlayer from '../../MediaPlayer'
import Ads, {Ad} from './Ads'

//este es un plugin por lo que se agrega los metodos correspondientes
class AdsPlugin {
  private ads: Ads //lista de ads y sus metodos
  private player: MediaPlayer //metodos play y pause del media
  private media: HTMLMediaElement //se ejecuta sobre el 
  private currentAd: Ad
  private adsContainer: HTMLElement //contenedor del ad
  

  constructor() {
    this.ads = Ads.getInstance()
    this.adsContainer = document.createElement('div')
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
  }

  //inicializador de plugins
  run(player: MediaPlayer) {
    this.player = player
    //el player tiene un container, tomamos adsContainer y lo metemos en el container de player
    this.player.container.appendChild(this.adsContainer)
    this.media = this.player.media
    this.media.addEventListener('timeupdate', this.handleTimeUpdate)
  }

  //logica de cuando inicia el ad a correr
  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime) //lee el tiempo del video
    if(currentTime % 30 === 0) { //cada 30% de video corre renderAd
      this.renderAd()
    }
  }

  private renderAd() {
    if (this.currentAd) {
      return;
    }
    const ad = this.ads.getAd() //obtiene un ad del array y lo desecha
    this.currentAd = ad
    console.log(this.currentAd)
    this.adsContainer.innerHTML = `
      <div class="ads">
        <a class="ads__link" target="_blank" href="${this.currentAd.url}">
          <img class="ads__img" src="${this.currentAd.imageUrl}">
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>
    `

    /*setTimeout(() => {
      this.currentAd = null
      this.adsContainer.innerHTML = ''
    },10000)*/
  }
}

export default AdsPlugin 
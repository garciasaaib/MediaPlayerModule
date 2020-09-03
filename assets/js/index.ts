import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'
const video = document.querySelector('video')
const togglePlayBtn: HTMLElement = document.querySelector('.toggle-play')
const toggleMuteBtn: HTMLElement = document.querySelector('.toggle-mute')


const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay(), new AutoPause(), new Ads()] 
})
togglePlayBtn.onclick = () => player.togglePlay()
toggleMuteBtn.onclick = () => player.toggleMute()


// verificar si existe serviceWorker en el navegador
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => {
      console.log("Service Worker Registered")
    })
    .catch(error => { // registrar el serviceWorker 
      console.log(error.message) // manejar el error
    })
}
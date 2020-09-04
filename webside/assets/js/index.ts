import MediaPlayer from 'micromediaplayer/lib/MediaPlayer'
import AutoPlay from 'micromediaplayer/lib/plugins/AutoPlay'
import AutoPause from 'micromediaplayer/lib/plugins/AutoPause'
import Ads from 'micromediaplayer/lib/plugins/Ads'
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
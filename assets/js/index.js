import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
const video = document.querySelector('video')
const togglePlayBtn = document.querySelector('.toggle-play')
const toggleMuteBtn = document.querySelector('.toggle-mute')


const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay(), new AutoPause()] 
})
togglePlayBtn.onclick = () => player.togglePlay()
toggleMuteBtn.onclick = () => player.toggleMute()


// verificar si existe serviceWorker en el navegador
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => {
      console.log("Service Worker Registered"), registration
    })
    .catch(error => { // registrar el serviceWorker 
      console.log(error.message) // manejar el error
    })
}
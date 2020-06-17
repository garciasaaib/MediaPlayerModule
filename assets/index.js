import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'


const video = document.querySelector('video')
const player = new MediaPlayer({ 
  element: video, 
  plugins: [new AutoPlay()] 
})




//aqui crea un objeto tipo MediaPlayer y su el es video 
const playButton = document.querySelector('#play')
playButton.onclick = () => player.togglePlay()

const muteButton = document.querySelector('#mute')
muteButton.onclick = () => player.toggleMute()

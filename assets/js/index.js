import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector('video')
const togglePlayBtn = document.querySelector('.toggle-play')
const toggleMuteBtn = document.querySelector('.toggle-mute')


const player = new MediaPlayer({ el:video, plugins:[new AutoPlay()] })
togglePlayBtn.onclick = () => player.togglePlay()
toggleMuteBtn.onclick = () => player.toggleMute()

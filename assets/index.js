import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'


const video = document.querySelector('video')
const player = new MediaPlayer({ 
  element: video, 
  plugins: [new AutoPlay(), new AutoPause()] 
})




//aqui crea un objeto tipo MediaPlayer y su el es video 
const playButton = document.querySelector('#play')
playButton.onclick = () => player.togglePlay()

const muteButton = document.querySelector('#mute')
muteButton.onclick = () => player.toggleMute()


if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }, /*catch*/ function(error) {
      console.log('Service worker registration failed:', error);
    });
} else {
  console.log('Service workers are not supported.');
}
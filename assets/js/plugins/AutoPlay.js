
function AutoPlay() {} // class object

// methods of the object
AutoPlay.prototype.run = function(player) {
  if (!player.muted){
    player.muted = true
  } 
  player.play()
}

export default AutoPlay
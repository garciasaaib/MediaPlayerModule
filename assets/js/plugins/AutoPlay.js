
function AutoPlay() {} // class object

// methods of the object
AutoPlay.prototype.run = function(player) {
  player.toggleMute()
  player.togglePlay()
}

export default AutoPlay
function AutoPlay(){}

AutoPlay.prototype.run = function(player) {
  if (!player.muted) {
    player.muted = true
  } 
  
  //llama a estas funciones porque vienen implicitas en el objeto MediaPlayer, por lo que son metodos de la clase
  player.play()
}
export default AutoPlay
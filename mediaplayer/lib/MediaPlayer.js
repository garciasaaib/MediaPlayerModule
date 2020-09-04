"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer(); //mover el player a otro contenedor
        this.initPlugins(); //los metodos pueden ser inicializados aqui mediante this
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        //tomamos a media y le ponemos a la misma altura al contenedor
        this.media.parentNode.insertBefore(this.container, this.media);
        //tomamos al contenedor y le ingresamos a media
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        //no queremos que el plugin tenga todo el objeto this, puede ser peligroso 
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this); //y lo manda a hacer la funcion llamada run, que podria llamarse de otra manera
            //y para que pueda usarse como queremos le mandamos toda la instancia con this
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        this.media.paused ? this.play() : this.pause();
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.toggleMute = function () {
        this.media.muted ? this.unmute() : this.mute();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;

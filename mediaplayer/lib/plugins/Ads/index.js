"use strict";
exports.__esModule = true;
var Ads_1 = require("./Ads");
//este es un plugin por lo que se agrega los metodos correspondientes
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads_1["default"].getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    //inicializador de plugins
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        //el player tiene un container, tomamos adsContainer y lo metemos en el container de player
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    //logica de cuando inicia el ad a correr
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime); //lee el tiempo del video
        if (currentTime % 30 === 0) { //cada 30% de video corre renderAd
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd(); //obtiene un ad del array y lo desecha
        this.currentAd = ad;
        console.log(this.currentAd);
        this.adsContainer.innerHTML = "\n      <div class=\"ads\">\n        <a class=\"ads__link\" target=\"_blank\" href=\"" + this.currentAd.url + "\">\n          <img class=\"ads__img\" src=\"" + this.currentAd.imageUrl + "\">\n          <div class=\"ads__info\">\n            <h5 class=\"ads__title\">" + this.currentAd.title + "</h5>\n            <p class=\"ads__body\">" + this.currentAd.body + "</p>\n          </div>\n        </a>\n      </div>\n    ";
        /*setTimeout(() => {
          this.currentAd = null
          this.adsContainer.innerHTML = ''
        },10000)*/
    };
    return AdsPlugin;
}());
exports["default"] = AdsPlugin;

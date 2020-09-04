"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        //al ser threshole un valor asignado no hay problema con this
        this.threshold = 0.25;
        /*al ser handler una funcion que maneja this dentro de ella,
        ese this debe ser especificado,
        de no hacerlo se toma el this del objeto contenedor
        que es el IntersectionObserver */
        this.handlerObserver = this.handlerObserver.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handlerObserver, {
            threshold: this.threshold
        });
        observer.observe(player.media);
        document.addEventListener('visibilitychange', this.handleVisibility);
    };
    AutoPause.prototype.handlerObserver = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };
    AutoPause.prototype.handleVisibility = function () {
        var isVisible = document.visibilityState === 'visible';
        isVisible ? this.player.play() : this.player.pause();
    };
    return AutoPause;
}());
exports["default"] = AutoPause;

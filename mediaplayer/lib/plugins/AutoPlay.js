"use strict";
exports.__esModule = true;
var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    // methods of the object
    AutoPlay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    };
    return AutoPlay;
}());
exports["default"] = AutoPlay;

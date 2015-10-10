'use strict';

var directives = require('./_index.js');

function GamepadDirective(SocketService) {

  return {
    restrict: 'EA',
    scope: {
      gamepadId: '='
    },
    link: function(scope, element, attr) {

      scope.lastState = {
        right: false,
        up: false,
        left: false,
        down: false
      };

      scope.onGamepadTouchStart = (ev) => {
        SocketService.send({
          type: 'button',
          button: $(ev.target).data('gamepad-button'),
          pressed: true,
          id: parseInt(scope.gamepadId)
        });
      };

      scope.onGamepadTouchEnd = (ev) => {
        SocketService.send({
          type: 'button',
          button: $(ev.target).data('gamepad-button'),
          pressed: false,
          id: parseInt(scope.gamepadId)
        });
      };

      $(element).find('[data-gamepad-button]')
        .on('touchstart mousedown', scope.onGamepadTouchStart)
        .on('touchend mouseup', scope.onGamepadTouchEnd);
    }
  };

}

directives.directive('gamepad', GamepadDirective);

'use strict';

var directives = require('./_index.js');

function VirtualJoystickDirective(SocketService) {

  return {
    restrict: 'A',
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

      scope.updateState = (state) => {
        console.log(state.direction);
        if (!state.direction) {
          state.direction = {
            x: 'none',
            y: 'none'
          };
        }
        var changed = false,
        newDirections = {
          right: state.direction.x === 'right',
          up: state.direction.y === 'up',
          left: state.direction.x === 'left',
          down: state.direction.y === 'down'
        };

        for (var prop in scope.lastState) {
          if (scope.lastState.hasOwnProperty(prop)) {
            if (scope.lastState[prop] !== newDirections[prop]) {
              changed = true;
              break;
            }
          }
        }

        if (changed) {
          console.log(newDirections);
          scope.lastState = newDirections;
          SocketService.send({
              type: 'direction',
              id: scope.gamepadId,
              directions: newDirections
          })
        }
      };


      scope.vjoystick = nipplejs
        .create({
          zone: element[0],
          color: 'blue'
        })
        .on('move dir plain start end', function(ev, state) { scope.updateState(state); });
    }
  };

}


directives.directive('virtualJoystick', VirtualJoystickDirective);

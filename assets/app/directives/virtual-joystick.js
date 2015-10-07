'use strict';

var directives = require('./_index.js');

function VirtualJoystickDirective() {

  return {
    restrict: 'A',
    scope: true,
    link: function(scope, attr, element) {

      scope.vjoystick = new VirtualJoystick({
          container: element[0],
          mouseSupport: true
      });
    }
  };

}


directives.directive('virtualJoystick', VirtualJoystickDirective);

'use strict';

var directives = require('./_index.js');

function VirtualJoystickDirective() {

  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attr) {

      scope.vjoystick =  nipplejs.create({
        zone: element[0],
        color: 'blue'
      });
    }
  };

}


directives.directive('virtualJoystick', VirtualJoystickDirective);

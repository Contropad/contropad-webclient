(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./assets/app/main.js":[function(require,module,exports){
"use strict";

// angular modules
require("./utils");
require("./templates");
require("./controllers/_index");
require("./services/_index");
require("./directives/_index");

var requires = ["templates", "app.controllers", "app.services", "app.directives", "ionic"];

window.app = angular.module("contropad.app", requires).constant("AppSettings", require("./constants")).config(require("./on_config")).run(require("./on_run"));

},{"./constants":"/home/rovak/workspace/contropad-node-server/assets/app/constants.js","./controllers/_index":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/_index.js","./directives/_index":"/home/rovak/workspace/contropad-node-server/assets/app/directives/_index.js","./on_config":"/home/rovak/workspace/contropad-node-server/assets/app/on_config.js","./on_run":"/home/rovak/workspace/contropad-node-server/assets/app/on_run.js","./services/_index":"/home/rovak/workspace/contropad-node-server/assets/app/services/_index.js","./templates":"/home/rovak/workspace/contropad-node-server/assets/app/templates.js","./utils":"/home/rovak/workspace/contropad-node-server/assets/app/utils.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/constants.js":[function(require,module,exports){
"use strict";

module.exports = {
  appTitle: "Contropad",
  apiUrl: "/api"
};

},{}],"/home/rovak/workspace/contropad-node-server/assets/app/controllers/_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.controllers", ["ionic"]);

({"controller":require("./controller.js"),"home":require("./home.js")});

},{"./controller.js":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/controller.js","./home.js":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/home.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/controllers/controller.js":[function(require,module,exports){
"use strict";

var app = require("./_index");

/**
 * @ngInject
 */
function ControllerCtrl($scope) {}
ControllerCtrl.$inject = ["$scope"];

app.controller("ControllerCtrl", ControllerCtrl);

},{"./_index":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/_index.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/controllers/home.js":[function(require,module,exports){
"use strict";

var app = require("./_index");

/**
 * @ngInject
 */
function MainCtrl($scope) {}
MainCtrl.$inject = ["$scope"];

app.controller("MainCtrl", MainCtrl);

},{"./_index":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/_index.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/directives/_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.directives", []);

({"controller":require("./controller.js"),"virtual-joystick":require("./virtual-joystick.js")});

},{"./controller.js":"/home/rovak/workspace/contropad-node-server/assets/app/directives/controller.js","./virtual-joystick.js":"/home/rovak/workspace/contropad-node-server/assets/app/directives/virtual-joystick.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/directives/controller.js":[function(require,module,exports){
"use strict";

var directives = require("./_index.js");

},{"./_index.js":"/home/rovak/workspace/contropad-node-server/assets/app/directives/_index.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/directives/virtual-joystick.js":[function(require,module,exports){
"use strict";

var directives = require("./_index.js");

function VirtualJoystickDirective() {

  return {
    restrict: "A",
    scope: true,
    link: function link(scope, element, attr) {

      scope.vjoystick = nipplejs.create({
        zone: element[0],
        color: "blue"
      });
    }
  };
}

directives.directive("virtualJoystick", VirtualJoystickDirective);

},{"./_index.js":"/home/rovak/workspace/contropad-node-server/assets/app/directives/_index.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/on_config.js":[function(require,module,exports){
"use strict";

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$locationProvider.html5Mode(true);

    $ionicConfigProvider.views.maxCache(0);

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("main", {
        url: "/",
        templateUrl: "dashboard/main.html",
        controller: "MainCtrl"
    }).state("controller", {
        url: "/controller",
        templateUrl: "controller/view.html",
        controller: "ControllerCtrl"
    });
}
OnConfig.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "$ionicConfigProvider"];

module.exports = OnConfig;

},{}],"/home/rovak/workspace/contropad-node-server/assets/app/on_run.js":[function(require,module,exports){
"use strict";

/**
* @ngInject
*/
function OnRun($rootScope) {}
OnRun.$inject = ["$rootScope"];

module.exports = OnRun;

},{}],"/home/rovak/workspace/contropad-node-server/assets/app/services/SocketService.js":[function(require,module,exports){
"use strict";

var servicesModule = require("./_index.js");

},{"./_index.js":"/home/rovak/workspace/contropad-node-server/assets/app/services/_index.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/services/_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.services", []);

({"SocketService":require("./SocketService.js")});

},{"./SocketService.js":"/home/rovak/workspace/contropad-node-server/assets/app/services/SocketService.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("controller/view.html", "<ion-view view-title=\"Dashboard\">\n  <ion-content scroll=\"false\" style=\"width: 100%; height: 100%;\">\n    <div class=\"controller\">\n    \t<div class=\"controller-body\">\n    \t\t<div class=\"d-pad-circle\">\n    \t\t\t<div class=\"d-pad-vert\">\n    \t\t\t\t<div class=\"top arrow\"></div>\n    \t\t\t\t<div class=\"d-pad-middle-circle\"></div>\n    \t\t\t\t<div class=\"bottom arrow\"></div>\n    \t\t\t</div>\n    \t\t\t<div class=\"d-pad-hor\">\n    \t\t\t\t<div class=\"left arrow\"></div>\n    \t\t\t\t<div class=\"right arrow\"></div>\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"button-circle\">\n    \t\t\t<div class=\"button-group top\">\n    \t\t\t\t<div class=\"blue action press\">\n\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"green action press\">\n\n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t\t<div class=\"button-group bottom\">\n    \t\t\t\t<div class=\"yellow action press\">\n\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"red action press\">\n\n    \t\t\t\t</div>\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"select-button\">\n    \t\t\t<div class=\"diag-button press\">\n\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"start-button\">\n    \t\t\t<div class=\"diag-button press\">\n\n    \t\t\t</div>\n    \t\t</div>\n    \t\t<div class=\"logo\">\n    \t\t\t<div class=\"icon\">\n    \t\t\t\t<div class=\"top set\"></div>\n    \t\t\t\t<div class=\"bottom set\"></div>\n    \t\t\t</div>\n    \t\t\t<div class=\"text\">\n    \t\t\t\t<span class=\"main\">SUPER NINTENDO</span>\n    \t\t\t\t<span class=\"sub\">ENTERTAINMENT SYSTEM</span>\n    \t\t\t\t<span class=\"sub-bg\"></span>\n    \t\t\t</div>\n    \t\t</div>\n    \t</div>\n    \t<div class=\"lb bumper press\" data-sound=\"scroll\">\n    \t</div>\n    \t<div class=\"rb bumper press\" data-sound=\"scroll\"></div>\n    \t<div class=\"controller-shine\"></div>\n    </div>\n\n    <div virtual-joystick style=\"height: 100%; width: 100%; position: relative\">test</div>\n  </ion-content>\n</ion-view>\n");
  $templateCache.put("dashboard/main.html", "<ion-view view-title=\"Dashboard\">\n  <ion-content>\n    <div class=\"row dashboard\">\n      <div class=\"col\">\n        <button class=\"button button-light\">\n          <i class=\"ion-wrench\"></i><br>\n          Settings\n        </button>\n\n      </div>\n      <div class=\"col\">\n        <button class=\"button button-light\" ui-sref=\"controller\">\n          <i class=\"ion-ios-game-controller-b\"></i><br>\n          Controller\n        </button>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
}]);

},{}],"/home/rovak/workspace/contropad-node-server/assets/app/utils.js":[function(require,module,exports){
"use strict";

function launchIntoFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

},{}]},{},["./assets/app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvbWFpbi5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9jb25zdGFudHMuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvY29udHJvbGxlcnMvaG9tZS5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9kaXJlY3RpdmVzL19pbmRleC5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9kaXJlY3RpdmVzL2NvbnRyb2xsZXIuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy92aXJ0dWFsLWpveXN0aWNrLmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL29uX2NvbmZpZy5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9vbl9ydW4uanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvc2VydmljZXMvU29ja2V0U2VydmljZS5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9zZXJ2aWNlcy9faW5kZXguanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvdGVtcGxhdGVzLmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7QUFHYixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUUvQixJQUFJLFFBQVEsR0FBRyxDQUNiLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixPQUFPLENBQ1IsQ0FBQzs7QUFFRixNQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FDakIsTUFBTSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FDakMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUM5QixHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQ3JCNUIsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixVQUFRLEVBQUUsV0FBVztBQUNyQixRQUFNLEVBQUUsTUFBTTtDQUNmLENBQUM7OztBQ0xGLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0FBRTlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7OztBQ04vQyxZQUFZLENBQUM7O0FBRWIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztBQUs5QixTQUFTLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFFL0I7O0FBR0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQzs7OztBQ1pqRCxZQUFZLENBQUM7O0FBRWIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztBQUs5QixTQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFFekI7O0FBR0QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7QUNackMsWUFBWSxDQUFDOztBQUViLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDOzs7QUNOL0MsWUFBWSxDQUFDOztBQUViLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O0FDRnhDLFlBQVksQ0FBQzs7QUFFYixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXhDLFNBQVMsd0JBQXdCLEdBQUc7O0FBRWxDLFNBQU87QUFDTCxZQUFRLEVBQUUsR0FBRztBQUNiLFNBQUssRUFBRSxJQUFJO0FBQ1gsUUFBSSxFQUFFLGNBQVMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7O0FBRW5DLFdBQUssQ0FBQyxTQUFTLEdBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNqQyxZQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoQixhQUFLLEVBQUUsTUFBTTtPQUNkLENBQUMsQ0FBQztLQUNKO0dBQ0YsQ0FBQztDQUVIOztBQUdELFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzs7O0FDckJsRSxZQUFZLENBQUM7Ozs7O0FBS2IsU0FBUyxRQUFRLENBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFOzs7O0FBSTdGLHdCQUFvQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXZDLHNCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFbEMsa0JBQWMsQ0FDVCxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ1gsV0FBRyxFQUFFLEdBQUc7QUFDUixtQkFBVyxFQUFFLHFCQUFxQjtBQUNsQyxrQkFBVSxFQUFFLFVBQVU7S0FDekIsQ0FBQyxDQUNELEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDakIsV0FBRyxFQUFFLGFBQWE7QUFDbEIsbUJBQVcsRUFBRSxzQkFBc0I7QUFDbkMsa0JBQVUsRUFBRSxnQkFBZ0I7S0FDL0IsQ0FBQyxDQUFDO0NBQ1I7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7Ozs7QUMxQjFCLFlBQVksQ0FBQzs7Ozs7QUFLYixTQUFTLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFFMUI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Ozs7QUNUdkIsWUFBWSxDQUFDOztBQUViLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O0FDRjVDLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRXBELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7Ozs7O0FDTi9DLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFVBQVMsY0FBYyxFQUFFO0FBQUMsZ0JBQWMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsdStEQUFxMUQsQ0FBQyxDQUFDO0FBQ2w5RCxnQkFBYyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyx3Z0JBQXdnQixDQUFDLENBQUM7Q0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7QUNEdmpCLFNBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO0FBQ3JDLE1BQUcsT0FBTyxDQUFDLGlCQUFpQixFQUFFO0FBQzVCLFdBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0dBQzdCLE1BQU0sSUFBRyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7QUFDdEMsV0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7R0FDaEMsTUFBTSxJQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRTtBQUN6QyxXQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztHQUNuQyxNQUFNLElBQUcsT0FBTyxDQUFDLG1CQUFtQixFQUFFO0FBQ3JDLFdBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0dBQy9CO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhbmd1bGFyIG1vZHVsZXNcbnJlcXVpcmUoJy4vdXRpbHMnKTtcbnJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL19pbmRleCcpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9faW5kZXgnKTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcblxudmFyIHJlcXVpcmVzID0gW1xuICAndGVtcGxhdGVzJyxcbiAgJ2FwcC5jb250cm9sbGVycycsXG4gICdhcHAuc2VydmljZXMnLFxuICAnYXBwLmRpcmVjdGl2ZXMnLFxuICAnaW9uaWMnXG5dO1xuXG53aW5kb3cuYXBwID0gYW5ndWxhclxuICAubW9kdWxlKCdjb250cm9wYWQuYXBwJywgcmVxdWlyZXMpXG4gIC5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cycpKVxuICAuY29uZmlnKHJlcXVpcmUoJy4vb25fY29uZmlnJykpXG4gIC5ydW4ocmVxdWlyZSgnLi9vbl9ydW4nKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBUaXRsZTogJ0NvbnRyb3BhZCcsXG4gIGFwaVVybDogJy9hcGknXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbJ2lvbmljJ10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gcmVxdWlyZSgnLi9faW5kZXgnKTtcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gQ29udHJvbGxlckN0cmwoJHNjb3BlKSB7XG5cbn1cblxuXG5hcHAuY29udHJvbGxlcignQ29udHJvbGxlckN0cmwnLCBDb250cm9sbGVyQ3RybCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYWluQ3RybCgkc2NvcGUpIHtcblxufVxuXG5cbmFwcC5jb250cm9sbGVyKCdNYWluQ3RybCcsIE1haW5DdHJsKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkaXJlY3RpdmVzID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuXG5mdW5jdGlvbiBWaXJ0dWFsSm95c3RpY2tEaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIHNjb3BlOiB0cnVlLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG5cbiAgICAgIHNjb3BlLnZqb3lzdGljayA9ICBuaXBwbGVqcy5jcmVhdGUoe1xuICAgICAgICB6b25lOiBlbGVtZW50WzBdLFxuICAgICAgICBjb2xvcjogJ2JsdWUnXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbn1cblxuXG5kaXJlY3RpdmVzLmRpcmVjdGl2ZSgndmlydHVhbEpveXN0aWNrJywgVmlydHVhbEpveXN0aWNrRGlyZWN0aXZlKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRpb25pY0NvbmZpZ1Byb3ZpZGVyKSB7XG5cbiAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3MubWF4Q2FjaGUoMCk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQvbWFpbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdjb250cm9sbGVyJywge1xuICAgICAgICAgIHVybDogJy9jb250cm9sbGVyJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbnRyb2xsZXIvdmlldy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ29udHJvbGxlckN0cmwnXG4gICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbkNvbmZpZztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4qIEBuZ0luamVjdFxuKi9cbmZ1bmN0aW9uIE9uUnVuKCRyb290U2NvcGUpIHtcbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25SdW47XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJjb250cm9sbGVyL3ZpZXcuaHRtbFwiLFwiPGlvbi12aWV3IHZpZXctdGl0bGU9XFxcIkRhc2hib2FyZFxcXCI+XFxuICA8aW9uLWNvbnRlbnQgc2Nyb2xsPVxcXCJmYWxzZVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbGxlclxcXCI+XFxuICAgIFx0PGRpdiBjbGFzcz1cXFwiY29udHJvbGxlci1ib2R5XFxcIj5cXG4gICAgXHRcdDxkaXYgY2xhc3M9XFxcImQtcGFkLWNpcmNsZVxcXCI+XFxuICAgIFx0XHRcdDxkaXYgY2xhc3M9XFxcImQtcGFkLXZlcnRcXFwiPlxcbiAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInRvcCBhcnJvd1xcXCI+PC9kaXY+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiZC1wYWQtbWlkZGxlLWNpcmNsZVxcXCI+PC9kaXY+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYm90dG9tIGFycm93XFxcIj48L2Rpdj5cXG4gICAgXHRcdFx0PC9kaXY+XFxuICAgIFx0XHRcdDxkaXYgY2xhc3M9XFxcImQtcGFkLWhvclxcXCI+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwibGVmdCBhcnJvd1xcXCI+PC9kaXY+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicmlnaHQgYXJyb3dcXFwiPjwvZGl2PlxcbiAgICBcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdDwvZGl2PlxcbiAgICBcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uLWNpcmNsZVxcXCI+XFxuICAgIFx0XHRcdDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1ncm91cCB0b3BcXFwiPlxcbiAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJsdWUgYWN0aW9uIHByZXNzXFxcIj5cXG5cXG4gICAgXHRcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJncmVlbiBhY3Rpb24gcHJlc3NcXFwiPlxcblxcbiAgICBcdFx0XHRcdDwvZGl2PlxcbiAgICBcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uLWdyb3VwIGJvdHRvbVxcXCI+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwieWVsbG93IGFjdGlvbiBwcmVzc1xcXCI+XFxuXFxuICAgIFx0XHRcdFx0PC9kaXY+XFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwicmVkIGFjdGlvbiBwcmVzc1xcXCI+XFxuXFxuICAgIFx0XHRcdFx0PC9kaXY+XFxuICAgIFx0XHRcdDwvZGl2PlxcbiAgICBcdFx0PC9kaXY+XFxuICAgIFx0XHQ8ZGl2IGNsYXNzPVxcXCJzZWxlY3QtYnV0dG9uXFxcIj5cXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiZGlhZy1idXR0b24gcHJlc3NcXFwiPlxcblxcbiAgICBcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdDwvZGl2PlxcbiAgICBcdFx0PGRpdiBjbGFzcz1cXFwic3RhcnQtYnV0dG9uXFxcIj5cXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiZGlhZy1idXR0b24gcHJlc3NcXFwiPlxcblxcbiAgICBcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdDwvZGl2PlxcbiAgICBcdFx0PGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+XFxuICAgIFx0XHRcdDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XFxcInRvcCBzZXRcXFwiPjwvZGl2PlxcbiAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImJvdHRvbSBzZXRcXFwiPjwvZGl2PlxcbiAgICBcdFx0XHQ8L2Rpdj5cXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwidGV4dFxcXCI+XFxuICAgIFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcIm1haW5cXFwiPlNVUEVSIE5JTlRFTkRPPC9zcGFuPlxcbiAgICBcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJzdWJcXFwiPkVOVEVSVEFJTk1FTlQgU1lTVEVNPC9zcGFuPlxcbiAgICBcdFx0XHRcdDxzcGFuIGNsYXNzPVxcXCJzdWItYmdcXFwiPjwvc3Bhbj5cXG4gICAgXHRcdFx0PC9kaXY+XFxuICAgIFx0XHQ8L2Rpdj5cXG4gICAgXHQ8L2Rpdj5cXG4gICAgXHQ8ZGl2IGNsYXNzPVxcXCJsYiBidW1wZXIgcHJlc3NcXFwiIGRhdGEtc291bmQ9XFxcInNjcm9sbFxcXCI+XFxuICAgIFx0PC9kaXY+XFxuICAgIFx0PGRpdiBjbGFzcz1cXFwicmIgYnVtcGVyIHByZXNzXFxcIiBkYXRhLXNvdW5kPVxcXCJzY3JvbGxcXFwiPjwvZGl2PlxcbiAgICBcdDxkaXYgY2xhc3M9XFxcImNvbnRyb2xsZXItc2hpbmVcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiB2aXJ0dWFsLWpveXN0aWNrIHN0eWxlPVxcXCJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBwb3NpdGlvbjogcmVsYXRpdmVcXFwiPnRlc3Q8L2Rpdj5cXG4gIDwvaW9uLWNvbnRlbnQ+XFxuPC9pb24tdmlldz5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkYXNoYm9hcmQvbWFpbi5odG1sXCIsXCI8aW9uLXZpZXcgdmlldy10aXRsZT1cXFwiRGFzaGJvYXJkXFxcIj5cXG4gIDxpb24tY29udGVudD5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGRhc2hib2FyZFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBidXR0b24tbGlnaHRcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiaW9uLXdyZW5jaFxcXCI+PC9pPjxicj5cXG4gICAgICAgICAgU2V0dGluZ3NcXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLWxpZ2h0XFxcIiB1aS1zcmVmPVxcXCJjb250cm9sbGVyXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWJcXFwiPjwvaT48YnI+XFxuICAgICAgICAgIENvbnRyb2xsZXJcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvaW9uLWNvbnRlbnQ+XFxuPC9pb24tdmlldz5cXG5cIik7fV0pOyIsImZ1bmN0aW9uIGxhdW5jaEludG9GdWxsc2NyZWVuKGVsZW1lbnQpIHtcbiAgaWYoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIGlmKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH0gZWxzZSBpZihlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICB9IGVsc2UgaWYoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gIH1cbn1cbiJdfQ==

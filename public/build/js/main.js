(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./assets/app/main.js":[function(require,module,exports){
"use strict";

// angular modules
require("./templates");
require("./controllers/_index");
require("./services/_index");
require("./directives/_index");

var requires = ["templates", "app.controllers", "app.services", "app.directives", "ionic"];

window.app = angular.module("contropad.app", requires).constant("AppSettings", require("./constants")).config(require("./on_config")).run(require("./on_run"));

},{"./constants":"/home/rovak/workspace/contropad-node-server/assets/app/constants.js","./controllers/_index":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/_index.js","./directives/_index":"/home/rovak/workspace/contropad-node-server/assets/app/directives/_index.js","./on_config":"/home/rovak/workspace/contropad-node-server/assets/app/on_config.js","./on_run":"/home/rovak/workspace/contropad-node-server/assets/app/on_run.js","./services/_index":"/home/rovak/workspace/contropad-node-server/assets/app/services/_index.js","./templates":"/home/rovak/workspace/contropad-node-server/assets/app/templates.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/constants.js":[function(require,module,exports){
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
    link: function link(scope, attr, element) {

      scope.vjoystick = new VirtualJoystick({
        container: element[0],
        mouseSupport: true
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
  $templateCache.put("controller/view.html", "<ion-view view-title=\"Dashboard\">\n  <ion-content scroll=\"false\">\n    <h1>Controller</h1>\n    <div virtual-joystick style=\"height: 500px; width: 500px; position: relative\">test</div>\n  </ion-content>\n</ion-view>\n");
  $templateCache.put("dashboard/main.html", "<ion-view view-title=\"Dashboard\">\n  <ion-content>\n    <div class=\"row dashboard\">\n      <div class=\"col\">\n        <button class=\"button button-light\">\n          <i class=\"ion-wrench\"></i><br>\n          Settings\n        </button>\n\n      </div>\n      <div class=\"col\">\n        <button class=\"button button-light\" ui-sref=\"controller\">\n          <i class=\"ion-ios-game-controller-b\"></i><br>\n          Controller\n        </button>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
}]);

},{}]},{},["./assets/app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvbWFpbi5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9jb25zdGFudHMuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvY29udHJvbGxlcnMvaG9tZS5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9kaXJlY3RpdmVzL19pbmRleC5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9kaXJlY3RpdmVzL2NvbnRyb2xsZXIuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy92aXJ0dWFsLWpveXN0aWNrLmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL29uX2NvbmZpZy5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9vbl9ydW4uanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvc2VydmljZXMvU29ja2V0U2VydmljZS5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9zZXJ2aWNlcy9faW5kZXguanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7QUFHYixPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkIsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDN0IsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7O0FBRS9CLElBQUksUUFBUSxHQUFHLENBQ2IsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLE9BQU8sQ0FDUixDQUFDOztBQUVGLE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUNqQixNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUNqQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQzlCLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs7O0FDcEI1QixZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFVBQVEsRUFBRSxXQUFXO0FBQ3JCLFFBQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQzs7O0FDTEYsWUFBWSxDQUFDOztBQUViLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFOUQsSUFBSSxD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Ozs7O0FDTi9DLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFVBQVMsY0FBYyxFQUFFO0FBQUMsZ0JBQWMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsaU9BQWlPLENBQUMsQ0FBQztBQUM5VixnQkFBYyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyx3Z0JBQXdnQixDQUFDLENBQUM7Q0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xucmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL19pbmRleCcpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL19pbmRleCcpO1xuXG52YXIgcmVxdWlyZXMgPSBbXG4gICd0ZW1wbGF0ZXMnLFxuICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgJ2FwcC5zZXJ2aWNlcycsXG4gICdhcHAuZGlyZWN0aXZlcycsXG4gICdpb25pYydcbl07XG5cbndpbmRvdy5hcHAgPSBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NvbnRyb3BhZC5hcHAnLCByZXF1aXJlcylcbiAgLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzJykpXG4gIC5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSlcbiAgLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcFRpdGxlOiAnQ29udHJvcGFkJyxcbiAgYXBpVXJsOiAnL2FwaSdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFsnaW9uaWMnXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBDb250cm9sbGVyQ3RybCgkc2NvcGUpIHtcblxufVxuXG5cbmFwcC5jb250cm9sbGVyKCdDb250cm9sbGVyQ3RybCcsIENvbnRyb2xsZXJDdHJsKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE1haW5DdHJsKCRzY29wZSkge1xuXG59XG5cblxuYXBwLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgTWFpbkN0cmwpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuZGlyZWN0aXZlcycsIFtdKTtcblxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpcmVjdGl2ZXMgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XG5cbmZ1bmN0aW9uIFZpcnR1YWxKb3lzdGlja0RpcmVjdGl2ZSgpIHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgc2NvcGU6IHRydWUsXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGF0dHIsIGVsZW1lbnQpIHtcblxuICAgICAgc2NvcGUudmpveXN0aWNrID0gbmV3IFZpcnR1YWxKb3lzdGljayh7XG4gICAgICAgICAgY29udGFpbmVyOiBlbGVtZW50WzBdLFxuICAgICAgICAgIG1vdXNlU3VwcG9ydDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG59XG5cblxuZGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3ZpcnR1YWxKb3lzdGljaycsIFZpcnR1YWxKb3lzdGlja0RpcmVjdGl2ZSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIE9uQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkaW9uaWNDb25maWdQcm92aWRlcikge1xuXG4gIC8vJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG4gICRpb25pY0NvbmZpZ1Byb3ZpZGVyLnZpZXdzLm1heENhY2hlKDApO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdtYWluJywge1xuICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkL21haW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgnY29udHJvbGxlcicsIHtcbiAgICAgICAgICB1cmw6ICcvY29udHJvbGxlcicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdjb250cm9sbGVyL3ZpZXcuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0NvbnRyb2xsZXJDdHJsJ1xuICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuKiBAbmdJbmplY3RcbiovXG5mdW5jdGlvbiBPblJ1bigkcm9vdFNjb3BlKSB7XG4gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uUnVuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2VydmljZXNNb2R1bGUgPSByZXF1aXJlKCcuL19pbmRleC5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuc2VydmljZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcInRlbXBsYXRlc1wiLCBbXSkucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiY29udHJvbGxlci92aWV3Lmh0bWxcIixcIjxpb24tdmlldyB2aWV3LXRpdGxlPVxcXCJEYXNoYm9hcmRcXFwiPlxcbiAgPGlvbi1jb250ZW50IHNjcm9sbD1cXFwiZmFsc2VcXFwiPlxcbiAgICA8aDE+Q29udHJvbGxlcjwvaDE+XFxuICAgIDxkaXYgdmlydHVhbC1qb3lzdGljayBzdHlsZT1cXFwiaGVpZ2h0OiA1MDBweDsgd2lkdGg6IDUwMHB4OyBwb3NpdGlvbjogcmVsYXRpdmVcXFwiPnRlc3Q8L2Rpdj5cXG4gIDwvaW9uLWNvbnRlbnQ+XFxuPC9pb24tdmlldz5cXG5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkYXNoYm9hcmQvbWFpbi5odG1sXCIsXCI8aW9uLXZpZXcgdmlldy10aXRsZT1cXFwiRGFzaGJvYXJkXFxcIj5cXG4gIDxpb24tY29udGVudD5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGRhc2hib2FyZFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBidXR0b24tbGlnaHRcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiaW9uLXdyZW5jaFxcXCI+PC9pPjxicj5cXG4gICAgICAgICAgU2V0dGluZ3NcXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLWxpZ2h0XFxcIiB1aS1zcmVmPVxcXCJjb250cm9sbGVyXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWJcXFwiPjwvaT48YnI+XFxuICAgICAgICAgIENvbnRyb2xsZXJcXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvaW9uLWNvbnRlbnQ+XFxuPC9pb24tdmlldz5cXG5cIik7fV0pOyJdfQ==

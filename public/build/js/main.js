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

},{"./constants":"C:\\Development\\contropad-webclient\\assets\\app\\constants.js","./controllers/_index":"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\_index.js","./directives/_index":"C:\\Development\\contropad-webclient\\assets\\app\\directives\\_index.js","./on_config":"C:\\Development\\contropad-webclient\\assets\\app\\on_config.js","./on_run":"C:\\Development\\contropad-webclient\\assets\\app\\on_run.js","./services/_index":"C:\\Development\\contropad-webclient\\assets\\app\\services\\_index.js","./templates":"C:\\Development\\contropad-webclient\\assets\\app\\templates.js","./utils":"C:\\Development\\contropad-webclient\\assets\\app\\utils.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\constants.js":[function(require,module,exports){
"use strict";

module.exports = {
  appTitle: "Contropad",
  apiUrl: "/api",
  websocketUrl: "ws://{hostname}:8181"
};

},{}],"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.controllers", ["ionic"]);

({"controller":require("./controller.js"),"home":require("./home.js")});

},{"./controller.js":"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\controller.js","./home.js":"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\home.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\controller.js":[function(require,module,exports){
"use strict";

var app = require("./_index");

/**
 * @ngInject
 */
function ControllerCtrl($scope) {}
ControllerCtrl.$inject = ["$scope"];

app.controller("ControllerCtrl", ControllerCtrl);

},{"./_index":"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\_index.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\home.js":[function(require,module,exports){
"use strict";

var app = require("./_index");

/**
 * @ngInject
 */
function MainCtrl($scope) {}
MainCtrl.$inject = ["$scope"];

app.controller("MainCtrl", MainCtrl);

},{"./_index":"C:\\Development\\contropad-webclient\\assets\\app\\controllers\\_index.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\directives\\_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.directives", []);

({"controller":require("./controller.js"),"virtual-joystick":require("./virtual-joystick.js")});

},{"./controller.js":"C:\\Development\\contropad-webclient\\assets\\app\\directives\\controller.js","./virtual-joystick.js":"C:\\Development\\contropad-webclient\\assets\\app\\directives\\virtual-joystick.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\directives\\controller.js":[function(require,module,exports){
"use strict";

var directives = require("./_index.js");

function GamepadDirective(SocketService) {

  return {
    restrict: "EA",
    scope: {
      gamepadId: "="
    },
    link: function link(scope, element, attr) {

      scope.lastState = {
        right: false,
        up: false,
        left: false,
        down: false
      };

      scope.onGamepadTouchStart = function (ev) {
        SocketService.send({
          type: "button",
          button: $(ev.target).data("gamepad-button"),
          pressed: true,
          id: parseInt(scope.gamepadId)
        });
      };

      scope.onGamepadTouchEnd = function (ev) {
        SocketService.send({
          type: "button",
          button: $(ev.target).data("gamepad-button"),
          pressed: false,
          id: parseInt(scope.gamepadId)
        });
      };

      $(element).find("[data-gamepad-button]").on("touchstart mousedown", scope.onGamepadTouchStart).on("touchend mouseup", scope.onGamepadTouchEnd);
    }
  };
}
GamepadDirective.$inject = ["SocketService"];

directives.directive("gamepad", GamepadDirective);

},{"./_index.js":"C:\\Development\\contropad-webclient\\assets\\app\\directives\\_index.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\directives\\virtual-joystick.js":[function(require,module,exports){
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

},{"./_index.js":"C:\\Development\\contropad-webclient\\assets\\app\\directives\\_index.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\on_config.js":[function(require,module,exports){
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

},{}],"C:\\Development\\contropad-webclient\\assets\\app\\on_run.js":[function(require,module,exports){
"use strict";

/**
* @ngInject
*/
function OnRun($rootScope) {}
OnRun.$inject = ["$rootScope"];

module.exports = OnRun;

},{}],"C:\\Development\\contropad-webclient\\assets\\app\\services\\SocketService.js":[function(require,module,exports){
"use strict";

var servicesModule = require("./_index.js");

/**
* @ngInject
*/
function SocketService($timeout, AppSettings) {
  var _this = this;

  this.subject = new Rx.Subject();

  this.connect = function () {
    _this.socket = new ReconnectingWebSocket(AppSettings.websocketUrl.replace("{hostname}", window.location.hostname));

    _this.socket.onmessage = function (msg) {
      _this.subject.onNext(JSON.parse(msg.data));
    };

    _this.socket.onclose = function (msg) {
      _this.subject.onNext({
        action: "$changed",
        connected: false
      });
    };

    _this.socket.onopen = function (msg) {
      _this.subject.onNext({
        action: "$changed",
        connected: true
      });
    };
  };

  this.listen = function (scope, event, callback) {
    var wrappedCallback = function wrappedCallback() {
      var _this2 = this;

      var args = arguments;
      $timeout(function () {
        callback.apply(_this2, args);
      });
    },
        sub = _this.socket.getStream().filter(function (msg) {
      return msg.action === event;
    }).forEach(function (msg) {
      wrappedCallback(msg);
    });

    scope.$on("$destroy", function () {
      return sub.dispose();
    });
  };

  this.isConnected = function () {
    return _this.socket.isConnected();
  };

  this.subscribe = function (scope, callback) {
    var sub = callback(_this.socket.getStream());
    scope.$on("$destroy", function () {
      return sub.dispose();
    });
  };

  this.on = function (scope, event, callback) {
    var sub = _this.socket.getStream().filter(function (msg) {
      return msg.action === event;
    }).forEach(function (msg) {
      return $timeout(function () {
        return callback(msg);
      });
    });

    scope.$on("$destroy", function () {
      return sub.dispose();
    });
  };

  this.send = function (data) {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    _this.socket.send(data);
  };

  this.connect();
}
SocketService.$inject = ["$timeout", "AppSettings"];

servicesModule.service("SocketService", SocketService);

},{"./_index.js":"C:\\Development\\contropad-webclient\\assets\\app\\services\\_index.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\services\\_index.js":[function(require,module,exports){
"use strict";



module.exports = angular.module("app.services", []);

({"SocketService":require("./SocketService.js")});

},{"./SocketService.js":"C:\\Development\\contropad-webclient\\assets\\app\\services\\SocketService.js"}],"C:\\Development\\contropad-webclient\\assets\\app\\templates.js":[function(require,module,exports){
"use strict";

angular.module("templates", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("controller/view.html", "<ion-view view-title=\"Dashboard\">\r\n  <ion-content scroll=\"false\" style=\"width: 100%; height: 100%;\">\r\n    <div gamepad gamepad-id=\"1\" class=\"controller\">\r\n    \t<div class=\"controller-body\">\r\n    \t\t<div class=\"d-pad-circle\">\r\n    \t\t\t<div class=\"d-pad-vert\">\r\n    \t\t\t\t<div class=\"top arrow\"></div>\r\n    \t\t\t\t<div class=\"d-pad-middle-circle\"></div>\r\n    \t\t\t\t<div class=\"bottom arrow\"></div>\r\n    \t\t\t</div>\r\n    \t\t\t<div class=\"d-pad-hor\">\r\n    \t\t\t\t<div class=\"left arrow\"></div>\r\n    \t\t\t\t<div class=\"right arrow\"></div>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t\t<div class=\"button-circle\">\r\n    \t\t\t<div class=\"button-group top\">\r\n    \t\t\t\t<div class=\"blue action press\" data-gamepad-button=\"1\">\r\n\r\n    \t\t\t\t</div>\r\n    \t\t\t\t<div class=\"green action press\" data-gamepad-button=\"2\">\r\n\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>\r\n    \t\t\t<div class=\"button-group bottom\">\r\n    \t\t\t\t<div class=\"yellow action press\" data-gamepad-button=\"3\">\r\n\r\n    \t\t\t\t</div>\r\n    \t\t\t\t<div class=\"red action press\" data-gamepad-button=\"4\">\r\n\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t\t<div class=\"select-button\">\r\n    \t\t\t<div class=\"diag-button press\" data-gamepad-button=\"5\">\r\n\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t\t<div class=\"start-button\">\r\n    \t\t\t<div class=\"diag-button press\" data-gamepad-button=\"6\">\r\n\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t\t<div class=\"logo\">\r\n    \t\t\t<div class=\"icon\">\r\n    \t\t\t\t<div class=\"top set\"></div>\r\n    \t\t\t\t<div class=\"bottom set\"></div>\r\n    \t\t\t</div>\r\n    \t\t\t<div class=\"text\">\r\n    \t\t\t\t<span class=\"main\">SUPER NINTENDO</span>\r\n    \t\t\t\t<span class=\"sub\">ENTERTAINMENT SYSTEM</span>\r\n    \t\t\t\t<span class=\"sub-bg\"></span>\r\n    \t\t\t</div>\r\n    \t\t</div>\r\n    \t</div>\r\n    \t<div class=\"lb bumper press\" data-gamepad-button=\"7\">\r\n    \t</div>\r\n    \t<div class=\"rb bumper press\" data-gamepad-button=\"8\"></div>\r\n    \t<div class=\"controller-shine\"></div>\r\n    </div>\r\n\r\n    <div virtual-joystick style=\"height: 100%; width: 100%; position: relative\">test</div>\r\n  </ion-content>\r\n</ion-view>\r\n");
  $templateCache.put("dashboard/main.html", "<ion-view view-title=\"Dashboard\">\r\n  <ion-content>\r\n    <div class=\"row dashboard\">\r\n      <div class=\"col\">\r\n        <button class=\"button button-light\">\r\n          <i class=\"ion-wrench\"></i><br>\r\n          Settings\r\n        </button>\r\n\r\n      </div>\r\n      <div class=\"col\">\r\n        <button class=\"button button-light\" ui-sref=\"controller\">\r\n          <i class=\"ion-ios-game-controller-b\"></i><br>\r\n          Controller\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
}]);

},{}],"C:\\Development\\contropad-webclient\\assets\\app\\utils.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL21haW4uanMiLCJDOi9EZXZlbG9wbWVudC9jb250cm9wYWQtd2ViY2xpZW50L2Fzc2V0cy9hcHAvY29uc3RhbnRzLmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL2NvbnRyb2xsZXJzL19pbmRleC5qcyIsIkM6L0RldmVsb3BtZW50L2NvbnRyb3BhZC13ZWJjbGllbnQvYXNzZXRzL2FwcC9jb250cm9sbGVycy9jb250cm9sbGVyLmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL2NvbnRyb2xsZXJzL2hvbWUuanMiLCJDOi9EZXZlbG9wbWVudC9jb250cm9wYWQtd2ViY2xpZW50L2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy9faW5kZXguanMiLCJDOi9EZXZlbG9wbWVudC9jb250cm9wYWQtd2ViY2xpZW50L2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy9jb250cm9sbGVyLmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL2RpcmVjdGl2ZXMvdmlydHVhbC1qb3lzdGljay5qcyIsIkM6L0RldmVsb3BtZW50L2NvbnRyb3BhZC13ZWJjbGllbnQvYXNzZXRzL2FwcC9vbl9jb25maWcuanMiLCJDOi9EZXZlbG9wbWVudC9jb250cm9wYWQtd2ViY2xpZW50L2Fzc2V0cy9hcHAvb25fcnVuLmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL3NlcnZpY2VzL1NvY2tldFNlcnZpY2UuanMiLCJDOi9EZXZlbG9wbWVudC9jb250cm9wYWQtd2ViY2xpZW50L2Fzc2V0cy9hcHAvc2VydmljZXMvX2luZGV4LmpzIiwiQzovRGV2ZWxvcG1lbnQvY29udHJvcGFkLXdlYmNsaWVudC9hc3NldHMvYXBwL3RlbXBsYXRlcy5qcyIsIkM6L0RldmVsb3BtZW50L2NvbnRyb3BhZC13ZWJjbGllbnQvYXNzZXRzL2FwcC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7O0FBR2IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25CLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNoQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM3QixPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7QUFFL0IsSUFBSSxRQUFRLEdBQUcsQ0FDYixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsT0FBTyxDQUNSLENBQUM7O0FBRUYsTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQ2pCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQ2pDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7QUNyQjVCLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsVUFBUSxFQUFFLFdBQVc7QUFDckIsUUFBTSxFQUFFLE1BQU07QUFDZCxjQUFZLEVBQUUsc0JBQXNCO0NBQ3JDLENBQUM7OztBQ05GLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0FBRTlELElBQUksQ0FB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bUIsRUFBRTtBQUNyQyxXQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztHQUMvQjtDQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGFuZ3VsYXIgbW9kdWxlc1xyXG5yZXF1aXJlKCcuL3V0aWxzJyk7XHJcbnJlcXVpcmUoJy4vdGVtcGxhdGVzJyk7XHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvX2luZGV4Jyk7XHJcbnJlcXVpcmUoJy4vc2VydmljZXMvX2luZGV4Jyk7XHJcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9faW5kZXgnKTtcclxuXHJcbnZhciByZXF1aXJlcyA9IFtcclxuICAndGVtcGxhdGVzJyxcclxuICAnYXBwLmNvbnRyb2xsZXJzJyxcclxuICAnYXBwLnNlcnZpY2VzJyxcclxuICAnYXBwLmRpcmVjdGl2ZXMnLFxyXG4gICdpb25pYydcclxuXTtcclxuXHJcbndpbmRvdy5hcHAgPSBhbmd1bGFyXHJcbiAgLm1vZHVsZSgnY29udHJvcGFkLmFwcCcsIHJlcXVpcmVzKVxyXG4gIC5jb25zdGFudCgnQXBwU2V0dGluZ3MnLCByZXF1aXJlKCcuL2NvbnN0YW50cycpKVxyXG4gIC5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSlcclxuICAucnVuKHJlcXVpcmUoJy4vb25fcnVuJykpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhcHBUaXRsZTogJ0NvbnRyb3BhZCcsXHJcbiAgYXBpVXJsOiAnL2FwaScsXHJcbiAgd2Vic29ja2V0VXJsOiAnd3M6Ly97aG9zdG5hbWV9OjgxODEnXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdhcHAuY29udHJvbGxlcnMnLCBbJ2lvbmljJ10pO1xyXG5cclxuYnVsayhfX2Rpcm5hbWUsIFsnLi8qKi8hKCpfaW5kZXh8Ki5zcGVjKS5qcyddKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGFwcCA9IHJlcXVpcmUoJy4vX2luZGV4Jyk7XHJcblxyXG4vKipcclxuICogQG5nSW5qZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBDb250cm9sbGVyQ3RybCgkc2NvcGUpIHtcclxuXHJcbn1cclxuXHJcblxyXG5hcHAuY29udHJvbGxlcignQ29udHJvbGxlckN0cmwnLCBDb250cm9sbGVyQ3RybCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBhcHAgPSByZXF1aXJlKCcuL19pbmRleCcpO1xyXG5cclxuLyoqXHJcbiAqIEBuZ0luamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gTWFpbkN0cmwoJHNjb3BlKSB7XHJcblxyXG59XHJcblxyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ01haW5DdHJsJywgTWFpbkN0cmwpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgYnVsayA9IHJlcXVpcmUoJ2J1bGstcmVxdWlyZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XHJcblxyXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XHJcblxyXG5mdW5jdGlvbiBHYW1lcGFkRGlyZWN0aXZlKFNvY2tldFNlcnZpY2UpIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiAnRUEnLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgZ2FtZXBhZElkOiAnPSdcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xyXG5cclxuICAgICAgc2NvcGUubGFzdFN0YXRlID0ge1xyXG4gICAgICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgICAgbGVmdDogZmFsc2UsXHJcbiAgICAgICAgZG93bjogZmFsc2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNjb3BlLm9uR2FtZXBhZFRvdWNoU3RhcnQgPSAoZXYpID0+IHtcclxuICAgICAgICBTb2NrZXRTZXJ2aWNlLnNlbmQoe1xyXG4gICAgICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgICAgICBidXR0b246ICQoZXYudGFyZ2V0KS5kYXRhKCdnYW1lcGFkLWJ1dHRvbicpLFxyXG4gICAgICAgICAgcHJlc3NlZDogdHJ1ZSxcclxuICAgICAgICAgIGlkOiBwYXJzZUludChzY29wZS5nYW1lcGFkSWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzY29wZS5vbkdhbWVwYWRUb3VjaEVuZCA9IChldikgPT4ge1xyXG4gICAgICAgIFNvY2tldFNlcnZpY2Uuc2VuZCh7XHJcbiAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICAgIGJ1dHRvbjogJChldi50YXJnZXQpLmRhdGEoJ2dhbWVwYWQtYnV0dG9uJyksXHJcbiAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcclxuICAgICAgICAgIGlkOiBwYXJzZUludChzY29wZS5nYW1lcGFkSWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAkKGVsZW1lbnQpLmZpbmQoJ1tkYXRhLWdhbWVwYWQtYnV0dG9uXScpXHJcbiAgICAgICAgLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIHNjb3BlLm9uR2FtZXBhZFRvdWNoU3RhcnQpXHJcbiAgICAgICAgLm9uKCd0b3VjaGVuZCBtb3VzZXVwJywgc2NvcGUub25HYW1lcGFkVG91Y2hFbmQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59XHJcblxyXG5kaXJlY3RpdmVzLmRpcmVjdGl2ZSgnZ2FtZXBhZCcsIEdhbWVwYWREaXJlY3RpdmUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XHJcblxyXG5mdW5jdGlvbiBWaXJ0dWFsSm95c3RpY2tEaXJlY3RpdmUoKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgc2NvcGU6IHRydWUsXHJcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cikge1xyXG5cclxuICAgICAgc2NvcGUudmpveXN0aWNrID0gIG5pcHBsZWpzLmNyZWF0ZSh7XHJcbiAgICAgICAgem9uZTogZWxlbWVudFswXSxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59XHJcblxyXG5cclxuZGlyZWN0aXZlcy5kaXJlY3RpdmUoJ3ZpcnR1YWxKb3lzdGljaycsIFZpcnR1YWxKb3lzdGlja0RpcmVjdGl2ZSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBAbmdJbmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE9uQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkaW9uaWNDb25maWdQcm92aWRlcikge1xyXG5cclxuICAvLyRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHJcbiAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3MubWF4Q2FjaGUoMCk7XHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgLnN0YXRlKCdtYWluJywge1xyXG4gICAgICAgICAgdXJsOiAnLycsXHJcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC9tYWluLmh0bWwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xyXG4gICAgICB9KVxyXG4gICAgICAuc3RhdGUoJ2NvbnRyb2xsZXInLCB7XHJcbiAgICAgICAgICB1cmw6ICcvY29udHJvbGxlcicsXHJcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbnRyb2xsZXIvdmlldy5odG1sJyxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdDb250cm9sbGVyQ3RybCdcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT25Db25maWc7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4qIEBuZ0luamVjdFxyXG4qL1xyXG5mdW5jdGlvbiBPblJ1bigkcm9vdFNjb3BlKSB7XHJcbiAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT25SdW47XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBzZXJ2aWNlc01vZHVsZSA9IHJlcXVpcmUoJy4vX2luZGV4LmpzJyk7XHJcblxyXG4vKipcclxuKiBAbmdJbmplY3RcclxuKi9cclxuZnVuY3Rpb24gU29ja2V0U2VydmljZSgkdGltZW91dCwgQXBwU2V0dGluZ3MpIHtcclxuXHJcbiAgdGhpcy5zdWJqZWN0ID0gbmV3IFJ4LlN1YmplY3QoKTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KEFwcFNldHRpbmdzLndlYnNvY2tldFVybC5yZXBsYWNlKCd7aG9zdG5hbWV9Jywgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSk7XHJcblxyXG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKG1zZykgPT4ge1xyXG4gICAgICB0aGlzLnN1YmplY3Qub25OZXh0KEpTT04ucGFyc2UobXNnLmRhdGEpKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IChtc2cpID0+IHtcclxuICAgICAgdGhpcy5zdWJqZWN0Lm9uTmV4dCh7XHJcbiAgICAgICAgYWN0aW9uOiAnJGNoYW5nZWQnLFxyXG4gICAgICAgIGNvbm5lY3RlZDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IChtc2cpID0+IHtcclxuICAgICAgdGhpcy5zdWJqZWN0Lm9uTmV4dCh7XHJcbiAgICAgICAgYWN0aW9uOiAnJGNoYW5nZWQnLFxyXG4gICAgICAgIGNvbm5lY3RlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5saXN0ZW4gPSAoc2NvcGUsIGV2ZW50LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgdmFyIHdyYXBwZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzdWIgPSB0aGlzLnNvY2tldC5nZXRTdHJlYW0oKVxyXG4gICAgICAuZmlsdGVyKChtc2cpID0+IG1zZy5hY3Rpb24gPT09IGV2ZW50KVxyXG4gICAgICAuZm9yRWFjaCgobXNnKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlZENhbGxiYWNrKG1zZyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiBzdWIuZGlzcG9zZSgpKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmlzQ29ubmVjdGVkID0gKCkgPT4gdGhpcy5zb2NrZXQuaXNDb25uZWN0ZWQoKTtcclxuXHJcbiAgdGhpcy5zdWJzY3JpYmUgPSAoc2NvcGUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICB2YXIgc3ViID0gY2FsbGJhY2sodGhpcy5zb2NrZXQuZ2V0U3RyZWFtKCkpO1xyXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHN1Yi5kaXNwb3NlKCkpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMub24gPSAoc2NvcGUsIGV2ZW50LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgdmFyIHN1YiA9IHRoaXMuc29ja2V0XHJcbiAgICAgIC5nZXRTdHJlYW0oKVxyXG4gICAgICAuZmlsdGVyKChtc2cpID0+IG1zZy5hY3Rpb24gPT09IGV2ZW50KVxyXG4gICAgICAuZm9yRWFjaCgobXNnKSA9PiAkdGltZW91dCgoKSA9PiBjYWxsYmFjayhtc2cpKSk7XHJcblxyXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHN1Yi5kaXNwb3NlKCkpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIH1cclxuICAgIHRoaXMuc29ja2V0LnNlbmQoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0KCk7XHJcbn1cclxuXHJcbnNlcnZpY2VzTW9kdWxlLnNlcnZpY2UoJ1NvY2tldFNlcnZpY2UnLCBTb2NrZXRTZXJ2aWNlKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKTtcclxuXHJcbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwidGVtcGxhdGVzXCIsIFtdKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJjb250cm9sbGVyL3ZpZXcuaHRtbFwiLFwiPGlvbi12aWV3IHZpZXctdGl0bGU9XFxcIkRhc2hib2FyZFxcXCI+XFxyXFxuICA8aW9uLWNvbnRlbnQgc2Nyb2xsPVxcXCJmYWxzZVxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxcIj5cXHJcXG4gICAgPGRpdiBnYW1lcGFkIGdhbWVwYWQtaWQ9XFxcIjFcXFwiIGNsYXNzPVxcXCJjb250cm9sbGVyXFxcIj5cXHJcXG4gICAgXHQ8ZGl2IGNsYXNzPVxcXCJjb250cm9sbGVyLWJvZHlcXFwiPlxcclxcbiAgICBcdFx0PGRpdiBjbGFzcz1cXFwiZC1wYWQtY2lyY2xlXFxcIj5cXHJcXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiZC1wYWQtdmVydFxcXCI+XFxyXFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwidG9wIGFycm93XFxcIj48L2Rpdj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJkLXBhZC1taWRkbGUtY2lyY2xlXFxcIj48L2Rpdj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJib3R0b20gYXJyb3dcXFwiPjwvZGl2PlxcclxcbiAgICBcdFx0XHQ8L2Rpdj5cXHJcXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiZC1wYWQtaG9yXFxcIj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJsZWZ0IGFycm93XFxcIj48L2Rpdj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyaWdodCBhcnJvd1xcXCI+PC9kaXY+XFxyXFxuICAgIFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0PC9kaXY+XFxyXFxuICAgIFx0XHQ8ZGl2IGNsYXNzPVxcXCJidXR0b24tY2lyY2xlXFxcIj5cXHJcXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiYnV0dG9uLWdyb3VwIHRvcFxcXCI+XFxyXFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYmx1ZSBhY3Rpb24gcHJlc3NcXFwiIGRhdGEtZ2FtZXBhZC1idXR0b249XFxcIjFcXFwiPlxcclxcblxcclxcbiAgICBcdFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XFxcImdyZWVuIGFjdGlvbiBwcmVzc1xcXCIgZGF0YS1nYW1lcGFkLWJ1dHRvbj1cXFwiMlxcXCI+XFxyXFxuXFxyXFxuICAgIFx0XHRcdFx0PC9kaXY+XFxyXFxuICAgIFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJidXR0b24tZ3JvdXAgYm90dG9tXFxcIj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJ5ZWxsb3cgYWN0aW9uIHByZXNzXFxcIiBkYXRhLWdhbWVwYWQtYnV0dG9uPVxcXCIzXFxcIj5cXHJcXG5cXHJcXG4gICAgXHRcdFx0XHQ8L2Rpdj5cXHJcXG4gICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJyZWQgYWN0aW9uIHByZXNzXFxcIiBkYXRhLWdhbWVwYWQtYnV0dG9uPVxcXCI0XFxcIj5cXHJcXG5cXHJcXG4gICAgXHRcdFx0XHQ8L2Rpdj5cXHJcXG4gICAgXHRcdFx0PC9kaXY+XFxyXFxuICAgIFx0XHQ8L2Rpdj5cXHJcXG4gICAgXHRcdDxkaXYgY2xhc3M9XFxcInNlbGVjdC1idXR0b25cXFwiPlxcclxcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJkaWFnLWJ1dHRvbiBwcmVzc1xcXCIgZGF0YS1nYW1lcGFkLWJ1dHRvbj1cXFwiNVxcXCI+XFxyXFxuXFxyXFxuICAgIFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0PC9kaXY+XFxyXFxuICAgIFx0XHQ8ZGl2IGNsYXNzPVxcXCJzdGFydC1idXR0b25cXFwiPlxcclxcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJkaWFnLWJ1dHRvbiBwcmVzc1xcXCIgZGF0YS1nYW1lcGFkLWJ1dHRvbj1cXFwiNlxcXCI+XFxyXFxuXFxyXFxuICAgIFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0PC9kaXY+XFxyXFxuICAgIFx0XHQ8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj5cXHJcXG4gICAgXHRcdFx0PGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxyXFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwidG9wIHNldFxcXCI+PC9kaXY+XFxyXFxuICAgIFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiYm90dG9tIHNldFxcXCI+PC9kaXY+XFxyXFxuICAgIFx0XHRcdDwvZGl2PlxcclxcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgXHRcdFx0XHQ8c3BhbiBjbGFzcz1cXFwibWFpblxcXCI+U1VQRVIgTklOVEVORE88L3NwYW4+XFxyXFxuICAgIFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcInN1YlxcXCI+RU5URVJUQUlOTUVOVCBTWVNURU08L3NwYW4+XFxyXFxuICAgIFx0XHRcdFx0PHNwYW4gY2xhc3M9XFxcInN1Yi1iZ1xcXCI+PC9zcGFuPlxcclxcbiAgICBcdFx0XHQ8L2Rpdj5cXHJcXG4gICAgXHRcdDwvZGl2PlxcclxcbiAgICBcdDwvZGl2PlxcclxcbiAgICBcdDxkaXYgY2xhc3M9XFxcImxiIGJ1bXBlciBwcmVzc1xcXCIgZGF0YS1nYW1lcGFkLWJ1dHRvbj1cXFwiN1xcXCI+XFxyXFxuICAgIFx0PC9kaXY+XFxyXFxuICAgIFx0PGRpdiBjbGFzcz1cXFwicmIgYnVtcGVyIHByZXNzXFxcIiBkYXRhLWdhbWVwYWQtYnV0dG9uPVxcXCI4XFxcIj48L2Rpdj5cXHJcXG4gICAgXHQ8ZGl2IGNsYXNzPVxcXCJjb250cm9sbGVyLXNoaW5lXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgdmlydHVhbC1qb3lzdGljayBzdHlsZT1cXFwiaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgcG9zaXRpb246IHJlbGF0aXZlXFxcIj50ZXN0PC9kaXY+XFxyXFxuICA8L2lvbi1jb250ZW50PlxcclxcbjwvaW9uLXZpZXc+XFxyXFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGFzaGJvYXJkL21haW4uaHRtbFwiLFwiPGlvbi12aWV3IHZpZXctdGl0bGU9XFxcIkRhc2hib2FyZFxcXCI+XFxyXFxuICA8aW9uLWNvbnRlbnQ+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBkYXNoYm9hcmRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLWxpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImlvbi13cmVuY2hcXFwiPjwvaT48YnI+XFxyXFxuICAgICAgICAgIFNldHRpbmdzXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGJ1dHRvbi1saWdodFxcXCIgdWktc3JlZj1cXFwiY29udHJvbGxlclxcXCI+XFxyXFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJpb24taW9zLWdhbWUtY29udHJvbGxlci1iXFxcIj48L2k+PGJyPlxcclxcbiAgICAgICAgICBDb250cm9sbGVyXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2lvbi1jb250ZW50PlxcclxcbjwvaW9uLXZpZXc+XFxyXFxuXCIpO31dKTsiLCJmdW5jdGlvbiBsYXVuY2hJbnRvRnVsbHNjcmVlbihlbGVtZW50KSB7XHJcbiAgaWYoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gIH0gZWxzZSBpZihlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgfSBlbHNlIGlmKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICB9IGVsc2UgaWYoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICB9XHJcbn1cclxuIl19

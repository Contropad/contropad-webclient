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

({"home":require("./home.js")});

},{"./home.js":"/home/rovak/workspace/contropad-node-server/assets/app/controllers/home.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/controllers/home.js":[function(require,module,exports){
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

({"controller":require("./controller.js")});

},{"./controller.js":"/home/rovak/workspace/contropad-node-server/assets/app/directives/controller.js"}],"/home/rovak/workspace/contropad-node-server/assets/app/directives/controller.js":[function(require,module,exports){
"use strict";

var directives = require("./_index.js");

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
  $templateCache.put("dashboard/main.html", "<ion-view view-title=\"Punten\">\n    <ion-content>\n        <h1>Home</h1>\n    </ion-content>\n</ion-view>\n");
}]);

},{}]},{},["./assets/app/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvbWFpbi5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9jb25zdGFudHMuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvY29udHJvbGxlcnMvX2luZGV4LmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL2NvbnRyb2xsZXJzL2hvbWUuanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy9faW5kZXguanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvZGlyZWN0aXZlcy9jb250cm9sbGVyLmpzIiwiL2hvbWUvcm92YWsvd29ya3NwYWNlL2NvbnRyb3BhZC1ub2RlLXNlcnZlci9hc3NldHMvYXBwL29uX2NvbmZpZy5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9vbl9ydW4uanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvc2VydmljZXMvU29ja2V0U2VydmljZS5qcyIsIi9ob21lL3JvdmFrL3dvcmtzcGFjZS9jb250cm9wYWQtbm9kZS1zZXJ2ZXIvYXNzZXRzL2FwcC9zZXJ2aWNlcy9faW5kZXguanMiLCIvaG9tZS9yb3Zhay93b3Jrc3BhY2UvY29udHJvcGFkLW5vZGUtc2VydmVyL2Fzc2V0cy9hcHAvdGVtcGxhdGVz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QUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVwRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDOzs7OztBQ04vQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLGNBQWMsRUFBRTtBQUFDLGdCQUFjLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLCtHQUErRyxDQUFDLENBQUM7Q0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIGFuZ3VsYXIgbW9kdWxlc1xucmVxdWlyZSgnLi90ZW1wbGF0ZXMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvX2luZGV4Jyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL19pbmRleCcpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzL19pbmRleCcpO1xuXG52YXIgcmVxdWlyZXMgPSBbXG4gICd0ZW1wbGF0ZXMnLFxuICAnYXBwLmNvbnRyb2xsZXJzJyxcbiAgJ2FwcC5zZXJ2aWNlcycsXG4gICdhcHAuZGlyZWN0aXZlcycsXG4gICdpb25pYydcbl07XG5cbndpbmRvdy5hcHAgPSBhbmd1bGFyXG4gIC5tb2R1bGUoJ2NvbnRyb3BhZC5hcHAnLCByZXF1aXJlcylcbiAgLmNvbnN0YW50KCdBcHBTZXR0aW5ncycsIHJlcXVpcmUoJy4vY29uc3RhbnRzJykpXG4gIC5jb25maWcocmVxdWlyZSgnLi9vbl9jb25maWcnKSlcbiAgLnJ1bihyZXF1aXJlKCcuL29uX3J1bicpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcFRpdGxlOiAnQ29udHJvcGFkJyxcbiAgYXBpVXJsOiAnL2FwaSdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWxrID0gcmVxdWlyZSgnYnVsay1yZXF1aXJlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFsnaW9uaWMnXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL19pbmRleCcpO1xuXG4vKipcbiAqIEBuZ0luamVjdFxuICovXG5mdW5jdGlvbiBNYWluQ3RybCgkc2NvcGUpIHtcblxufVxuXG5cbmFwcC5jb250cm9sbGVyKCdNYWluQ3RybCcsIE1haW5DdHJsKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmRpcmVjdGl2ZXMnLCBbXSk7XG5cbmJ1bGsoX19kaXJuYW1lLCBbJy4vKiovISgqX2luZGV4fCouc3BlYykuanMnXSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkaXJlY3RpdmVzID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmdJbmplY3RcbiAqL1xuZnVuY3Rpb24gT25Db25maWcoJHN0YXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRpb25pY0NvbmZpZ1Byb3ZpZGVyKSB7XG5cbiAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgJGlvbmljQ29uZmlnUHJvdmlkZXIudmlld3MubWF4Q2FjaGUoMCk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICAgICAgdXJsOiAnLycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQvbWFpbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uQ29uZmlnO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiogQG5nSW5qZWN0XG4qL1xuZnVuY3Rpb24gT25SdW4oJHJvb3RTY29wZSkge1xuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPblJ1bjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNlcnZpY2VzTW9kdWxlID0gcmVxdWlyZSgnLi9faW5kZXguanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1bGsgPSByZXF1aXJlKCdidWxrLXJlcXVpcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNlcnZpY2VzJywgW10pO1xuXG5idWxrKF9fZGlybmFtZSwgWycuLyoqLyEoKl9pbmRleHwqLnNwZWMpLmpzJ10pO1xuIiwiYW5ndWxhci5tb2R1bGUoXCJ0ZW1wbGF0ZXNcIiwgW10pLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImRhc2hib2FyZC9tYWluLmh0bWxcIixcIjxpb24tdmlldyB2aWV3LXRpdGxlPVxcXCJQdW50ZW5cXFwiPlxcbiAgICA8aW9uLWNvbnRlbnQ+XFxuICAgICAgICA8aDE+SG9tZTwvaDE+XFxuICAgIDwvaW9uLWNvbnRlbnQ+XFxuPC9pb24tdmlldz5cXG5cIik7fV0pOyJdfQ==

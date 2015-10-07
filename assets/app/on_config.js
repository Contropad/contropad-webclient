'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $ionicConfigProvider) {

  //$locationProvider.html5Mode(true);

  $ionicConfigProvider.views.maxCache(0);

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('main', {
          url: '/',
          templateUrl: 'dashboard/main.html',
          controller: 'MainCtrl'
      })
      .state('controller', {
          url: '/controller',
          templateUrl: 'controller/view.html',
          controller: 'ControllerCtrl'
      });
}

module.exports = OnConfig;

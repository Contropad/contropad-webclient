'use strict';

var servicesModule = require('./_index.js');

/**
* @ngInject
*/
function SocketService($timeout, AppSettings) {

  this.subject = new Rx.Subject();

  this.connect = () => {
    this.socket = new ReconnectingWebSocket(AppSettings.websocketUrl);

    this.socket.onmessage = (msg) => {
      this.subject.onNext(JSON.parse(msg.data));
    };

    this.socket.onclose = (msg) => {
      this.subject.onNext({
        action: '$changed',
        connected: false
      });
    };

    this.socket.onopen = function(msg) {
      this.subject.onNext({
        action: '$changed',
        connected: true
      });
    };
  };

  this.listen = (scope, event, callback) => {
    var wrappedCallback = function() {
      var args = arguments;
      $timeout(() => {
        callback.apply(this, args);
      });
    },
    sub = this.socket.getStream()
      .filter((msg) => msg.action === event)
      .forEach((msg) => {
        wrappedCallback(msg);
      });

    scope.$on('$destroy', () => sub.dispose());
  };

  this.isConnected = () => this.socket.isConnected();

  this.subscribe = (scope, callback) => {
    var sub = callback(this.socket.getStream());
    scope.$on('$destroy', () => sub.dispose());
  };

  this.on = (scope, event, callback) => {
    var sub = this.socket
      .getStream()
      .filter((msg) => msg.action === event)
      .forEach((msg) => $timeout(() => callback(msg)));

    scope.$on('$destroy', () => sub.dispose());
  };

  this.connect();
}

servicesModule.service('SocketService', SocketService);

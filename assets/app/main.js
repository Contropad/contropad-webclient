'use strict';

// angular modules
require('./utils');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

var requires = [
  'templates',
  'app.controllers',
  'app.services',
  'app.directives',
  'ionic'
];

window.app = angular
  .module('contropad.app', requires)
  .constant('AppSettings', require('./constants'))
  .config(require('./on_config'))
  .run(require('./on_run'));

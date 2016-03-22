(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('wheather', ['ngRoute','blockUI']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise( {
                              redirectTo: '/',
                              templateUrl: 'wheather/wheather.html',
                              controller: 'wheatherController',
                              controllerAs: 'vm'
                            });
  }]);
})();

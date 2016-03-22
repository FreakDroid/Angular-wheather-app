(function(){
  'use strict';

  angular.module("wheather").constant('api', {
    'endpoint' : 'http://api.openweathermap.org/data/2.5/weather?q=',
    'cb' : '&callback=JSON_CALLBACK',
    'units' : '&units=metric',
    'appid' : "&APPID=061f24cf3cde2f60644a8240302983f2",
    'getLockEndpoint' : 'http://ipinfo.io/json?callback=JSON_CALLBACK'
  }).factory('wheatherFactory', wikiFactory);

  function wikiFactory($http, api) {
    //Patron Modular.
      return {
        getLoc:function() {
          return $http.jsonp(api.getLockEndpoint);
        },

        getCurrent:function(city) {
          return $http.jsonp(api.endpoint + city + api.units+ api.appid + api.cb);
        },
    };
  }
})();

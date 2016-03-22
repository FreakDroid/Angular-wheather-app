(function(){
  'use strict';

  angular.module("wheather").constant( "page" , 'http://en.wikipedia.org/?curid=')
  .controller('wheatherController', wheatherController);

  wheatherController.$inject = [ "$timeout", 'wheatherFactory', 'page', "blockUI"];

  //Creando la funcion no anonima para mi controller
  function wheatherController($timeout, wheatherFactory, page, blockUI) {

    var vm = this;

    vm.Data = {};
    vm.Data.unit ='C';
    vm.Data.sysChange = false;

    ///Getting my location;
    wheatherFactory.getLoc().success(function(data) {
      var city = data.city + ',' + data.country;
      vm.Data.city = data.city;
      vm.Data.country = data.country;
      wheatherFactory.getCurrent(city).success(function(data) {
        CurrentWeather(data)
      });
    });


    //My function Wheater
    function CurrentWeather(data) {
      vm.Data.temp = Math.round(data.main.temp);
      vm.Data.Cel = Math.round(data.main.temp);
      vm.Data.des = data.weather[0].main;
      vm.Data.Fah = Math.round( (vm.Data.temp * 9)/5 + 32 );
      return IconGen(vm.Data.des);
    }


    //Icon to show
    function IconGen(city) {
      var city = city.toLowerCase()
      switch (city) {
        case 'dizzle':
          addIcon(city)
          break;
        case 'clouds':
          addIcon(city)
          break;
        case 'rain':
          addIcon(city)
          break;
        case 'snow':
          addIcon(city)
          break;
        case 'clear':
          addIcon(city)
          break;
        case 'thunderstom':
          addIcon(city)
          break;
        default:
      $('div.clouds').removeClass('hide');
      }
    }

    function addIcon(city) {
      $('div.' + city).removeClass('hide');
    }

    vm.Data.sys= sys;

    //Checking Celcuis or Fat
    function sys(){
     if(vm.Data.sysChange){
       vm.Data.unit ='C';
       vm.Data.temp = vm.Data.Cel;
       return vm.Data.sysChange = false;
       }
      vm.Data.unit ='F';
      vm.Data.temp = vm.Data.Fah;
      return vm.Data.sysChange = true;
    }

    }
})();

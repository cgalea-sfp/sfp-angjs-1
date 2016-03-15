(function() {
  'use strict';

  angular.module('my-app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/home.view.html'
    })
    .state('greeting', {
      url: '/greeting',
      templateUrl: 'app/greeting.view.html',
      controller: 'GreetingController as vm'
    })
    .state('tab', {
      url: '/tab',
      templateUrl: 'app/tab.view.html',
      controller: 'TabController as vm'
    });
  }
})();

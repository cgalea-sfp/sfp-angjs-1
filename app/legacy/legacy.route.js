(function() {
  'use strict';

  angular.module('legacy').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/legacy/home.view.html'
    })
    .state('greeting', {
      url: '/greeting',
      templateUrl: 'app/legacy/greeting.view.html',
      controller: 'GreetingController as vm'
    })
    .state('tab', {
      url: '/tab',
      templateUrl: 'app/legacy/tab.view.html',
      controller: 'TabController as vm'
    });
  }
})();

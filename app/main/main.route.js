(function() {
  'use strict';

  angular.module('main').config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/greeting');

    $stateProvider
      .state('greeting', {
        url: '/greeting',
        templateUrl: 'app/main/greeting.view.html',
        controller: 'GreetingController as vm',
      })
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/main/detail.view.html',
        controller: 'DetailController as vm'
      })
      .state('tab', {
        url: '/tab',
        templateUrl: 'app/main/tab.view.html',
        controller: 'TabController as vm'
      });
  }

})();

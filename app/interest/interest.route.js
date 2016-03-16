(function () {
  'use strict';

  angular.module('interest').config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('interestlist', {
        url: '/interest-list',
        templateUrl: 'app/interest/interestlist.view.html',
        controller: 'InterestListController as vm'
      })
      .state('addeditinterest', {
        url: '/addedit-interest',
        templateUrl: 'app/interest/addeditinterest.view.html',
        controller: 'AddEditInterestController as vm'
      });
  }

})();

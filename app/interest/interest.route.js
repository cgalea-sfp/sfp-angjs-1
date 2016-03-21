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
      .state('addinterest', {
        url: '/addedit-interest/',
        templateUrl: 'app/interest/addeditinterest.view.html',
        controller: 'AddEditInterestController as vm'
      })
      .state('editinterest', {
        url: '/addedit-interest/:id',
        templateUrl: 'app/interest/addeditinterest.view.html',
        controller: 'AddEditInterestController as vm'
      })
      .state('displayInterest', {
        url: '/display-interest',
        templateUrl: 'app/interest/displayInterest.view.html',
        controller: 'InterestListController as vm'
      });
  }

})();

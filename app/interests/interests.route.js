(function() {
  'use strict';

  angular.module('interests').config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/greeting');

    $stateProvider
      .state('interests', {
        url: '/interests',
        templateUrl: 'app/interests/interests.view.html',
        controller: 'InterestsController as vm'
      })
      .state('interests-add', {
        url: '/interests/add',
        templateUrl: 'app/interests/addedit.interests.view.html',
        controller: 'InterestsAddEditController as vm'
      })
      .state('interests-edit', {
        url: '/interests/edit/:id',
        templateUrl: 'app/interests/addedit.interests.view.html',
        controller: 'InterestsAddEditController as vm'
      });
  }

})();

(function() {
  'use strict';

  angular.module('employee').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('employee', {
      url: '/employee',
      templateUrl: '/app/employee/employee.view.html',
      controller: 'EmployeeController as vm'
    });
  }
})();

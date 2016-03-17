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
    })
    .state('addEmployee', {
      url: '/employee/add',
      templateUrl: '/app/employee/addemployee.view.html',
      controller: 'AddEmployeeController as vm'
    })
    .state('editEmployee', {
      url: '/employee/edit/:id',
      templateUrl: '/app/employee/addemployee.view.html',
      controller: 'AddEmployeeController as vm'
    });
  }
})();

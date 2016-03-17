(function() {
  'use strict';

  angular.module('employee').factory('EmployeeService', EmployeeService);

  function EmployeeService() {
    var service = {};

    var employeeList = [{
      id: 1,
      firstName: 'Cristi',
      lastName: 'Galea',
      age: 25
    }, {
      id: 2,
      firstName: 'Cornel',
      lastName: 'Urian',
      age: 30
    }, {
      id: 3,
      firstName: 'Ioan',
      lastName: 'Ferezan',
      age: 29
    }];

    service.getEmployeeList = getEmployeeList;
    service.getEmployeeById = getEmployeeById;
    service.addEmployee = addEmployee;

    return service;

    function getEmployeeList() {
      return employeeList;
    }

    function getEmployeeById(employeeId) {
      for (var i = 0; i < employeeList.length; i++) {
        if(employeeList[i].id == employeeId) {
          return employeeList[i];
        }
      }
      return false;
    }

    function addEmployee(newEmployee) {
      employeeList.push(newEmployee);
    }
  }
})();

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
    service.editEmployee = editEmployee;
    service.deleteEmployee = deleteEmployee;

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
      newEmployee.id = genereateId();
      employeeList.push(newEmployee);
    }

    function editEmployee(curentEmployee) {
      for (var i = 0; i < employeeList.length; i++) {
        if(employeeList[i].id == curentEmployee.id) {
          employeeList[i] = curentEmployee;
          return true;
        }
      }
      return false;
    }

    function deleteEmployee(employeeId) {
      var index = -1;
      for (var i = 0; i < employeeList.length; i++) {
        if(employeeList[i].id == employeeId) {
          index = i;
        }
      }

      if (index != -1) {
        employeeList.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }

    function genereateId() {
      return employeeList.length + 1;
    }
  }
})();

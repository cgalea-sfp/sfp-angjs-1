(function () {
  'use strict'

  angular.module('main').service('EmployeeService', EmployeeService);

  function EmployeeService() {
    var service = {
      getEmployeeData: getEmployeeData
    };

    var employeeData = {
      team: "Architects",
      floor: 1,
      project: "Awesome"
    };

    function getEmployeeData () {
      return employeeData;
    }
    return service;
  }
})();

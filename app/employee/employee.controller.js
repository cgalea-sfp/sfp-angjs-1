(function() {
  'use strict';

  angular.module('employee').controller('EmployeeController', EmployeeController);

  EmployeeController.$inject = ['EmployeeService'];


  function EmployeeController(EmployeeService) {
    var vm = this;
    vm.employeeList = EmployeeService.getEmployeeList();

    vm.deleteEmployee = deleteEmployee;

    function deleteEmployee(id) {
      EmployeeService.deleteEmployee(id);
    }
  }
})();

(function() {
  'use strict';

  angular.module('employee').controller('AddEmployeeController', AddEmployeeController);

  AddEmployeeController.$inject = ['$state', 'EmployeeService'];

  function AddEmployeeController($state, EmployeeService){
    var vm = this;
    vm.employee = {};
    vm.pageName = "Add";
    vm.addEmployee = addEmployee;
    var isEdit = $state.params.id;

    if (isEdit) {
      vm.pageName = "Edit";
      vm.employee = angular.copy(EmployeeService.getEmployeeById($state.params.id));
    }

    function addEmployee() {
      console.log(vm.employee);
      if (isEdit) {
        EmployeeService.editEmployee(vm.employee);
      } else {
        EmployeeService.addEmployee(vm.employee);
      }

      $state.go('employee');
    }
  }
})();

(function () {
  'use strict'

  angular.module('main').controller('GreetingController', GreetingController);

  GreetingController.$inject = ['DetailService', 'EmployeeService'];

  function GreetingController(DetailService, EmployeeService) {
    var vm = this;
    var currentDate = new Date();

    vm.name = DetailService.getName();
    vm.startYear = DetailService.calculateTimeInSFP(currentDate.getFullYear());
    vm.employeeData = EmployeeService.getEmployeeData();

    vm.toggleEmployeeInfoString = toggleEmployeeInfoString;

    function toggleEmployeeInfoString() {
      vm.showEmployeeInfoString = !vm.showEmployeeInfoString;
    }
  }
})();

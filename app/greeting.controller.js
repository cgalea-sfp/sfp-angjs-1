angular.module('my-app').controller('GreetingController', GreetingController);

function GreetingController() {
  var vm = this;

  vm.name = "Cristi";
  vm.startYear = 2013;
  vm.employeeData = {
    team: "Architects",
    floor: 1,
    project: "Awesome"
  };

  vm.toggleEmployeeInfoString = toggleEmployeeInfoString;


  function toggleEmployeeInfoString() {
    vm.showEmployeeInfoString = !vm.showEmployeeInfoString;
  }
}

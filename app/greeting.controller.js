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
  vm.getEmployeeInfoString = getEmployeeInfoString;


  function getEmployeeInfoString() {
    vm.employeeInfoString = "I am part of team " + vm.employeeData.team + " located at the " + vm.employeeData.floor + " floor and I am currently working on project " + vm.employeeData.project;
  }
}

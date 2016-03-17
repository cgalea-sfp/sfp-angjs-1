(function() {
  'use strict';

  angular.module('employee').controller('EmployeeController', EmployeeController);

  function EmployeeController() {
    var vm = this;
    console.log('this is working');
  }
})();

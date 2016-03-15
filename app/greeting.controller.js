(function() {
  'use strict';

  angular.module('my-app').controller('GreetingController', GreetingController);

  GreetingController.$inject = ['InterestService'];

  function GreetingController(InterestService) {
    var vm = this;
    vm.name = 'Cristi';
    vm.personalInfo = {
      age: 25,
      gender: 'm'
    };
    vm.togglePersonalInfo = togglePersonalInfo;
    vm.alertInfo = alertInfo;
    vm.isVisible = true;

    vm.interests = InterestService.getInterestList();

    function alertInfo(param) {
      alert(JSON.stringify(param));
    }

    function togglePersonalInfo() {
      vm.isVisible = !vm.isVisible;
    }
  }
})();

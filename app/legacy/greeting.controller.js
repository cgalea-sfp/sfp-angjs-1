(function() {
  'use strict';

  angular.module('legacy').controller('GreetingController', GreetingController);

  GreetingController.$inject = ['InterestService', 'MessagesService'];

  function GreetingController(InterestService, MessagesService) {
    var vm = this;
    vm.name = InterestService.getName();
    vm.personalInfo = InterestService.getPersonalInfo();
    vm.togglePersonalInfo = togglePersonalInfo;
    vm.alertInfo = alertInfo;
    vm.isVisible = true;

    vm.message = MessagesService.getCurrentMessage();
    vm.interests = InterestService.getInterestList();

    function alertInfo(param) {
      alert(JSON.stringify(param));
    }

    function togglePersonalInfo() {
      vm.isVisible = !vm.isVisible;
    }
  }
})();

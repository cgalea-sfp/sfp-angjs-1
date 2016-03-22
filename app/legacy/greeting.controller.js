(function() {
  'use strict';

  angular.module('legacy').controller('GreetingController', GreetingController);

  GreetingController.$inject = ['InterestOldService', 'MessagesService'];

  function GreetingController(InterestOldService, MessagesService) {
    var vm = this;
    vm.name = InterestOldService.getName();
    vm.personalInfo = InterestOldService.getPersonalInfo();
    vm.togglePersonalInfo = togglePersonalInfo;
    vm.alertInfo = alertInfo;
    vm.isVisible = true;

    vm.message = MessagesService.getCurrentMessage();
    vm.interests = InterestOldService.getInterestList();

    function alertInfo(param) {
      alert(JSON.stringify(param));
    }

    function togglePersonalInfo() {
      vm.isVisible = !vm.isVisible;
    }
  }
})();

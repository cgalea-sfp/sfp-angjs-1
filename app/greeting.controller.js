(function () {
  'use strict';
  angular.module('my-app').controller('GreetingController', GreetingController);

GreetingController.$inject = ['InterestService', 'PersinfoService'];

  function GreetingController(InterestService, PersinfoService) {
    var vm = this;

    vm.name = PersinfoService.getName();
    vm.startYear = PersinfoService.getStartYear();
    vm.info = PersinfoService.getInfo();
    vm.toggleInfo = toggleInfo;
    vm.interests = InterestService.getInterests();


    function toggleInfo() {
      vm.show = !vm.show;
    }
  }

})();

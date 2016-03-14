(function () {
  'use strict';
  angular.module('my-app').controller('InterestController', InterestController);

InterestController.$inject = ['InterestService', 'PersinfoService'];

  function InterestController(InterestService, PersinfoService) {
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

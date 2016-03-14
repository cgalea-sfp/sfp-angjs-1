(function () {
  'use strict';
  angular.module('my-app').controller('GreetingController', GreetingController);

GreetingController.$inject = ['InterestService'];

  function GreetingController(InterestService) {
    var vm = this;
    vm.name = "Cristi";
    vm.startYear = 2013;
    vm.info = {
      team: 'Architects',
      role: 'JsArch',
      num_members: 5
    };
    vm.toggleInfo = toggleInfo;
    vm.interests = InterestService.getInterests();


    function toggleInfo() {
      vm.show = !vm.show;
    }
  }

})();

(function() {
  'use strict';
  angular.module('interest').controller('InterestListController', InterestListController);

  InterestListController.$inject = ['InterestManagementService'];

  function InterestListController(InterestManagementService) {
    var vm = this;
    vm.interestlist = InterestManagementService.getInterests();
    console.log('it works');
  }
})();

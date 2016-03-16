(function() {
  'use strict';
  angular.module('interest').controller('AddEditInterestController', AddEditInterestController);

  AddEditInterestController.$inject = ['InterestManagementService', '$state'];

  function AddEditInterestController(InterestManagementService, $state) {
    var vm = this;
    console.log('it works');
    vm.currentInterest = {};
    vm.saveInterest = saveInterest;
    var isEdit = $state.params.id;
    vm.pageTitle = isEdit ? 'Edit' : 'Add';

    if (isEdit) {
      vm.currentInterest = InterestManagementService.getInterestById($state.params.id);
    }
    function saveInterest() {
      if (isEdit) {
        InterestManagementService.editInterest(vm.currentInterest);
      } else {
        InterestManagementService.addInterest(vm.currentInterest);
      }

      $state.go("interestlist");
    }
  }
})();

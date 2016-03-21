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
    vm.isFinishedLoading = false;
    vm.pageTitle = isEdit ? 'Edit' : 'Add';

    if (isEdit) {

      InterestManagementService.getInterestById($state.params.id).then(function(result) {
        vm.currentInterest = result.data.data;
        vm.isFinishedLoading = true;
      }, function(error) {
        alert(error.data.message);
      });
    }
    function saveInterest() {
      if (isEdit) {
        InterestManagementService.editInterest(vm.currentInterest).then(function(result) {
          if(result.data.success) {
            $state.go("interestlist");
          } else {
            alert('There was an error: '+ result.data.message);
          }
        }, function(error) {
          alert(error.data.message);
        });
      } else {
        InterestManagementService.addInterest(vm.currentInterest).then(function(result) {
          if(result.data.success) {
            $state.go("interestlist");
          } else {
            alert('There was an error: '+ result.data.message);
          }
        }, function(error) {
          alert(error.data.message);
        });
      }


    }
  }
})();

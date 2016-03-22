(function() {
  'use strict';

  angular.module('interests').controller('InterestsAddEditController', InterestsAddEditController);

  InterestsAddEditController.$inject = ['InterestsService', '$state'];

  function InterestsAddEditController(InterestsService, $state) {
    var vm = this;
    var isEdit = $state.params.id;
    vm.pageName = isEdit ? 'Edit' : 'Add';
    vm.save = save;

    if (isEdit) {

      InterestsService.getInterestById($state.params.id).then(function(result){
        if (result.data.success) {
          vm.interest = result.data.data;
        } else {
          alert(result.data.message);
        }

      }, function(error) {
        alert(error.message);
      });
    }

    function save(e) {
      e.preventDefault();
      console.log('This will save the items');
      var interest = {
        id: vm.interest.id,
        name: vm.interest.name || '',
        level: vm.interest.level || 'Beginner',
        isImproving: vm.interest.isImproving || false
      };
      if (isEdit) {
        InterestsService.editInterest(interest).then(function(result) {
          if (result.data.success) {
            $state.go('interests');
          } else {
            alert(result.data.message);
          }
        }, function(error) {
          alert(error.message);
        });
      } else {
        InterestsService.addInterest(interest).then(function(result) {
          if (result.data.success) {
            $state.go('interests');
          } else {
            alert(result.data.message);
          }
        }, function(error) {
          alert(error.message);
        });
      }

    }
  }
})();

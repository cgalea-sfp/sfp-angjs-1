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
      vm.interest = InterestsService.getInterestById($state.params.id);
    }

    function save(e) {
      e.preventDefault();
      console.log('This will save the items');
      var interest = {
        name: vm.interest.name || '',
        level: vm.interest.level || 'Beginner',
        isImproving: vm.interest.isImproving || false
      };
      if (isEdit) {
        InterestsService.editInterest(interest);
      } else {
        InterestsService.addInterest(interest);
      }
      $state.go('interests');
    }
  }
})();

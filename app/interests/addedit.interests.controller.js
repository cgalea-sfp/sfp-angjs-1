(function() {
  'use strict';

  angular.module('interests').controller('InterestsAddEditController', InterestsAddEditController);

  InterestsAddEditController.$inject = ['InterestsService', '$state'];

  function InterestsAddEditController(InterestsService, $state) {
    var vm = this;
    vm.pageName = $state.params.id ? 'Edit' : 'Add';
    vm.save = save;

    function save(e) {
      e.preventDefault();
      console.log('This will save the items');
      var interest = {
        name: vm.interest.name || '',
        level: vm.interest.level || 'Beginner',
        isImproving: vm.interest.isImproving || false
      };
      InterestsService.addInterest(interest);
      $state.go('interests');
    }
  }
})();

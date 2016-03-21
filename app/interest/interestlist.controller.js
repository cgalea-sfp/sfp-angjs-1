(function() {
  'use strict';
  angular.module('interest').controller('InterestListController', InterestListController);

  InterestListController.$inject = ['$state', 'InterestManagementService'];

  function InterestListController($state, InterestManagementService) {
    var vm = this;

    InterestManagementService.getInterests().then(function(result) {
      vm.interestlist = result.data.data;
    }, function(error) {
      alert(error.data.message);
    });
    console.log('it works');
    vm.deleteItem = deleteItem;

    function deleteItem(e, id) {
      e.stopPropagation();
      InterestManagementService.deleteInterest(id).then(function(result) {
        if (result.data.success) {
          console.log('it worked');
          $state.go($state.current, {}, {reload: true});
        } else {
          alert('There was an error: ' + result.data.message);
        }
      }, function(error) {
        alert(error.data.message);
      });
    }
  }
})();

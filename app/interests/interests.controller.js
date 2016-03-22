(function() {
  'use strict';

  angular.module('interests').controller('InterestsController', InterestsController);

  InterestsController.$inject = ['InterestsService', '$state'];

  function InterestsController(InterestsService, $state) {
    var vm = this;
    vm.names = ['Soimu', 'Cornel', 'Cristi', 'Ani'];
    InterestsService.getInterests().then(function(result) {
      vm.interests = result.data.data;

    }, function(error) {
      alert(error.message);
    });

    vm.delteItem = delteItem;

    function delteItem(e, id) {
      e.stopPropagation();
      console.log('This will delete the item with id: ', id);
      InterestsService.removeInterest(id).then(function(result) {
        if (result.data.success) {
          $state.go($state.current, {}, {reload: true});
        } else {
          alert(result.data.message);
        }
      }, function(error) {
        alert(error.message);
      });
    }
  }
})();

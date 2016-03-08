(function () {
  'use strict'

  angular.module('interests').controller('InterestsController', InterestsController);

  InterestsController.$inject = ['InterestsService', '$state'];

  function InterestsController(InterestsService, $state) {
    var vm = this;
    vm.interests = InterestsService.getInterests();
    vm.delteItem = delteItem;

    function delteItem(e, id) {
      e.stopPropagation();
      console.log('This will delete the item with id: ', id);
    }
  }
})();

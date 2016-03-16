(function () {
  'use strict';

  angular.module('old').controller('TabController', TabController);

  function TabController() {
    var vm = this;
    vm.activeTab = 't1';

    vm.toggleTab = toggleTab;
    vm.isDesigner = false;

    function toggleTab(newTab) {
      vm.activeTab = newTab;
    }
  }
})();

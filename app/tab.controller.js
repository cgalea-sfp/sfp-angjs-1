(function() {
  'use strict';

  angular.module('my-app').controller('TabController', TabController);

  function TabController() {
    var vm = this;
    var currentTab = 't1';

    vm.getTab = getTab;
    vm.setTab = setTab;

    function getTab() {
      return currentTab;
    }

    function setTab(newTab) {
      currentTab = newTab;
    }
  }
})();

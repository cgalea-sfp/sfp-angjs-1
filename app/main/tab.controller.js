(function () {
  'use strict'

  angular.module('main').controller('TabController', TabController);

  TabController.$inject = ['TabService'];

  function TabController(TabService) {
    var vm = this;
    var currentTab = TabService.getDefaultTab();
    vm.availableTabs = TabService.getAvailableTabs();

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

angular.module('my-app').controller('TabController', TabController);

function TabController() {
  var vm = this;
  var currentTab = 'JS';

  vm.getTab = getTab;
  vm.setTab = setTab;

  function getTab() {
    return currentTab;
  }
  function setTab(newTab) {
    currentTab = newTab;
  }

}

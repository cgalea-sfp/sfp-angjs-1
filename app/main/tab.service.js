(function () {
  'use strict'

  angular.module('main').service('TabService', TabService);

  function TabService() {
    var service = {
      getDefaultTab: getDefaultTab,
      getAvailableTabs: getAvailableTabs
    };
    var tabValues = {
      javascript: 'JS',
      angularjs: 'ANG',
      nodejs: 'NOD'
    };
    var defaultTab = tabValues.javascript;

    function getDefaultTab() {
      return defaultTab;
    }

    function getAvailableTabs() {
      return tabValues;
    }
    return service;
  }
})();

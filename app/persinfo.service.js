(function () {
  angular.module('my-app').factory('PersinfoService', PersinfoService);

  function PersinfoService() {
    var service = {};
    var name = 'Cristi';
    var startYear = 2013;
    var info = {
      team: 'Architects',
      role: 'JsArch',
      num_members: 5
    };

    service.getInfo = getInfo;
    service.getName = getName;
    service.getStartYear = getStartYear;
    service.setName = setName;

    return service;

    function getInfo() {
      return info;
    }

    function getName() {
      return name;
    }

    function setName(newName) {
      name = newName;
    }

    function getStartYear() {
      return startYear;
    }
  }
})();

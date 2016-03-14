(function () {
  angular.module('my-app').factory('InterestService', InterestService);

  function InterestService() {
    var interests = [{
      name: 'JavaScript',
      level: 'advanced'
    }, {
      name: 'AngularJS',
      level: 'beginner'
    }, {
      name: 'Node',
      level: 'intermediate'
    }];

    return {
      getInterests: getInterests
    };

    function getInterests() {
      return interests;
    }
  }
})();

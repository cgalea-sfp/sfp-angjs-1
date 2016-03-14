(function () {

  angular.module('my-app').config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home.view.html',
        controller: 'HomeController as vm'
      })
      .state('interests', {
        url: '/interests',
        templateUrl: 'app/interest.view.html',
        controller: 'InterestController as vm'
      })
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'app/tab.view.html',
        controller: 'TabController as vm'
      });
  }

})();

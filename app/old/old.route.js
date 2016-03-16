(function () {

  angular.module('old').config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/old/home.view.html',
        controller: 'HomeController as vm'
      })
      .state('interests', {
        url: '/interests',
        templateUrl: 'app/old/interest.view.html',
        controller: 'InterestController as vm'
      })
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'app/old/tab.view.html',
        controller: 'TabController as vm'
      });
  }

})();

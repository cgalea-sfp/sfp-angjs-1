(function () {
  angular.module('old').controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.message = 'Hello from home';
  }
})();

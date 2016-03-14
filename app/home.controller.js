(function () {
  angular.module('my-app').controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.message = 'Hello from home';
  }
})();

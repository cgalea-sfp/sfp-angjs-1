(function() {
  'use strict';

  angular.module('legacy').factory('MessagesService', MessagesService);

  function MessagesService() {
    return {
      getCurrentMessage: getCurrentMessage
    };

    function getCurrentMessage() {
      return 'Hello from Messages Service';
    }
  }
})();

(function() {
  angular
  .module('nourish.services', [
  ])
  .factory('Stores', function($http) {
    var getAllStores = function () {
      console.log('in service')
      return $http({
        method: 'GET',
        url: 'api/stores'
      })

    }

    return {
      getAllStores: getAllStores
    }
  });

  

}).call(this);

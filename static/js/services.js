(function() {
  angular
  .module('nourish.services', [
  ])
  .factory('Stores', function($http, $log) {
    var getAllStores = function () {
      return $http({
        method: 'GET',
        url: 'api/stores'
      })

    }

    var createStore = function (store) {
      return $http({
        method:'POST',
        url: 'api/stores/',
        data: store
      }).success(function(data) {
          return $log.info("Succesfully added store");
      }).error(function(data) {
          return $log.info("Failure to add store.");
      });
    }

    return {
      getAllStores: getAllStores,
      createStore: createStore
    }
  })

  .factory('Items', function($http) {
    var getAllItems = function () {
      return $http({
        method: 'GET',
        url: 'api/items'
      })

    }

    var getItem = function (itemId) {
      console.log('in items')
      return $http({
        method:'GET',
        url: 'api/items/' + itemId
      })
    }
    return {
      getAllItems: getAllItems,
      getItem: getItem
    }
  });


  

}).call(this);

(function() {
  angular
  .module('nourish.services', [
  ])
  .factory('Stores', function($http) {
    var getAllStores = function () {
      return $http({
        method: 'GET',
        url: 'api/stores'
      })

    }

    var getItemsFromStore = function (storeId) {
      return $http({
        method:'GET',
        url: 'api/stores/' + storeId
      })
    }
    return {
      getAllStores: getAllStores,
      getItemsFromStore: getItemsFromStore
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

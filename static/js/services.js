(function() {
  angular
  .module('nourish.services', [
  ])
  .factory('Stores', function($http, $log) {

    var getAllStores = function () {
      return $http({
        method: 'GET',
        url: 'api/stores'
      }).success(function(data) {
        return $log.info("successfully got all stores")
      }).error(function(data){
        return $log.info("error getting stores")
      });

    }

    var getStore = function (id) {
      return $http({
        method: 'GET',
        url: 'api/stores/' + id
      }).success(function(data) {
        return $log.info("successfully got store")
      }).error(function(data){
        return $log.info("error getting store")
      });

    }

    var getItemsFromStore = function(id) {
      return $http({
        method: 'GET',
        url: 'api/stores/' + id
      }).success(function(data) {
        return $log.info("successfully got items from store with id: " + id)
      }).error(function(data){
        return $log.info("error getting items from store with id: "+ id)
      });
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

    var deleteStore = function (id) {
      return $http({
        method: 'DELETE',
        url: 'api/stores/' + id
      }).success(function(data) {
        return $log.info("successfully deleted store with id: " + id)
      }).error(function(data){
        return $log.info("error deleting store with id: " + id)
      });

    }

    var updateStore = function(id, data) {
      return $http({
        method: 'PUT',
        url: 'api/stores/' + id + '/',
        data: data
      }).success(function(data) {
          return $log.info("Succesfully updated store");
      }).error(function(data) {
          return $log.info("Failure to update store. View error object: ", data);
      });
    }

    return {
      getAllStores: getAllStores,
      getItemsFromStore: getItemsFromStore,
      createStore: createStore,
      deleteStore: deleteStore,
      getStore: getStore,
      updateStore: updateStore
    }

  })

  .factory('Items', function($http, $log) {
    
    var getAllItems = function () {
      return $http({
        method: 'GET',
        url: 'api/items'
      })

    }

    var getItem = function (itemId) {
      return $http({
        method:'GET',
        url: 'api/items/' + itemId
      })
    }

    var addItem = function(data) {
      return $http({
        method: 'POST',
        url: 'api/items/',
        data: data
      }).success(function(data) {
          return $log.info("Succesfully added item");
      }).error(function(data) {
          return $log.info("Failure to add item. View error object: ", data);
      });
    }

    var deleteItem = function(id) {
      return $http({
        method: 'DELETE',
        url: 'api/items/' + id
      }).success(function(data) {
          return $log.info("Succesfully deleted item");
      }).error(function(data) {
          return $log.info("Failure to delete item. View error object: ", data);
      });
    }

    var updateItem = function(id, data) {
      return $http({
        method: 'PUT',
        url: 'api/items/' + id + '/',
        data: data
      }).success(function(data) {
          return $log.info("Succesfully updated item");
      }).error(function(data) {
          return $log.info("Failure to update item. View error object: ", data);
      });
    }

    return {
      getAllItems: getAllItems,
      getItem: getItem,
      addItem: addItem,
      deleteItem: deleteItem,
      updateItem: updateItem
    }
  });


  

}).call(this);

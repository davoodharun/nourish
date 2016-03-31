(function() {
  angular
  .module('nourish.services', [
  ])

  // Stores Factory
  .factory('Stores', function($http, $log) {

    // GET all stores from API
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

    // GET single store from API
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

    // GET all items from a single store from API
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

    //POST new store to API
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

    // DELETE existing store from API
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

    // PUT or UPDATE Store from API
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

    // return Store service functions
    return {
      getAllStores: getAllStores,
      getItemsFromStore: getItemsFromStore,
      createStore: createStore,
      deleteStore: deleteStore,
      getStore: getStore,
      updateStore: updateStore
    };

  })

  // Items Factory --- getAllItems, getItem, addItem, deleteItem, updateItem
  .factory('Items', function($http, $log) {
    
    //GET all items from API
    var getAllItems = function () {
      return $http({
        method: 'GET',
        url: 'api/items'
      }).success(function(response){
        return $log.info('successfully got all items')
      }).error(function(data) {
        return $log.info("Failure to GET all items. View error object: ", data);
      });

    }

    // GET individual item information
    var getItem = function (itemId) {
      return $http({
        method:'GET',
        url: 'api/items/' + itemId
      }).success(function(response){
        return $log.info('successfully got item')
      }).error(function(data) {
        return $log.info("Failure to GET item. View error object: ", data);
      });
    }

    // POST Item to store
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

    // DELETE Item from store
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

    //Update item from store
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
    };

  });

}).call(this);

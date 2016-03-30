(function () {
  angular
  .module('nourish.profileController', [
  ])

  // Profile Controller --- view for stores list
  .controller('profileController', function($scope, $state, $stateParams, Stores) {
    $scope.stores = [];

    // get all stores in db
    $scope.getStores = function () {
      Stores.getAllStores().then(function(response){
        $scope.stores = response.data.results;
        console.log($scope.stores)
      })
    }

    // create a store
    $scope.createStore = function () {
     
      var storeData = {
        name: $scope.storeName,
        description: $scope.storeDescription
      };

      Stores.createStore(storeData).then(function(response){
        $scope.getStores();
        $scope.storeName = '';
        $scope.storeDescription = '';
      });

    }

    // delete a store
    $scope.deleteStore = function (id) {
      Stores.deleteStore(id).then(function(response){
        console.log('deleted store with id: ' + id, response)
        $scope.getStores();
      });
    }
  })
}).call(this);
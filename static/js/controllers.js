(function () {
  angular
  .module('nourish.controllers', [
  ])

  // Profile Controller --- view for stores list
  .controller('profileController', function($scope, $state, $stateParams, Stores) {
    $scope.stores

    // get all stores in db
    $scope.getStores = function () {
      Stores.getAllStores().then(function(response){
        $scope.stores = response.data.results
      })
    }

    // create a store
    $scope.createStore = function () {
      var storeData = {
        name: $scope.storeName,
        description: $scope.storeDescription
      }
      Stores.createStore(storeData).then(function(response){
        $scope.getStores();
      })
    }

    // delete a store
    $scope.deleteStore = function (id) {
      Stores.deleteStore(id).then(function(response){
        console.log('deleted store with id: ' + id, response)
       
      })
    }

   
  
  })

  // Store Controller --- view for individual stores with containing items
.controller('storeController', function($scope, $state, $stateParams, Stores, Items) {
  $scope.storeName, $scope.storeDescription;
  
  // get all items for a particular store
  $scope.getItemsFromStore = function () {

    Stores.getItemsFromStore($stateParams.storeId).then(function(response){
      $scope.storeItems = [];
      $scope.storeName = response.data.name;
      $scope.storeDescription = response.data.description;
      if(response.data.items.length>0){
        for(var i = 0; i<response.data.items.length; i++){
          var id = response.data.items[i].split('items/')[1].split('/')[0]
            Items.getItem(id).then(function(response){
            $scope.storeItems.push(response.data)
          })
        }
      } else {
        // display no items
      }
      
    });
  }

  // add an item for a particular store --- date formate must be in YYYY-MM-DD
  $scope.addItem = function () {
    var itemData = {
      name: $scope.itemName,
      comments: $scope.itemComments,
      expiration: $scope.itemExpiration,
      store: $stateParams.storeId
    }

    Items.addItem(itemData).then(function(response){
      $scope.getItemsFromStore();
    })
  }

  $scope.deleteItem = function (itemId) {
    Items.deleteItem(itemId).then(function(response){
      $scope.getItemsFromStore();
    })
  }

})

}).call(this);


  



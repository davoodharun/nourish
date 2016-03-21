(function () {
  angular
  .module('nourish.controllers', [
  ])

  // Profile Controller --- view for stores list
  .controller('profileController', function($scope, $state, $stateParams, Stores) {
    $scope.stores;

    // get all stores in db
    $scope.getStores = function () {
      Stores.getAllStores().then(function(response){
        $scope.stores = response.data.results;
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

// Store Controller --- view for individual stores with containing items
  .controller('storeController', function($scope, $state, $location, $stateParams, Stores, Items) {
    $scope.storeName, $scope.storeDescription;
    
    //get store information
    $scope.getStore = function () {
      Stores.getStore($stateParams.storeId).then(function(response){
        $scope.storeName = response.data.name;
        $scope.storeDescription = response.data.description;
      })
    }

    // edit store information
    $scope.updateStore = function(){
      var data = {
        name: $scope.storeName,
        description: $scope.storeDescription
      }
      Stores.updateStore($stateParams.storeId, data).then(function(response){
        $location.path('/');
      })
    }

    // get all items for a particular store
    $scope.getAllItemsFromStore = function () {
      Stores.getStore($stateParams.storeId).then(function(response){
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
        amount: $scope.itemAmount,
        store: $stateParams.storeId
      }

      Items.addItem(itemData).then(function(response){
        
      })

    }

    // delete item from store
    $scope.deleteItem = function (itemId) {
      Items.deleteItem(itemId).then(function(response){
        $scope.getItemsFromStore();
      })
    }

})

 //Item Controller  
  .controller('itemController', function($scope,$state, $stateParams, $location, Stores, Items){
    $scope.items
    $scope.getItem = function(){
      Items.getItem($stateParams.itemId).then(function(response){
          $scope.itemName = response.data.name;
          $scope.itemComments = response.data.comments;
          $scope.itemExpiration = response.data.expiration;
          $scope.itemStore = response.data.store;
          $scope.itemAmount = response.data.amount;
        })
    }

    $scope.updateItem = function(){
      var data = {
        name: $scope.itemName,
        comments: $scope.itemComments,
        expiration: $scope.itemExpiration,
        store: $scope.itemStore,
        amount: $scope.itemAmount
      }
      Items.updateItem($stateParams.itemId, data).then(function(response){
       $location.path('/stores/' + response.data.store);
      })
    }

    //IN PROGRESS
    $scope.getItemsList = function () {
      $scope.items
      Items.getAllItems().then(function(response){
        $scope.items = response.data.results;
      }).then(function(){
        for(var i= 0; i<$scope.items.length; i++){
          Stores.getStore($scope.items[i].store).then(function(response){
            
          })
           
        }
      })   
    }

  })

}).call(this);


  



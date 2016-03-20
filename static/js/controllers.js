(function () {
  angular
  .module('nourish.controllers', [
  ])
  .controller('profileController', function($scope, $state, $stateParams, Stores) {
    $scope.stores
    $scope.getStores = function () {
      Stores.getAllStores().then(function(response){
        $scope.stores = response.data.results
      })
    }

   
  
  })
.controller('storeController', function($scope, $state, $stateParams, Stores, Items) {
  $scope.storeName, $scope.storeDescription;
  $scope.storeItems = [];
  $scope.getItemsFromStore = function () {
    Stores.getItemsFromStore($stateParams.storeId).then(function(response){
      $scope.storeName = response.data.name;
      $scope.storeDescription = response.data.description;
      if(response.data.items.length>0){
        for(var i = 0; i<response.data.items.length; i++){
          var id = response.data.items[i].split('items/')[1].split('/')[0]
          console.log(id)
          Items.getItem(id).then(function(response){
            $scope.storeItems.push(response.data)
            console.log($scope.storeItems)
          })
        }
      }
      
    });
  }
})

}).call(this);


  



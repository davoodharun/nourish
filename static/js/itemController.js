(function () {
  angular
  .module('nourish.itemController', [
  ])
  //Item Controller  
  .controller('itemController', function($scope,$state, $stateParams, $location, Stores, Items){
    // get specific item
    $scope.getItem = function(){
      Items.getItem($stateParams.itemId).then(function(response){
          $scope.itemName = response.data.name;
          $scope.itemComments = response.data.comments;
          $scope.itemExpiration = response.data.expiration;
          $scope.itemStore = response.data.store;
          $scope.itemAmount = response.data.amount;
        })
    }

    //update specfic item
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
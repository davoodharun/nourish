(function () {
  angular
  .module('nourish.controllers', [
  ])
  .controller('storeController', function($scope, $state, Stores) {
    $scope.stores
    Stores.getAllStores().then(function(response){
        console.log(response)
        $scope.stores = response.data.results
      })
    
  });

}).call(this);


  



'use strict';
describe('profileController', function () {
  var $scope, $rootScope, createController, Stores, $state, $stateParams, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('nourish'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Stores = $injector.get('Stores');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('profileController', {
        $scope: $scope,
        $state: $state,
        $stateParams: $stateParams,
        Stores: Stores
      });
    };

  }));

  it('should have a data property on the $scope', function () {
    createController();
    expect($scope.stores).to.be.an('array');
  });

  it('should call `Stores.getAllStores()` when controller is loaded', function () {
   
    sinon.spy(Stores, 'getAllStores');
    
    $httpBackend.expectGET('api/stores').respond({results: 'hi'});
    $httpBackend.expectGET('profile').respond({results: 'hi'});
    createController(); 
    $httpBackend.flush();

    expect(Stores.getAllStores.called).to.equal(true);
    Stores.getAllStores.restore();
  });

  it('should populate the data property after the call to `Store.getAllStores()`', function () {
    var mockLinks = [{},{},{}];
    $httpBackend.expectGET('api/stores').respond(mockLinks);

    createController();
    $httpBackend.flush();

    expect($scope.stores).to.deep.equal(mockLinks);
  });
});

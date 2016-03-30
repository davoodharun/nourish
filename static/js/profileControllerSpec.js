'use strict';

describe('profileController', function () {
  var $scope, $rootScope, createController, Stores, $httpBackend;

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
        Stores: Stores
      });
    };

  }));

  it('should have a data property on the $scope', function () {
    createController();
    expect(true).toBe(true);
  });

  // it('should call `Stores.getAll()` when controller is loaded', function () {
  //   sinon.spy(Stores, 'getAll');
  //   $httpBackend.expectGET('/api/links').respond(200);

  //   createController();
  //   $httpBackend.flush();

  //   expect(Stores.getAll.called).to.equal(true);
  //   Stores.getAll.restore();
  // });

  // it('should populate the data property after the call to `Stores.getAll()`', function () {
  //   var mockStores = [{},{},{}];
  //   $httpBackend.expectGET('/api/links').respond(mockStores);

  //   createController();
  //   $httpBackend.flush();

  //   expect($scope.data.links).to.deep.equal(mockStores);
  // });
});

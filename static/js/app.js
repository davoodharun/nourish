(function () {
  angular
    .module('nourish', [
      'ui.router',
      'nourish.controllers',
      'nourish.services'
      ])
    .config(function($interpolateProvider, $stateProvider, $urlRouterProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
      $urlRouterProvider.otherwise('/');
      return $stateProvider.state('storeList', {
        url: '/',
        templateUrl: 'storeList',
        controller: 'storeController'
      })
    })
    .config(function($httpProvider) {
      var getCookie;
      getCookie = function(name) {
        var cookie, _i, _len, _ref;
        _ref = document.cookie.split(';');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cookie = _ref[_i];
          if (cookie && name === (cookie.trim().split('='))[0]) {
            return decodeURIComponent(cookie.trim().slice(1 + name.length));
          }
        }
        return null;
      };
      return $httpProvider.defaults.headers.common['X-CSRFToken'] = getCookie("csrftoken");
    });

}).call(this);



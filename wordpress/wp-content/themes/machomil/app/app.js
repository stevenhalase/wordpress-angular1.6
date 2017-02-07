var app = angular.module('machomilApp', ['ui.router']);

app.config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url : '/',
        templateUrl: '/wp-content/themes/machomil/app/home/home.html',
        controller : 'homeCtrl as hCtrl'
      })

  $urlRouterProvider.otherwise('/');
}

app.controller('indexCtrl', indexController);

indexController.$inject = ['$scope', '$http'];

function indexController($scope, $http) {
  var iCtrl = this;

  iCtrl.title = 'Index controller';
}

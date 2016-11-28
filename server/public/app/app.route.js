angular.module('HeroApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/heroes', {
        templateUrl: 'app/heroes/heroView.html',
        controller: 'HeroController'
      })
      .when('/entry', {
        templateUrl: 'app/entry/entryView.html',
        controller: 'EntryController'
      })
      .otherwise({
        redirectTo: 'heroes'
      });
  }]);

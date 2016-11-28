angular.module('HeroApp')
  .factory('Hero', ['$http', function HeroFactory($http) {
    return {
      get: function () {
        return $http.get('/heroes');
      },
      add: function (newHero) {
        return $http.post('/heroes', newHero);
      },
      delete: function (hero) {
        return $http.delete('/heroes/' + hero.id);
      },
      put: function (hero) {
        return $http.put('/heroes' + hero.id, hero);
      },
      powers: function () {
        return $http.get('/powers');
      }
    };
  }]);

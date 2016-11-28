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
        return $http.put('/heroes/' + hero.id, {persona: hero.persona, alias: hero.alias, power_id: hero.power_id});
      },
      powers: function () {
        return $http.get('/powers');
      }
    };
  }]);

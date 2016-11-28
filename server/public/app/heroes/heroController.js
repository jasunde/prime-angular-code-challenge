angular.module('HeroApp')
  .controller('HeroController', ['Hero', '$scope', function(Hero, $scope) {
    console.log('hero controller running');
    $scope.heroes = [];

    getHeroes();

    function getHeroes() {
      Hero.get()
        .then(function (response) {
          $scope.heroes = response.data;
          console.log($scope.heroes);
        })
        .catch(function (err) {
          console.log('GET heroes error:', err);
        });
    }

    $scope.deleteHero = function(hero) {
      Hero.delete(hero)
        .then(function (response) {
          console.log(response)
          getHeroes();
        })
        .catch(function (err) {
          console.log('DELETE hero error:', err);
        });
    };

    $scope.updateHero = function(hero) {
      Hero.put(hero)
        .then(function (response) {
          console.log(response)
          getHeroes();
        })
        .catch(function (err) {
          console.log('PUT hero error:', err);
        });
    }
  }]);

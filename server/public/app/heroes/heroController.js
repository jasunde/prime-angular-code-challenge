angular.module('HeroApp')
  .controller('HeroController', ['Hero', '$scope', function(Hero, $scope) {
    console.log('hero controller running');
    $scope.heroes = [];

    getHeroes();

    function getHeroes() {
      Hero.get()
        .then(function (response) {
          $scope.heroes = response.data;
        })
        .catch(function (err) {
          console.log('GET heroes error:', err);
        });
    }
  }]);

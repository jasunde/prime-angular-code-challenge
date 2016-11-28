angular.module('HeroApp')
  .controller('EntryController', ['$scope', 'Hero', function($scope, Hero) {
    console.log('entry controller running');

    $scope.newHero = {};
    $scope.powers = [];

    getPowers();

    $scope.addHero = function() {
      Hero.add($scope.newHero)
        .then(function (response) {
          console.log(response);
          $scope.newHero = {};
        })
        .catch(function (err) {
          console.log('POST new hero error:', err);
        });
    };

    function getPowers() {
      Hero.powers()
        .then(function (response) {
          $scope.powers = response.data;
        })
        .catch(function (err) {
          console.log('GET hero powers error:', err);
        })
    }
  }]);

'use strict';

/**
 * @ngdoc function
 * @name feedScoreApp.controller:BaseCtrl
 * @description
 * # BaseCtrl
 * Controller of the feedScoreApp
 */
angular.module('feedScoreApp')
  .controller('BaseCtrl', function ($scope, $state) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.goToDashboard = function(){
        $state.go('base.dashboard');
    };

    $scope.goToFeed = function(){
        $state.go('base.feed');
    };
  });
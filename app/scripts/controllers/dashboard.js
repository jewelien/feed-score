'use strict';

/**
 * @ngdoc function
 * @name feedScoreApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the feedScoreApp
 */
angular.module('feedScoreApp')
  .controller('DashboardCtrl', function ($scope, $window, FeedService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.instagramLogin = function(){
        $window.open(FeedService.getAuthorizationUrl());
    };

    $scope.getSelfUser = function(){
        FeedService.getUser().then(function(res){
            $scope.selfUser = res.data;
        });
    };

    $scope.getUserRecent = function(){
        FeedService.getUserMediaRecent().then(function(res){
           $scope.selfMediaRecent = res.data;
        });
    };

    $scope.getSelfUser();
    $scope.getUserRecent();

  });

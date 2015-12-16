angular.module('swipeify.songs', []).

controller('SongController', ['$scope', '$sce', '$location', function($scope, $sce, $location) {
  $scope.data = {};
  $scope.data.slides=[];
  $scope.data.source = '';

  $scope.initializeAPI = function() {
    SC.initialize({
      client_id: '42a5cbfcd2625ac49a646bc4bb77c79b'
    });
  }

  $scope.addSongs = function() {
    SC.get('/tracks', {limit: 10}).then(function(records){
      $scope.data.source =  $sce.trustAsResourceUrl('http://api.soundcloud.com/tracks/'+records[0].id+'/stream?client_id=42a5cbfcd2625ac49a646bc4bb77c79b');
      $scope.data.slides = $scope.data.slides.concat(records);
      $scope.$broadcast('Data_Ready');
    });
  }

  $scope.changeView = function(view) {
    $location.path(view);
  }

  $scope.initializeAPI();
  $scope.addSongs();

}]);

angular.module('swipeify.songs', []).

controller('SongController', ['$scope', '$sce', function($scope, $sce) {
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

  $scope.initializeAPI();
  $scope.addSongs();

}]);

   // App.slider.on('afterChange', function(event, slick, currentSlide) {
   //          App.swipe.currentPosition = currentSlide;
   //          App._extendProducts(slick, currentSlide);
   //      });


 //      if (sound[i].artwork_url) html = html + '<img class="image" src="' + sound[i].artwork_url + '">

     // $('#player').attr('src', 'http://api.soundcloud.com/tracks/'+sound[0].id+'/stream?client_id=42a5cbfcd2625ac49a646bc4bb77c79b');
  
     // $('#songs-container').slick({ 
     //    infinite: true,
     //    slidesToShow: 1,
     //    slidesToScroll: 1,
     //    nextArrow: $('#next-product'),
     //    prevArrow: $('#prev-product')
     //  })

     // for(var i = 0; i < sound.length; i++) {
     //      var html = '<div class="song">';
     //      if (sound[i].artwork_url) html = html + '<img class="image" src="' + sound[i].artwork_url + '">';
     //      if(sound[i].title) html = html + '<p class="title">' + sound[i].title + '</p>';
     //      html = html + '</div>';
     //      $('#songs-container').slick('slickAdd', html);
     //      console.log("added");
     // }

    // });
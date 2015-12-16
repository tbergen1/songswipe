angular.module('swipeify.directives', [])

.directive('songSlide', function($timeout, $sce) {
   return {
     restrict: 'A',
     link: function(scope,element,attrs) {
        scope.$on('Data_Ready', function() {

        $timeout(function() {
          $(element).slick(scope.$eval(attrs.songSlide));
          
        });
        

        $(element).on('afterChange', function(event, slick, currentSlide) {
          console.log(currentSlide);
          scope.data.source = $sce.trustAsResourceUrl('http://api.soundcloud.com/tracks/'+scope.data.slides[currentSlide].id+'/stream?client_id=42a5cbfcd2625ac49a646bc4bb77c79b');  
            console.log(event);
            scope.$apply();
            // App.swipe.currentPosition = currentSlide;
            // App._extendProducts(slick, currentSlide);
        });
     });
     }
   }
});

// restrict: 'A',
  
//         link: function (scope, element, attrs) {
//             var isInitialized = false;
//             scope.$watch('data', function(newVal, oldVal) {
//                 if (newVal.length > 0 && !isInitialized) {
//                     $(element).slick(scope.$eval(attrs.slickSlider));
//                     isInitialized = true;
//                 }
//             });
//         }
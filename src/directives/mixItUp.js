angular.module('Codegurukul')
  .directive('mixItUp', function($http) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link (scope, element, attrs) {
      $(element).mixItUp();
      $('span.btn.filter').each(function(i){
            var j = i % 7;
            j = j+1;
            $(this).addClass('color'+j);
      });
    }
  });
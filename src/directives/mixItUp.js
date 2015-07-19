angular.module('Codegurukul')
  .directive('mixItUp', function($http) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link (scope, element, attrs) {
      $(element).mixItUp();
      var color=["#ed5565", "#fc6e51", "#ffce54",  "#48cfad",  "#4fc1e9",  "#5d9cec", "#ec87c0",  "#aab2bd",  "#f5f7fa"];
      $('span.btn.filter').each(function(i){
            $(this).css('border-color',color[i % color.length]);
      });
    }
  });
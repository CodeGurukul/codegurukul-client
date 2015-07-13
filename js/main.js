$(document).ready(function () {
$('#mentors').mixItUp();
var color=["#ed5565", "#fc6e51", "#ffce54",  "#48cfad",  "#4fc1e9",  "#5d9cec", "#ec87c0",  "#f5f7fa", "#aab2bd"];
$('span.btn.filter').each(function(i){
      $(this).css('border-color',color[i % color.length]);
});
    
});


$(document).ready(function () {
//    $('#mentors').mixItUp();
//    function showRegisterForm(){
//      $('.loginBox').fadeOut('fast',function(){
//          $('.registerBox').fadeIn('fast');
//          $('.login-footer').fadeOut('fast',function(){
//              $('.register-footer').fadeIn('fast');
//          });
//          $('.modal-title').html('Register with');
//      }); 
//      $('.error').removeClass('alert alert-danger').html('');
//
//    }
//    function showLoginForm(){
//      $('#loginModal .registerBox').fadeOut('fast',function(){
//          $('.loginBox').fadeIn('fast');
//          $('.register-footer').fadeOut('fast',function(){
//              $('.login-footer').fadeIn('fast');    
//          });
//
//          $('.modal-title').html('Login with');
//      });       
//       $('.error').removeClass('alert alert-danger').html(''); 
//    }
//    
//    var fixedNav = false;
//    var menu = $('#home-main header.navbar');
//    var origOffsetY = menu.offset().top;
//
//    var addFixedMenu = function() {
//        $('#home-main header.navbar').fadeOut(10,function(){
//            $(this).fadeIn(500,function(){
//              $(this).addClass('sticky');
//            });
//        });
//        fixedNav = true;
//    };
//    
//    var removeFixedMenu = function() {
//        $('#home-main header.navbar').fadeOut(10,function(){
//            $(this).fadeIn(10,function(){
//               $('#home-main header.navbar').removeClass('sticky');
//            });
//        });
//        fixedNav = false;
//    };
//    
//    var scroll = function() {
//        if ($(window).scrollTop() >= origOffsetY) {
//            if(fixedNav == false){
//              addFixedMenu();
//            }
//            $('section').addClass('menu-padding');
//        } else {
//            if(fixedNav == true){
//              removeFixedMenu();
//            }
//            $('section').removeClass('menu-padding');
//        }
//
//
//    };
//Grapefruit
//"#ed5565", "#da4453", "#fc6e51",  "#e9573f", "#ffce54",  "#f6bb42",  "#48cfad",  "#37bc9b", "#4fc1e9",  "#3bafda", "#5d9cec",  "#4a89dc",
//"#ec87c0",  "#d770ad",
//"#f5f7fa",  "#e6e9ed",
//"#aab2bd",  "#4c4cc",
  
    //document.onscroll = scroll;
    var color=["#ed5565", "#fc6e51", "#ffce54",  "#48cfad",  "#4fc1e9",  "#5d9cec", "#ec87c0",  "#f5f7fa", "#aab2bd"];
    $('span.btn.filter').each(function(i){
      $(this).css('border-color',color[i % color.length]);
    });
    
});


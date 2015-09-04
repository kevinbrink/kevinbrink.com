// Affix the navigation bar after the header
$(document).ready(function() {
    $('#affix-nav').affix({
          offset: {
            top: $('#main-nav').offset().top
          }
    });

    $('#affix-nav').css('-webkit-transition', 'all .2s ease-in-out');
//    /* smooth scrolling for nav sections */
//    $('.navbar .navbar-nav li>a').click(function(){
//      var link = $(this).attr('href');
//      // remove the prepended slash from the href
//      link = link.replace(/^\//gm,'');
//      var posi = $(link).offset().top;
//      posi -= $("#affix-nav").outerHeight();
//      $('body,html').animate({scrollTop:posi},700);
//    })
});

// Affix the navigation bar after the header
$(document).ready(function() {
    $('#affix-nav').affix({
          offset: {
            top: $('#main-nav').offset().top
          }
    });

//    /* smooth scrolling for nav sections */
//    $('.navbar .navbar-nav li>a').click(function(){
//      var link = $(this).attr('href');
//      // remove the prepended slash from the href
//      link = link.replace(/^\//gm,'');
//      var posi = $(link).offset().top;
//      posi -= $("#affix-nav").outerHeight();
//      $('body,html').animate({scrollTop:posi},700);
//    })
    
    // TODO: This should go into blog_posts.js, but it's not working there for
    // some reason
    $('#scroll-down').click(function() {
        $('body,html').animate({
            scrollTop:$("#main-nav").offset().top
        }, 700);
    });
});

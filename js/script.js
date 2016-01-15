$(".slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');
},  10000);


$('.intro').click(function(){
                
    $( '.intro' ).fadeToggle();

    setTimeout(function() {
                $( '.save-the-date' ).fadeToggle();
            },500);
        
});

$('.btn-nav-menu, .close-btn').click(function(){
    $('.nav-menu').toggleClass('active');
});



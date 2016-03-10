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
                
    $('.intro').fadeToggle();
    $('body').removeClass('home');

    setTimeout(function() {
        $('.save-the-date').fadeToggle();
    },500);
        
});

$('.rsvp').click(function() {
           
    $(this).parent().parent().fadeToggle();
    document.getElementById('mc-embedded-subscribe-form').reset();

    setTimeout(function() {
        $('.rsvp-form').fadeToggle();
    },500);
        
});

$('input#mc-embedded-subscribe').click(function(){
                
    $('.rsvp-form').fadeToggle();

    setTimeout(function() {
        $('.thank-you').fadeToggle();
    },500);
        
});

$('.btn-nav-menu, .close-btn').click(function(){
    $('.nav-menu').toggleClass('active');
});

setTimeout(function() {
    $('.fade-in').fadeToggle('slow');
},1500);


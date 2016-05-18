/*var bypass = getUrlParameter('bypass');
bypass = (bypass === 'yes' ? true : false);

if(bypass) {
    document.cookie = 'is-first-visit=true';
}

if(!getCookie('is-first-visit') && !bypass && $('body').hasClass('home')) {
    $('.interstitial').show();
    $('#interstitial-leaving').hide();
}*/

$('.slideshow > div:gt(0)').hide();

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

$('.btn-nav-menu, .nav-menu-bg').click(function(){
    $('body').toggleClass('menu-active');
    $('.nav-menu').fadeToggle();
});

setTimeout(function() {
    $('.fade-in').fadeToggle('slow');
},1500);

$('.continue').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().fadeToggle();

    if($('body').hasClass('next-panel')) {
        $('body').addClass('last-panel');

        setTimeout(function() {
            $('.our-story .third').fadeToggle();
        },1500);
    } else {
        $('body').addClass('next-panel');

        setTimeout(function() {
            $('.our-story .second').fadeToggle();
        },1500);
    }
});


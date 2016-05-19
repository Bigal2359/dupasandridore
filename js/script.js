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

$('.btn-nav-menu').click(function(){
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

Raphael(function(){

    var box = Raphael('box', '50', '50');
    var cover = box.rect(0,0,50,50).attr({fill:'#f00', opacity:0}).toBack();

    var first = box.path('M0 1L50 1');
    first.attr({'stroke-width':'2px',stroke: '#000'});
    var second = box.path('M0 11L50 11');
    second.attr({'stroke-width':'2px',stroke: '#000', opacity:1});
    var third = box.path('M0 21L50 21');
    third.attr({'stroke-width':'2px',stroke: '#000'});
    var n = 1;

    var st = box.set();
    st.push(cover,first,second,third);
    st.click(function(){
      if(n===2){
        first.animate({path: 'M0 1L50 1',stroke: '#000'},200,'ease-in-out');
        second.animate({opacity:1},200,'ease-in-out');
        third.animate({path: 'M0 21L50 21',stroke: '#000'},200,'ease-in-out');
        n--;
      }else{
        first.animate({path: 'M0 1L50 31',stroke: '#000'},200,'ease-in-out');
        second.animate({opacity:0},50,'ease-in-out');
        third.animate({path: 'M0 31L50 1',stroke: '#000'},200,'ease-in-out');
        n++;
      }
    });
});


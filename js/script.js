function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
    }
    return '';
}

if($('body').hasClass('home')) {

    if(getCookie('dnr-is-first-visit')) {
        $('body').removeClass('intro');

        setTimeout(function() {
            $('.save-the-date').fadeToggle('slow');
        },1500);
    } else {

        setTimeout(function() {
            $('.hello').fadeToggle('slow');
        },1500);
    }
}

setTimeout(function() {
    $('.fade-in').fadeToggle('slow');
},1500);

$('.slideshow > div:gt(0)').hide();

setInterval(function() { 
  $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');
},  10000);


$('.hello').click(function(){
                
    document.cookie = 'dnr-is-first-visit=true';

    $('.hello').fadeToggle();

    setTimeout(function() {
        $('.save-the-date').fadeToggle();
        $('body').removeClass('intro');
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

    var box = Raphael('box', '117', '50');
    var cover = box.rect(0,0,117,50).attr({fill:'#f00', opacity:0}).toBack();

    var first = box.path('M0 1L50 1');
    first.attr({'stroke-width':'2px',stroke: '#000'});
    var second = box.path('M0 11L50 11');
    second.attr({'stroke-width':'2px',stroke: '#000', opacity:1});
    var third = box.path('M0 21L50 21');
    third.attr({'stroke-width':'2px',stroke: '#000'});
    var n = 1;

    var st = box.set();
    st.push(cover,first,second,third);
    $('.btn-nav-menu, .nav-menu-bg').click(function(){
        
        $('body').toggleClass('menu-active');

        if(n===2){
            first.animate({path: 'M0 1L50 1',stroke: '#000'},200,'ease-in-out');
            second.animate({opacity:1},200,'ease-in-out');
            third.animate({path: 'M0 21L50 21',stroke: '#000'},200,'ease-in-out');
            n--;
        }else{
            first.animate({path: 'M0 1L40 30',stroke: '#FFF'},200,'ease-in-out');
            second.animate({opacity:0},50,'ease-in-out');
            third.animate({path: 'M0 30L40 1',stroke: '#FFF'},200,'ease-in-out');
            n++;
        }
    });
});


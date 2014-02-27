
// change image SRC
$(window).load(function() {
    resizefunction3();
    $('.gridtitle, .triangle').css('opacity', '.7');

//    var logo = $('.ninegrid');
//    TweenMax.staggerFrom(logo, 0.5, {top: "-=100px", rotation: "-20deg", alpha: 0, scale: 1.8, ease: Back.easeOut}, 0.1);
    TweenMax.to(window, 1, {scrollTo: {y: $("#ninegridimg").offset().top, autoKill:false}, delay: 2});

});
$(window).resize(function() {
    resizefunction3();
});


$(function() {
    $('.ninegrid').mouseenter(function() {
        $('.gridsubTitle', this).stop().animate({height: '80'}, 400);
    }).mouseleave(function() {
        $('.gridsubTitle', this).stop().animate({height: '20'}, 100);

    });
});





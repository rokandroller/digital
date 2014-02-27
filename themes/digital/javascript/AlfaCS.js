//scroll indicating arrow animation
$(window).load(function() {
    resizefunction();
});
$(window).resize(function() {
    resizefunction();
});
// Main animation 
$(window).scroll(function() {


    var scrollY = getPageScroll()[1];
    if (animArray[0] === 0 && scrollY > windoow - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top, autoKill:false}});
        animArray[0] = 1;
        TweenLite.fromTo($('#mito_slide3'), 1.5, {top: '200px'}, {top: '320px', autoAlpha: 1, ease: Cubic.easeInOut});
        TweenLite.fromTo($('#mito_slide1'), 1.5, {left: '0px'}, {left: '-114px', autoAlpha: 1, delay: 1.5, ease: Cubic.easeInOut});
        TweenLite.fromTo($('#mito_slide2'), 1.5, {right: '0px'}, {right: '-114px', autoAlpha: 1, delay: 1.5, ease: Cubic.easeInOut});
    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide2").offset().top, autoKill:false}});
        animArray[1] = 1;
        var tl = new TimelineLite();
        tl.add(TweenLite.fromTo($('#mito-game-2'), 1, {right: '-215px', top: '0px'}, {right: '-175px', top: '40px', autoAlpha: 1, ease: Cubic.easeInOut}));
        tl.add(TweenLite.fromTo($('#mito-game-1'), 1, {right: '0px', top: '100'}, {right: '45px', top: '140px', autoAlpha: 1, ease: Cubic.easeInOut}));
        tl.add(TweenLite.fromTo($('#gear'), 1, {rotation: "0rad", scale: 0, opacity: 0}, {rotation: "6.3rad", scale: 1, opacity: 1, ease: Back.easeOut}));
        tl.add(TweenLite.from($('#track, #track2'), 2, {width: '0px', opacity: 1, ease: Cubic.easeInOut}));
        TweenMax.fromTo($('#arrow'), 1, {rotation: "0"}, {rotation: "110_long", transformOrigin: "18px 109px", repeat: -1, yoyo: true, ease: Back.easeOut});
        TweenMax.fromTo($('#arrow2'), 1.5, {rotation: "-100"}, {rotation: "50_long", transformOrigin: "18px 109px", repeat: -1, yoyo: true, ease: Cubic.easeInOut});
    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide3").offset().top, autoKill:false}});
        animArray[2] = 1;
        TweenMax.fromTo($('#alfa-mito_slide4'), 2, {left: "-170px", opacity: 0}, {left: "-40px", opacity: 1, ease: Back.easeOut});
        TweenMax.fromTo($('#alfa-mito_slide5'), 2, {right: "-100px", opacity: 0}, {right: '-30px', opacity: 1, ease: Back.easeOut});
        TweenMax.from($('#car'), 2, {left: '0px', bottom:'0px', delay: 2, ease: Back.easeOut});

    }

});



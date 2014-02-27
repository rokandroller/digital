//scroll indicating arrow animation
$(window).load(function() {
    resizefunction2();
});

$(window).resize(function() {
    resizefunction2();
});


// Main animation 

$(window).scroll(function() {
    var scrollY = getPageScroll()[1];

    if (animArray[0] === 0 && scrollY > windoow - (windoow - 100)) {
        var tl = new TimelineLite();
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top, autoKill:false}});
        TweenLite.fromTo($('.firstcontent'), 1, {right: '70px'}, {right: '0px', autoAlpha: 1, ease: Cubic.easeInOut});
        tl.add(TweenLite.fromTo($('#biometic'), 1, {top: '0px'}, {top: '70px', autoAlpha: 1, ease: Cubic.easeInOut}));
        tl.add(TweenLite.fromTo($('#biometiccircle'), 1, {scale: 0}, {scale: 1, autoAlpha: 1, ease: Back.easeOut}));
        tl.add(TweenLite.fromTo($('#FB'), 1, {scale: 0}, {scale: 1, autoAlpha: 1, ease: Back.easeOut}));
        animArray[0] = 1;
    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - (slide1 - 100)) {
        var tl1 = new TimelineLite();
        TweenMax.to(window, 2, {scrollTo: {y: $("#slide2").offset().top, autoKill:false}});

        tl1.add(TweenLite.fromTo($('#actionzonegreen'), 1, {height: '0px'}, {height: '115px', autoAlpha: 1, ease: Cubic.easeInOut}));
        tl1.add(TweenLite.fromTo($('#actionzoneblack'), 1, {height: '130px'}, {height: '243px', autoAlpha: 1, ease: Cubic.easeInOut}));
        TweenLite.fromTo($('#dunlopiphone'), 2, {right: '0px'}, {right: '-70px', autoAlpha: 1, ease: Cubic.easeInOut});

        animArray[1] = 1;
    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - (slide2 - 100)) {
        TweenMax.to(window, 1.5, {scrollTo: {y: $("#slide3").offset().top, autoKill:false}});
        TweenLite.fromTo($('#action-zone-screen1'), 2, {left: '0px', top: '350px'}, {left: '100px', top: '300px', autoAlpha: 1});
        TweenLite.fromTo($('#action-zone-screen2'), 2, {right: '0px', top: '350px'}, {right: '100px', top: '300px', autoAlpha: 1});

        animArray[2] = 1;
    }

});



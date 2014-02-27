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
        //stuff


    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide2").offset().top, autoKill:false}});
        animArray[1] = 1;
        //stuff



    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide3").offset().top, autoKill:false}});
        animArray[2] = 1;
        //stuff



    }

});



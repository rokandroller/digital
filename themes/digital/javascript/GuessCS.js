//scroll indicating arrow animation
$(window).load(function() {
    slideheightttt();
    resizefunction();
    
});

$(window).resize(function() {
    resizefunction();
});



// Main animation 

$(window).scroll(function() {
    var scrollY = getPageScroll()[1];
    var pos = 0;
    if (animArray[0] === 0 && scrollY > windoow - (windoow - 100)) {
        var tl = new TimelineLite();
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top, autoKill:false}});
        
        TweenLite.fromTo($('#wave'), 5, {opacity: 0, height: "0"}, {opacity: 1, height: "900", ease: Cubic.easeInOut});
        TweenLite.to($('.firstcontent'), 1, {opacity: 1, left: 0, ease: Cubic.easeInOut});
        tl.add(TweenLite.fromTo($('#iphone'), 1.5, {opacity: 0, top: "0"}, {opacity: 1, top: "80px", ease: Cubic.easeIn}));
        tl.add(TweenLite.to($('#circle'), 1, {opacity: 1, ease: Cubic.easeInOut}));
        tl.add(TweenLite.fromTo($('#star'), 1.5, {rotation: "0rad", scaleX: 0, scaleY: 0, opacity: 0}, {rotation: "5rad", scaleX: 1, scaleY: 1, opacity: 1}));
        tl.add(TweenLite.to($('#guess-iphone'), 1, {opacity: 1, left: 0, ease: Cubic.easeInOut}));

        animArray[0] = 1;
         } 
    if (animArray[1] === 0 && scrollY > windoow + slideheight - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide2").offset().top, autoKill:false}});
        
        var tl1 = new TimelineLite();
        TweenLite.to($('.Content1'), 1, {opacity: 1, left: 0, ease: Cubic.easeInOut});

        tl1.add(TweenLite.to($('#circle2'), 1, {opacity: 1, ease: Cubic.easeInOut}));
        tl1.add(TweenLite.fromTo($('#star2'), 3, {opacity: 0}, {rotation: 360, transformOrigin: "-60px 180px", opacity: 1, ease: Cubic.easeOut}));
        tl1.add(TweenLite.to($('#logo3'), 1, {opacity: 1}));
        tl1.add(TweenLite.fromTo($('#wave2'), 2, {opacity: 0.5, height: "0"}, {opacity: 1, height: "1200", ease: Cubic.easeInOut}));
        TweenLite.fromTo($('#SOCIALMEDIA'), 2, {opacity: 0, left: '70px'}, {opacity: 1, left: '110px', ease: Cubic.easeOut});
        TweenLite.fromTo($('#circle3'), 2, {opacity: 0, scaleX: 0}, {opacity: 1, scaleX: 1, ease: Cubic.easeOut});
        TweenLite.to($('#star3'), 6, {opacity: 1});

        animArray[1] = 1;
        console.log(slide2);
        console.log(slideheight);
    }
    if (animArray[2] === 0 && scrollY > windoow + slideheight + slideheight - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide3").offset().top, autoKill:false}});
        var tl2 = new TimelineLite();
        TweenLite.to($('#video'), 1, {opacity: 1, left: 0, ease: Cubic.easeInOut});
        tl2.add(TweenLite.to($('.Content2'), 1, {opacity: 1, right: 0, ease: Cubic.easeInOut}));
        tl2.add(TweenMax.staggerFromTo($('.sprite'), 0.6, {top: "200px", opacity: 0, scale: 2.5}, {top: "0px", opacity: 1, scale: 1, ease: Back.easeOut}, 0.4));

        animArray[2] = 1;
    }

});



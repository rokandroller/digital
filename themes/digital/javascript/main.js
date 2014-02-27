// JavaScript Document


//$(window).load(function() {
////get scroll array
//
//});

var slideheight = $('.slideheight').height();


function slideheightttt(){     
    if(slideheight < windoow){
        $('.slideheight').height(windoow);
    }
};


var animArray = [0, 0, 0, 0];

var slide1 = $('#slide1').height();
var slide2 = $('#slide2').height();
var slide3 = $('#slide3').height();
var slide4 = $('#slide4').height();
var windoow = $(window).height();

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll, yScroll);
}

//responsive images
function resizefunction() {
    var h = $(window).height();
    var w = $(window).width();
    var width = (Math.round(w / 200) * 200 + 100);
    var height = (Math.round(h / 200) * 200 + 100);
    $('.backgroundimg').each(function() {
        if (h < (w - 400)) {
            $(this).css('background-image', 'url("/SLIR/w' + width + $(this).attr('data-url') + '")');
        } else {
            $(this).css('background-image', 'url("/SLIR/h' + height + $(this).attr('data-url') + '")');
        }
    });
}

//responsive images2
function resizefunction2() {
    var h = $(window).height();
    var w = $(window).width();
    var width = (Math.round(w / 200) * 200 + 100);
    var height = (Math.round(h / 200) * 200 + 100);
    $('.backgroundimg').each(function() {
        if (h < (w - 400)) {
            $(this).css('background-image', 'url("/SLIR/w' + width + $(this).attr('data-url') + '")');
        } else {
            $(this).css('background-image', 'url("/SLIR/h' + height + $(this).attr('data-url') + '")');
        }
    });
    $('.backgroundimg2').each(function() {
        if (h < w) {
            $(this).css('background-image', 'url("/SLIR/w' + width + $(this).attr('data-url') + '")');
        } else {
            $(this).css('background-image', 'url("/SLIR/h500' + $(this).attr('data-url') + '")');
        }
    });
}
//9 grid responsive images2
function resizefunction3() {
    var h = $('.ninegrid').height();
    var w = $('.ninegrid').width();
    var width = (Math.round(w / 200) * 200 + 100);
    var height = (Math.round(h / 200) * 200 + 100);

    $('.ninegrid').each(function() {
        if (h < (w - 100)) {
            $(this).css('background-image', 'url("/SLIR/w' + width + $(this).attr('data-url') + '")');
        } else {
            $(this).css('background-image', 'url("/SLIR/h' + height + $(this).attr('data-url') + '")');
        }
    });
}

$(document).ready(function() {
    //preloader
    $('#loading-screen').fadeOut(700, function() {
        $(this).remove();
    });

    (function loop() {
        $('.downarrow').delay(500).fadeTo(1000, 0.2).fadeTo(1000, 1, loop);
    })();

    //scroll staff

    $(".downarrow").click(function(e) {
        e.preventDefault();
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top, autoKill:false}, ease: Back.easeOut});
    });

});
 
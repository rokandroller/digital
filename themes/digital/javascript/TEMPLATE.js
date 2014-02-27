//scroll indicating arrow animation
$(window).load(function() {
    resizefunction();
});

//get scroll array
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


// Main animation 
var animArray = [0, 0, 0, 0];

var slide1 = $('#slide1').height();
var slide2 = $('#slide2').height();
var slide3 = $('#slide3').height();
var windoow = $(window).height();

$(window).scroll(function() {
    var scrollY = getPageScroll()[1];

    if (animArray[0] === 0 && scrollY > windoow - 500) {
       
       

        animArray[0] = 1;
    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - 500) {
        
        
         
        animArray[1] = 1;
    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - 500) {
    
    
    
        animArray[2] = 1;
    }

});

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

$(window).resize(function() {
    resizefunction();
});

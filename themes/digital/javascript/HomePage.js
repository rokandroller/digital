
// change image SRC
$(window).load(function() {
    resizefunction(); 
});

//function resizefunction() {
//    var h = $(window).height();
//    var w = $(window).width();
//    var hh = $(document).height();
//    var wwidth = (Math.round(w / 200) * 200 + 100);
//    var wheight = (Math.round(hh / 200) * 200 + 100);
//    var bgID = $('#bg');
//    if (h < (w-500)) {
//        bgID.attr('src', 'SLIR/w' + wwidth + bgID.attr('data-url'));
//    } else {
//        bgID.attr('src', 'SLIR/h' + wheight + bgID.attr('data-url'));
//    }
//}
//$('#imgggg').css('background-image','url("/assets/main/guess-big.jpg")');

//function resizefunction() {
//    var h = $(window).height();
//    var w = $(window).width();
//    var hh = $(document).height();
//    var wwidth = (Math.round(w / 200) * 200 + 100);
//    var wheight = (Math.round(hh / 200) * 200 + 100);
//    var bgID = $('#backgroundimg');
//    var dataurl = bgID.attr('data-url');
//    if (h < (w-200)) {
//        bgID.css('background-image','url("/SLIR/w' + wwidth + dataurl + '")' );
//    } else {
//        bgID.css('background-image','url("/SLIR/h' + wheight + dataurl + '")' );
//       
//    }
//}


$(window).resize(function() {
    resizefunction();
});

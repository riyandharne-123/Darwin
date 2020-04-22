
//back to top button
//scroll down function
function topFunction(){
  //  document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('html, body').animate({scrollTop:0}, '4000');
}

$('.counter').counterUp({
    delay: 10000,
    time: 10000
});
//scrolling to certain elements animation

function scroll_about(){
  $('.about').localScroll({duration:800});
}
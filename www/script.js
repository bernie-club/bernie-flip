$(function() {
    var current = 1;
    setInterval(function(){
        $('body').css('background-image', 'url("' + current + '.jpg")');
        current = (current == 1) ? 2 : 1;
    }, 200);
});
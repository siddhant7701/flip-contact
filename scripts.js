$(document).ready(function() {
    $('.flip').click(function() {
        $('.cont-flip').toggleClass('flipped');
        return false;
    });

    $('.close-btn').click(function() {
        $('.cont-flip').removeClass('flipped');
    });
});
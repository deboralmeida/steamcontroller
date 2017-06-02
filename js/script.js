$(document).ready(function () {
    
    // ON LOAD/WHEN READY SCROLL TO STEAM MACHINE COMPATIBLE INFO
    $('html, body').animate({
        scrollTop: $("#steam_machine img").offset().top - $('nav').height() - 50
    }, 2000);
    // AFTER A 500 DELAY SCROLL TO VIDEO
    $('html, body').delay(200).animate({
        scrollTop: $("#trailer").offset().top - $('nav').height() - 20
    }, 2000);

    // WHEN VIDEO ENDS SCROLL TO TEXT
    $('#trailer').on('ended', function () {
        $('html, body').animate({
            scrollTop: $("#text").offset().top - $('nav').height() - 50
        }, 2000);
    });

    // WHEN VIDEO PAUSED SCROLL TO TEXT
    $('#trailer').on('pause', function () {
        $('html, body').animate({
            scrollTop: $("#text").offset().top - $('nav').height() - 50
        }, 2000);
    });

    // WHEN VIDEO CLICK TOGGLE PLAY/PAUSE
    $('#trailer').click(function () {
        this.paused ? this.play() : this.pause();
    });
    
});
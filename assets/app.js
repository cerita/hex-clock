function hexClock() {
    var time, h, m, s, clock, bg;
    
    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    if (h <= 9) {h = "0" + h; }
    if (m <= 9) {
        m = "0" + m;
    }
    if (s <= 9) {
        s = "0" + s;
    }


    clock = "#" + h + ":" + m + ":" + s;
    bg = "#" + h + m + s;

    
    $('body').css('background-color', bg);
    $('#clock').html(clock);
    setInterval(hexClock, 1000);
}

window.onload = hexClock();

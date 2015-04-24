// JavaScript Document
function hexClock() {
  var time = new Date();
  
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  
  if (h <= 9) { h = "0" + h};
  if (m <= 9) { m = "0" + m};
  if (s <= 9) { s = "0" + s};
  
  
  var clock = "#" + h + ":" + m + ":" + s;
  var bg = "#" + h + m + s;
  
  $('body').css("background-color", bg);
  
  document.getElementById('clock').innerHTML = clock;
  setInterval(hexClock, 1000);
};

hexClock();
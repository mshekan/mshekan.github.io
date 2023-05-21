// تاریخ و زمان هدف
var countDown = new Date("Apr 25, 2023 00:00:00").getTime();

var y = setInterval(
function() {
  var now = new Date().getTime();
  var mdistance = countDown - now;
  var day = Math.floor(mdistance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((mdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((mdistance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((mdistance % (1000 * 60)) / 1000);


document.getElementById("dr").innerHTML = day;
if(hours < 10){
document.getElementById("dh").innerHTML = "0" + hour;
}else{
document.getElementById("dh").innerHTML = hour;
}
if(minutes < 10){
document.getElementById("dm").innerHTML = "0" + minute;
}else{
document.getElementById("dm").innerHTML = minute;
}
if(seconds < 10){
document.getElementById("ds").innerHTML = "0" + second;
}else{
document.getElementById("ds").innerHTML = second;
}

  
}, 1000);
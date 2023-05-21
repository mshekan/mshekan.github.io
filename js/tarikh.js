var date = new Date();
var chandom = date.getDate();
var borj = date.getMonth();
var hafte = date.getDay();
var shanbe = [" یکشنبه "," دوشنبه ", " سه‌شنبه ", " چهارشنبه ", " پنجشنبه ", " جمعه ", " شنبه "];
var maaah = ["0", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهــر", "آبان", "آذر", "دی", "بهمـن", "اسفند",];
var xRoooz;
if(chandom >= 21){
xRoooz = chandom -= 21;
borj -= 3;
}else{
xRoooz = chandom += 10;
borj -= 2;
}
document.getElementById("xday").innerHTML =xRoooz + "/";
document.getElementById("xhafte").innerHTML = shanbe[hafte];
document.getElementById("xmah").innerHTML = borj;
document.getElementById("xmaah").innerHTML = "/" + maaah[borj];
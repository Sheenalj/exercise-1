var d = new Date();
function analogClock() {
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var ampm = (h >= 12) ? "PM" : "AM";
	alert(h + ":" + m + ":" + s + " " + ampm);
}

function digitalClock() {
	var hDegree = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
	var mDegree = 6 * d.getMinutes();
	var sDegree = 6 * d.getSeconds();
	var timeDigi = "Hour Hand at " + hDegree + "deg \nMinute Hand at " + mDegree + "deg\nSecond Hand at " + sDegree + "deg";
	alert(timeDigi);
}
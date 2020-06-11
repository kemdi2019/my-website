var x = 300;
var y = 200;
eye = document.getElementById("eye");

function scaleValue(value, from, to) {
	var scale = (to[1] - to[0]) / (from[1] - from[0]);
	var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return ~~(capped * scale + to[0]);
}

function myFunction(e) {
  x = e.clientX;
  y = e.clientY;
}

function clearCoor() {
  
}

function animate(){
    requestAnimationFrame(animate);
    var n = scaleValue(x, [0,screen.width], [-10,+10]);;
    var p = scaleValue(y, [0,815], [103,120]);;
    eye.style.left = n+"px";
    eye.style.top= p+"px";
    
}

animate();
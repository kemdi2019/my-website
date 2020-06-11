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
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}

function animate(){
    requestAnimationFrame(animate);
    var n = x+20;
    var p = y;
    eye.style.left = n+"px";
    eye.style.top= p;
    
}

animate();
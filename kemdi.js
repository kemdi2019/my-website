var mouseX = 520, 
    mouseY = 400,
    eye = document.getElementById("eye"),
    xp = 0,
    yp = 0;

document.onmousemove = function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
};

function scaleValue(value, from, to) {
	var scale = (to[1] - to[0]) / (from[1] - from[0]);
	var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return ~~(capped * scale + to[0]);
}

function animate(){
    requestAnimationFrame(animate);
    var n = scaleValue(mouseX, [0,screen.width], [-10,+10]);
    var p = scaleValue(mouseY, [0,800], [103,116]);
    eye.style.left = n;
    eye.style.top= p;
    
}

animate();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const points = [{x: 0, y: 0}, {x: 50, y: 100}, {x: 300, y: 150}, {x: 60, y: 70}]
function drawShape() {
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(points[0].x, points[0].y);
	for (let i = 1; i < points.length; i++) {
		ctx.lineTo(points[i].x, points[i].y);
	}
	ctx.closePath();
	ctx.stroke();
	// ctx.fill();
}
function getMousePos(e) {
	let posx = 0;
	let posy = 0;
   
	if (e.pageX || e.pageY) {
	  posx = e.pageX;
	  posy = e.pageY;
	} else if (e.clientX || e.clientY) {
	  posx = e.clientX + document.body.scrollLeft + 
						 document.documentElement.scrollLeft;
	  posy = e.clientY + document.body.scrollTop + 
						 document.documentElement.scrollTop;
	}
   
	return {
	  x: posx,
	  y: posy
	}
  }
function pnpoly(verts, point) {
  let i, j, c = 0;
  const nvert = verts.length;
  for (i = 0, j = nvert - 1; i < nvert; j = i++) {
    if (
		((verts[i].y > point.y) != (verts[j].y > point.y)) &&
     	(point.x < (verts[j].x - verts[i].x) * (point.y - verts[i].y) / (verts[j].y - verts[i].y) + verts[i].x) 
	) c = !c;
  }
  return c;
}
canvas.addEventListener("click", (e) => {
	const mousePos = getMousePos(e);
	const vertX = [];
	const vertY = [];
	points.map((p) => {
		vertX.push(p.x);
		vertY.push(p.y);
	})
	console.log(mousePos);
	console.log(pnpoly(points, mousePos));
});	
drawShape();
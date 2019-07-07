let font,
  fontsize = 16;

  function preload() {
	// Ensure the .ttf or .otf font stored in the assets directory
	// is loaded before setup() and draw() are called
	font = loadFont('../assets/SourceSansPro-Regular.otf');
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);

	let originX = 50;
	let originY = 50;
	let width = 0;
	let margin = 25;
	let columns = 40;
	let rows = 40;

	let points = [
		//new GravityPoint(originX+11.3,originY+5.67),
		new GravityPoint(originX*6.2,originY*9.15, 2),
		new GravityPoint(originX*10.34,originY*3.2, 3),
		new GravityPoint(originX*4.56,originY+34, 0.5)
	];

	let posX = originX;
	let posY = originY;

	for (let r = 0; r < rows; r++) {
		for (let i = 0; i < columns; i++) {
			let p = new GravityPoint(posX, posY);
			let nearest = nearestPoint(p, points);
			//text(nearest, posX, posY)

			let angle = angleFromPoints(p, points[nearest]);
			let v = p5.Vector.fromAngle(radians(angle), 10);
			let oAngle = oppositeAngle(angle);
			let v2 = p5.Vector.fromAngle(radians(oAngle), 10);
			//console.log(v);
			line(posX, posY, posX + v.x, posY + v.y);
			line(posX, posY, posX + v2.x, posY + v2.y);
			//text(Math.round(angle), posX, posY);

			posX = posX + width + margin;
		}
		posX = originX;
		posY = posY + width + margin;
	}
}

function draw() {

}


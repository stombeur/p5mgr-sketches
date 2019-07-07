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
	let margin = 30;
	let columns = 20;
	let rows = 20;

	let points = [
		new GravityPoint(originX,originY),
		new GravityPoint(originX*6,originY*9, 2),
		new GravityPoint(originX*10,originY, 3),
		new GravityPoint(originX*4,originY+34, 0.5)
	];

	let posX = originX;
	let posY = originY;

	for (let r = 0; r < rows; r++) {
		for (let i = 0; i < columns; i++) {
			let p = new GravityPoint(posX, posY);
			let nearest = nearestPoint(p, points);
			text(nearest, posX, posY)
			posX = posX + width + margin;
		}
		posX = originX;
		posY = posY + width + margin;
	}
}

function draw() {

}


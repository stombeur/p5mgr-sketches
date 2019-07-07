var quarterCircle = {
	one: 1,
	two: 2,
	three: 3,
	four: 4
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
	fill('#000000');

	let originX = 100;
	let originY = 100;
	let width = 80;
	let margin = 15;
	let columns = 8;
	let rows = 8;

	let posX = originX;
	let posY = originY;

	for (let r = 0; r < rows; r++) {
		for (let i = 0; i < columns; i++) {
			
			let r = getRandomInt(4, 1);
			console.log(r);
			drawCircle(posX, posY, width, r);

			posX = posX + width + margin;
		}
		posX = originX;
		posY = posY + width + margin;
	}

	// drawCircle(50, 50, 80, quarterCircle.one);
	// drawCircle(50, 200, 80, quarterCircle.two);
	// drawCircle(50, 350, 80, quarterCircle.three);
	// drawCircle(50, 500, 80, quarterCircle.four);

}

function draw() {


}

function drawCircle(posX, posY, width, missingSegment) {
	let start = 0;
	let end = PI * 2;
	if (missingSegment === quarterCircle.one) {
		start = 0;
		end = PI + HALF_PI;
	}
	if (missingSegment === quarterCircle.two) {
		start = HALF_PI;
		end = 0;
	}
	if (missingSegment === quarterCircle.three) {
		start = PI;
		end = HALF_PI;
	}
	if (missingSegment === quarterCircle.four) {
		start = PI + HALF_PI;
		end = PI;
	}
	arc(posX, posY, width, width, start, end, PIE);
}
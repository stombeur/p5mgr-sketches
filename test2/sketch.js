function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(4);

	let originX = 50;
	let originY = 50;
	let width = 50;
	let margin = 20;
	let columns = 10;
	let rows = 10;

	let posX = originX;
	let posY = originY;

	for (let r = 0; r < rows; r++) {
		for (let i = 0; i < columns; i++) {
			drawSquareLegs(posX, posY, width, getRandomBitMask(12));
			posX = posX + width + margin;
		}
		posX = originX;
		posY = posY + width + margin;
	}
}

function draw() {

}

var square = {
	one: 1,
	two: 2,
	three: 4,
	four: 8,
	five: 16,
	six: 32,
	seven: 64,
	eight: 128,
	nine: 256,
	ten: 512,
	eleven: 1024,
	twelve: 2048
}

var all = square.one | square.two | square.three | square.four | square.five | square.six | square.seven | square.eight | square.nine | square.ten | square.eleven | square.twelve;
var sOne = all ^ square.one;
var sTwo = all ^ square.two;

function drawSquareLegs(originX, originY, width, rect) {
	if ((rect & square.one) == square.one) line(originX, originY, originX + width/2, originY); //1
	if ((rect & square.two) == square.two) line(originX + width/2, originY, originX + width, originY); //2
	if ((rect & square.three) == square.three) line(originX + width, originY, originX + width, originY + width/2); //3
	if ((rect & square.four) == square.four) line(originX + width, originY + width/2, originX + width, originY + width); //4
	if ((rect & square.five) == square.five) line(originX + width, originY + width, originX + width/2, originY + width); //5
	if ((rect & square.six) == square.six) line(originX + width/2, originY + width, originX, originY + width); //6
	if ((rect & square.seven) == square.seven) line(originX, originY + width, originX, originY + width / 2); //7
	if ((rect & square.eight) == square.eight) line(originX, originY + width / 2, originX, originY); //8
	if ((rect & square.nine) == square.nine) line(originX + width/2, originY + width/2, originX + width/2, originY); //9
	if ((rect & square.ten) == square.ten) line(originX + width/2, originY + width/2, originX + width, originY + width/2); //10
	if ((rect & square.eleven) == square.eleven) line(originX + width/2, originY + width/2, originX + width/2, originY + width); //11
	if ((rect & square.twelve) == square.twelve) line(originX + width/2, originY + width/2, originX, originY + width/2); //12
}

var asterisk = {
	one: 1,
	two: 2,
	three: 4,
	four: 8,
	five: 16,
	six: 32,
	seven: 64,
	eight: 128
  }

var all = asterisk.one | asterisk.two | asterisk.three | asterisk.four | asterisk.five | asterisk.six | asterisk.seven | asterisk.eight;
var aOne = all ^ asterisk.one;
var aTwo = all ^ asterisk.two;



function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(4);

	let originX = 50;
	let originY = 50;
	let radius = 20;
	let margin = 10;
	let columns = 10;
	let rows = 10;

	let posX = originX;
	let posY = originY;

	for (let r = 0; r < rows; r++) {
		for (let i = 0; i < columns; i++) {
			drawAsteriskInCircle(posX, posY, radius, getRandomAsterisk());
			posX = posX + (radius * 2) + margin;
		}
		posX = originX;
		posY = posY + radius*2 + margin;
	}
}

  function draw() {
	//console.log(getRandomBitMask(8));
  }
  
function drawAsteriskInSquare(zeroX, zeroY, width) {
	line(zeroX, zeroY, zeroX + width, zeroY + width);
	line(zeroX + width/2, zeroY, zeroX + width/2, zeroY + width);
	line(zeroX + width, zeroY, zeroX, zeroY + width);
	line(zeroX + width, zeroY + width/2, zeroX, zeroY + width/2);
}

function drawAsteriskInCircle(originX, originY, radius, star) {
	if ((star & asterisk.one) == asterisk.one) line(originX, originY, originX, originY - radius); //1
	if ((star & asterisk.five) == asterisk.five) line(originX, originY, originX, originY + radius); //5

	if ((star & asterisk.seven) == asterisk.seven) line(originX, originY, originX - radius, originY); //7
	if ((star & asterisk.three) == asterisk.three) line(originX, originY, originX + radius, originY); //3

	if ((star & asterisk.eight) == asterisk.eight) line(originX, originY, originX - (cos(radians(45)) * radius), originY - (sin(radians(45)) * radius)); //8
	if ((star & asterisk.four) == asterisk.four) line(originX, originY, originX + (cos(radians(45)) * radius), originY + (sin(radians(45)) * radius)); //4

	if ((star & asterisk.two) == asterisk.two) line(originX, originY, originX + (cos(radians(45)) * radius), originY - (sin(radians(45)) * radius)); //2
	if ((star & asterisk.six) == asterisk.six) line(originX, originY, originX - (cos(radians(45)) * radius), originY + (sin(radians(45)) * radius)); //6
}

function getRandomInt(max) {
	let x = Math.floor(Math.random() * Math.floor(max));
	//console.log(x);
	return x;
}

function getRandomAsterisk() {
	return getRandomBitMask(8);
}

function getRandomBitMask(flags) {
	let result = 0;

	for (let f = 0; f < flags; f++) {
		if (getRandomInt(2) > 0) result = result | Math.pow(2,f);
	}

	return result;
}
function getRandomInt(max, min = 0) {
	let x = min + Math.floor(Math.random() * Math.floor(max));
	return x;
}

function getRandomBitMask(flags) {
	let result = 0;

	for (let f = 0; f < flags; f++) {
		if (getRandomInt(2) > 0) result = result | Math.pow(2,f);
	}

	return result;
}

class GravityPoint {
	constructor(x, y, size = 1) {
		this.x = x;
		this.y = y;
		this.size = size;
	}
}

function distance(p1, p2) {
	return Math.sqrt((Math.pow(p1.x - p2.x,2) + Math.pow(p1.y - p2.y, 2)));
}

function nearestPoint(p, points) {
	let dist = Number.MAX_VALUE;
	let index = -1;
	for (let i = 0; i < points.length; i++) {
		let d = distance(p, points[i]) / points[i].size;
		if (d < dist) { dist = d; index = i; }
	}
	return index;
}

function angleFromPoints(p1, p2) {
	let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    let degreeAngle = angle * 180 / Math.PI;
    if (degreeAngle < 0) degreeAngle = 360 + degreeAngle;
	return degreeAngle;
}

function oppositeAngle(angle) {
    let oppose = angle + 180;
    if (oppose > 360) oppose = oppose - 360;
    return oppose;
}

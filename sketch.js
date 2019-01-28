function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	noStroke();

    var xPos = 300;
    var yPos = 300;
    var diameter = 800;

    var h = hour();
    var m = minute();
    var s = second();

    //hours
    fill(255, 0, 0, 200);
    arc(xPos, yPos, diameter/2, diameter/2, 0, ((PI + PI) * h / 24) );

    //minutes
    fill(0, 0, 255, 100);
    arc(xPos, yPos, diameter/2, diameter/2, 0, ((PI + PI) * m / 60) );

    //seconds
	fill(0, 200, 0, 100);
    arc(xPos, yPos, diameter/2, diameter/2, 0, ((PI + PI) * s / 60) );
}

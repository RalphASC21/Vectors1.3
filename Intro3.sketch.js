


function setup(){
    createCanvas(400, 400);
    background(0);
}

function draw(){
    translate(width/2, height/2); // shifts origin to the center of the canvas

    // let v = createVector(random(-100, 100), random(-100, 100));
    v = p5.Vector.random2D(50, 100); // creates a random vector within a set of x, y coordinates
    v.mult(100); //multiplies a vector by 100

    strokeWeight(4);
    stroke(255, 50);
    line(0, 0, v.x, v.y);


}
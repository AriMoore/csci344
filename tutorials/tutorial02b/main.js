let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    //invoke any drawing functions inside of setup. functions should all go between "createCanvas()" and "drawGrid()"
    //draw5CirclesWhile();
    //draw5CirclesFor();
    //drawNCircles(40);
    //drawNCirclesFlexible(20, 75, 600, 20);
    //drawNShapesFlexible(20, 100, 800, 400, circle);
    drawNShapesSuperFlexible(25, 125, 800, 200, "circle", "row");
    //draw5RedSquares();
    drawGrid(canvasWidth, canvasHeight);
}

function draw5CirclesWhile() {
    let i = 0;
    let y = 200;
    noFill();
    while (i < 5) {
        circle(100, y, 50); //centerX, centerY, radius
        i++;
        y+=50;
    }
}

function draw5CirclesFor() {
    let y = 200;
    noFill();
    for (i = 0; i < 5; i++) {
        circle(240, y, 50); //centerX, centerY, radius
        y+=50;
    }
}

function drawNCircles(n) {
    let y = 200;
    noFill();
    for (i = 0; i < n; i++) {
        circle(500, y, 50); //centerX, centerY, radius
        y+=50;
    }
}

function drawNCirclesFlexible(n, size, x, y) {
    noFill();
    for (i = 0; i < n; i++) {
        circle(x, y, size); //centerX, centerY, radius
        y+=size;
    }
}

function drawNShapesFlexible(n, size, x, y, shape) {
    noFill();
    for (i = 0; i < n; i++) {
        if (shape === circle) {
            circle(x, y, size);
        }
        else {
            square(x, y, size);
        }
        y+=size;
    }
}

function drawNShapesSuperFlexible(n, size, x, y, shape, direction) {
    noFill();
    fill("red");
    for (i = 0; i < n; i++) {
        if (shape === circle) {
            circle(x, y, size);
            if (direction === "row") {
                x+=size;
            }
            else {
                y+=size;
            }
        }
        else {
            square(x, y, size);
            if (direction === "row") {
                x+=size;
            }
            else {
                y+=size;
            }
        }
    }
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}

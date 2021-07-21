img = "";
status = "";

function preload() {
    img = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    status = true;
    console.log("Model Loaded");
    objectDetector.detect(img, gotResult);
}

function gotResults() {
    if(error) {
        console.log(error);
    } 
    console.log(results);
}

function draw() {
    image(img, 0, 0, 380, 380);
}

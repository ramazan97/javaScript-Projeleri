var myRec = new p5.SpeechRec("en-US", parseResult); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var x, y;
var dx, dy;

var socket;

function setup() {
  // graphics stuff:
  createCanvas(800, 600);
  background(255, 255, 255);

  // instructions:
  textSize(48);
  textAlign(CENTER);

  myRec.start(); // start engine

  // client-side socket.io:
  socket = io();

  noLoop();
}

function draw() {}

function parseResult() {
  // recognition system will often append words into phrases.
  var res = myRec.resultString;
  background(255);
  //text(res, width/2, height/2);
  socket.emit("result", { word: res });
  if (res === "up") {
    delta = 5;
  } else if (res === "down") {
    delta = -5;
  }

  console.log(res);
}

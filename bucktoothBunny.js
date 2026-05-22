var score = 0; // Starts your luck score at 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 

  // Bunny Ears
  stroke(0);
  fill(255);
  ellipse(150, 70, 60, 120);  // left ear
  ellipse(240, 70, 60, 120);  // right ear

  // Bunny Face
  ellipse(200, 170, 150, 150); 

  // Eyes
  var eyesize = 9;
  fill(0);
  ellipse(170, 150, eyesize, eyesize); 
  ellipse(230, 150, eyesize, eyesize); 

  // Mouth
  line(150, 200, 250, 200);   

  // Teeth
  fill(255);
  var teethsize = 30; 
  rect(185, 200, 15, teethsize); 
  rect(200, 200, 15, teethsize); 

  // DISPLAY THE SCORE INSIDE THE CANVAS
  fill(0); // Black text
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("Exam Luck Score: " + score, 200, 350);
}

// THIS FUNCTION DETECTS CLICKS
function mousePressed() {
  // Calculates the distance between the mouse and the center of the bunny face
  var d = dist(mouseX, mouseY, 200, 170);
  
  // If the distance is less than 75 pixels (the radius of the face), it's a hit!
  if (d < 75) {
    score = score + 1;
  }
}

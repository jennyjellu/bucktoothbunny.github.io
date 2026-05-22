var score = 0;
var isClicking = false; // This tracks if you are actively clicking

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 

  stroke(0);
  strokeWeight(1);
  
  // Bunny Ears - They turn pink if you are clicking inside the face!
  if (isClicking) {
    fill(255, 182, 193); // Pink light-up effect
  } else {
    fill(255); // Normal white ears
  }
  ellipse(150, 70, 60, 120);  // left ear
  ellipse(240, 70, 60, 120);  // right ear

  // Bunny Face
  fill(255);
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

  // Score Text Display
  fill(0);
  noStroke();
  textSize(22);
  textAlign(CENTER);
  text("Exam Luck Score: + " + score, 200, 350);
  
  // Reset the pink flash after a few frames
  if (frameCount % 10 == 0) {
    isClicking = false;
  }
}

// CRITICAL: The 'P' must be capitalized!
function mousePressed() {
  // Check the distance from mouse to the center of the face (200, 170)
  var d = dist(mouseX, mouseY, 200, 170);
  
  // If the click is inside the face radius (75 pixels)
  if (d < 75) {
    score = score + 1;
    isClicking = true; // Triggers the pink ears effect
  }
}

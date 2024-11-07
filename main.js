setup();

function setup() {
  let person = prompt("Please enter your name", "");
  let stand = prompt("Please enter your stand's name", "");
  
  let standPowers = [
    "Fire Manipulation",
    "Ice Manipulation",
    "Water Manipulation",
    "Air Manipulation",
    "Ice Manipulation",
    "Rain Manipulation",
    "Calamity Manipulation",
    "Dinosaur Transformation",
    "Sound Manipulation",
    "Blood Manipulation",
    "Mind Control",
    "Time Stop",
    "Time Reversal",
    "Time Acceleration",
    "Time Erase"
  ]
  let standColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "White", "Black", "Brown", "Gray"]
  let standType1 = ["Natural","Artificial"]
  let standType2 = ["Humanoid","Non-Humanoid"]
  
  let standDP = random(0,5)
  let standSpeed = random(0,5)
  let standRange = random(0,100)
  let standPersistence = random(0,5)
  let standPrecision = random(0,5)
  let standPotential = random(0,5)
  
  const container = document.querySelector("#container");
  container.append("", "Stand User: " + person);
  lineBreak();
  container.append("", "Stand Name: " + stand);
  lineBreak();
  container.append("", "Ability: " + generateRandom(standPowers));
  lineBreak();
  container.append("", "Stand Colors: " + generateRandom(standColor) + " and " + generateRandom(standColor));
  lineBreak();
  container.append("", "Type: " + generateRandom(standType1) + " " + generateRandom(standType2));
  lineBreak();
  container.append("", "Destructive Power: " + standDP);
  lineBreak();
  container.append("", "Speed: " + standSpeed);
  lineBreak();
  container.append("", "Stand Range: " + standRange);
  lineBreak();
  container.append("", "Stand Persistence: " + standPersistence);
  lineBreak();
  container.append("", "Stand Precision: " + standPrecision);
  lineBreak();
  container.append("", "Stand Potential: " + standPotential);
  lineBreak();
}
function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function generateRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}
function random(min,max) {
  return Math.floor(Math.random()*(max-min)))+min
}

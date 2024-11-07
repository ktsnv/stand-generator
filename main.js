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
  let standRange = Math.floor(Math.random()*100)
  const container = document.querySelector("#container");
  container.append("", "Stand User: " + person);
  lineBreak();
  container.append("", "Stand Name: " + stand);
  lineBreak();
  container.append("", "Stand Power: " + generateRandom(standPowers));
  lineBreak();
  container.append("", "Stand Range: " + standRange);
  lineBreak();
  container.append("", "Stand Colors: " + generateRandom(standColor) + " and " + generateRandom(standColor));
}
function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function generateRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

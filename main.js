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
  document.createElement("p", "Stand User: " + person)
  document.createElement("p", "Stand Name: " + stand)
  document.createElement("p", "Stand Power: " + generateRandom(standPowers))
  document.createElement("p", "Stand Range: " + standRange)
  document.createElement("p", "Stand Colors: " + generateRandom(standColor) + " and " + generateRandom(standColor))
}

function generateRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

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
  createElement("p", "Stand User: " + person)
  createElement("p", "Stand Name: " + stand)
  createElement("p", "Stand Power: " + generateRandom(standPowers))
}

function generateRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

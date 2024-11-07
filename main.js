function setup() {
  let person = prompt("Please enter your name", "");
  let stand = prompt("Please enter your stand's name", "");
  let standPowers = ["a","b","c","d"]
  createElement("p", "Stand User: " + person)
  createElement("p", "Stand Name: " + stand)
  createElement("p", "Stand Power: " + generateRandom(standPowers))
}

function generateRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))]
}

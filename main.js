setTimeout(setup,1);

function setup() {
  let person = prompt("Please enter your name", "");
  var stand = prompt("Please enter your stand's name", "");
  let rank = ["S","A","B","C","D","F"]
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
  
  var standDP = rank[random(0,5)]
  var standSpeed = rank[random(0,5)]
  var standRange = rank[random(0,5)]
  var standPersistence = rank[random(0,5)]
  var standPrecision = rank[random(0,5)]
  var standPotential = rank[random(0,5)]
  
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
  return Math.floor(Math.random()*(max-min)+min)
}
anychart.onDocumentReady(function () {
    var data = [
      {x: 'Destructive Power', value: standDP},
      {x: 'Speed', value: standSpeed},
      {x: 'Range', value: standRange},
      {x: 'Persistence', value: standPersistence},
      {x: 'Precision', value: standPrecision},
      {x: 'Potential', value: standPotential}
    ];
    // create radar chart
    var chart = anychart.radar();

    // set chart yScale settings
    chart.yScale()
      .minimum(35)
      .maximum(65)
      .ticks({'interval':5});

    // color alternating cells
    chart.yGrid().palette(['gray 0.1', 'gray 0.2']);

    // create first series
    chart.area(data).name(stand).markers(true).fill('#E55934', 0.3).stroke('#E55934');

    // set chart title
    chart.title('Stats')
      // set legend
      .legend(true);

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  });

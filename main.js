setTimeout(setup,1);

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
  
  let standDP = random(1,5)
  let standSpeed = random(1,5)
  let standRange = random(0,100)
  let standPersistence = random(1,5)
  let standPrecision = random(1,5)
  let standPotential = random(1,5)
  
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
  container.append("", "Stand Range: " + standRange + "m");
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
    // our data from bulbapedia
    var data1 = [
      {x: 'Speed', value: 65},
      {x: 'HP', value: 39},
      {x: 'Defense', value: 43},
      {x: 'Special Defense', value: 50},
      {x: 'Special Attack', value: 60},
      {x: 'Attack', value: 52}
    ];

    var data2 = [
      {x: 'Speed', value: 45},
      {x: 'HP', value: 45},
      {x: 'Defense', value: 49},
      {x: 'Special Defense', value: 65},
      {x: 'Special Attack', value: 65},
      {x: 'Attack', value: 49}
    ];

    var data3 = [
      {x: 'Speed', value: 43},
      {x: 'HP', value: 44},
      {x: 'Defense', value: 65},
      {x: 'Special Defense', value: 64},
      {x: 'Special Attack', value: 50},
      {x: 'Attack', value: 48}
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
    chart.area(data1).name('Charmander').markers(true).fill('#E55934', 0.3).stroke('#E55934');
    // create second series
    chart.area(data2).name('Bulbasaur').markers(true).fill('#9BC53D', 0.3).stroke('#9BC53D');
    // create third series
    chart.area(data3).name('Squirtle').markers(true).fill('#5BC0EB', 0.3).stroke('#5BC0EB');

    // set chart title
    chart.title('Starter Pokemon Comparison Chart')
      // set legend
      .legend(true);

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  });

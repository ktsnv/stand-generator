anychart.onDocumentReady(setTimeout(setup,1));
let rank = ["F","E","D","C","B","A","Infinite"];
let standDP = random(0,6);
let standSpeed = random(0,6);
let standRange = random(0,6);
let standPersistence = random(0,6);
let standPrecision = random(0,6);
let standPotential = random(0,6);
function setup() {
  let person = prompt("Please enter your name", "");
  let stand = prompt("Please enter your stand's name", "");
  if (standPotential == 6)
  {
    stand += " Requiem";
  }
  fetch('standPowers.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data);
    console.log(data.split(","));
    const standPowers = data.split(",");
  })
  let standRequiemPowers = [
    "Stand Manipulation",
    "Love Train",
    "Nullification",
    "Time Stop",
    "Time Acceleration",
    "Return to Zero",
    "Infinite Death Loop",
    "Soul Manipulation",
    "Regeneration",
    "Bites the Dust"
  ]
  let standColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "White", "Black", "Brown", "Gray"]
  let standType1 = ["Natural","Artificial"]
  let standType2 = ["Humanoid","Non-Humanoid"]  
  const container = document.querySelector("#container");
  header("Stand Master: " + person);
  header("Stand: " + stand);
  header("Abilities: ");
  let i = 0;
  let r = random(1,3);
  while (i<r)
  {
    i++;
    let temp = generateRandom(standPowers);
    container.append("",temp);
    lineBreak();
    const index = standPowers.indexOf(temp);
    if (index > -1) {
      standPowers.splice(index, 1);
    }
    if (standPotential == 6)
    {
      let temp = generateRandom(standRequiemPowers);
      container.append("",temp);
      lineBreak();
      const index = standRequiemPowers.indexOf(temp);
      if (index > -1) {
        standRequiemPowers.splice(index, 1);
      }
    }
  }
  header("Colors: ");
  container.append(generateRandom(standColor) + " and " + generateRandom(standColor));
  header("Type: ");
  container.append(generateRandom(standType1) + " " + generateRandom(standType2));
  header("Destructive Power: "+ rank[standDP]);
  header("Speed: "+ rank[standSpeed]);
  header("Range: "+ rank[standRange]);
  header("Persistence: "+ rank[standPersistence]);
  header("Precision: "+ rank[standPrecision]);
  header("Potential: "+ rank[standPotential]);
  createChart();
}
function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function header(arr) {
  const container = document.querySelector("#container");
  const header = document.createElement("h1");
  header.textContent = arr;
  container.append(header);
}
function generateRandom(arr) {
  return arr[random(0,arr.length-1)]
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
function createChart()
{
    anychart.theme({defaultFontSettings: {fontColor: 'White', fontSize: '50'}});
    var data = [
      {x: 'Destructive Power', value: standDP},
      {x: 'Speed', value: standSpeed},
      {x: 'Range', value: standRange},
      {x: 'Persistence', value: standPersistence},
      {x: 'Precision', value: standPrecision},
      {x: 'Potential', value: standPotential}
    ];
    var chart = anychart.radar();
    chart.yScale()
      .minimum(0)
      .maximum(6)
      .ticks({'interval':1});
    chart.area(data).name('Stand').fill('#FF69B4', 0.75).stroke('#E55934', 0);
    chart.legend(false);
    chart.background().fill("red", 0);
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
}

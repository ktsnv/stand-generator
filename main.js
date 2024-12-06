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
    stand.concat(" ", "Requiem");
  }
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
    "Time Reversal",
    "Time Erase",
    "Possession",
    "Sand Manipulation",
    "Homing Bullets",
    "Scale Projectiles",
    "Ship Manipulation",
    "Object Possession",
    "Appearance Replication",
    "Light Manifestation",
    "Water Manifestation",
    "Sand Manifestation",
    "Parasitism",
    "Flesh Disguise",
    "Fog String Puppetry",
    "Sun Replica",
    "Lasers",
    "Dream World Control",
    "Pain Synchronization",
    "Wish Granting",
    "Mineral Assimiliation",
    "Fire Manifestation",
    "Face Molding",
    "Clairvoyance Comic Book",
    "John Toothbrush",
    "Sword Manifestation",
    "Shadow Manifestation",
    "Soul Stealing (Poker Chip)",
    "Soul Stealing (Doll)",
    "Illusion Manipulation",
    "Void Mouth",
    "Restoration",
    "Erasing",
    "Powerful Sound Effects",
    "Gravity Manipulation",
    "Bomb Manipulation",
    "Book Transmutation",
    "Sheer Heart Attack",
    "Soldier Manifestation",
    "Electricity Manifestation",
    "Electricity Manipulation",
    "Guilt Lock",
    "Doppleganger",
    "Hair Manipulation",
    "Healing",
    "Invisibility",
    "Colony",
    "Picture Trap",
    "Power Stealing",
    "Lure Target",
    "Air Manipulation",
    "Power Reflecting",
    "Paper Sealing",
    "Life Giving",
    "Zipper Manipulation",
    "Past Recreation",
    "Plane Manifestation",
    "Poison",
    "Softness Manipulation",
    "Pocket Dimension",
    "Shadow Manipulation",
    "Size Manipulation",
    "Mirror World",
    "Age Manipulation",
    "Fishing Pole Manifestation",
    "Iron Manipulation",
    "Deadly Mold Manipulation",
    "Liquefacation",
    "String Manifestation",
    "Wire Manifestation",
    "Sticker Duplication",
    "Weather Manipulation",
    "Store Energy",
    "Stand/Memory Steal (CD)",
    "Zero Gravity",
    "Zombie Creation",
    "Aggresiveness Manipulation",
    "Feng Shui",
    "Acid Saliva",
    "Memory Locking",
    "Fiction Creation",
    "Nail Shot",
    "Flesh Spray",
    "Reality Hopping",
    "Invunerability while standing still",
    "Bubble Creation",
    "Bubble Creation (Go Beyond)",
    "Technology Manipulation",
    "Smell Tracking",
    "Nuts and Bolts",
    "Card Storing",
    "Face Differention",
    "Heat Manipulation",
  ]
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
  container.append("", "Stand User: " + person);
  lineBreak();
  container.append("", "Stand Name: " + stand);
  lineBreak();
  container.append("", "Ability: ");
  lineBreak();
  let i = 0;
  let r = random(1,3);
  while (i<r)
  {
    i++;
    let temp = generateRandom(standPowers);
    container.append("",temp);
    const index = standPowers.indexOf(temp);
    if (index > -1) {
      standPowers.splice(index, 1);
    }
    if (standPotential == 6)
    {
      let temp = generateRandom(standRequiemPowers);
      container.append("",temp);
      const index = standRequiemPowers.indexOf(temp);
      if (index > -1) {
        standRequiemPowers.splice(index, 1);
      }
    }
    lineBreak();
  }
  container.append("", "Stand Colors: " + generateRandom(standColor) + " and " + generateRandom(standColor));
  lineBreak();
  container.append("", "Type: " + generateRandom(standType1) + " " + generateRandom(standType2));
  lineBreak();
  container.append("", "Destructive Power: " + rank[standDP]);
  lineBreak();
  container.append("", "Speed: " + rank[standSpeed]);
  lineBreak();
  container.append("", "Stand Range: " + rank[standRange]);
  lineBreak();
  container.append("", "Stand Persistence: " + rank[standPersistence]);
  lineBreak();
  container.append("", "Stand Precision: " + rank[standPrecision]);
  lineBreak();
  container.append("", "Stand Potential: " + rank[standPotential]);
  lineBreak();
  createChart();
}
function lineBreak() {
  const container = document.querySelector("#container");
  const br = document.createElement("br");
  container.append(br);
}
function generateRandom(arr) {
  return arr[random(0,arr.length-1)]
}
function random(min,max) {
  return Math.round(Math.random()*(max-min)+min)
}
function createChart()
{
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
      .minimum(0)
      .maximum(6)
      .ticks({'interval':1});

    // color alternating cells
    chart.yGrid().palette(['gray 0.1', 'gray 0.2']);

    // create first series
    chart.area(data).name('Stand').markers(true).fill('#E55934', 0.3).stroke('#E55934');

    // set chart title
    chart.title('Stats')
      // set legend
      .legend(false);

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
}

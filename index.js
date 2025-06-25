
function superbowlWin(record) {

  const winEntry = record.find(game => game.result === "W");


  if (winEntry) {
   
    return winEntry.year;
  } else {
  
    return undefined;
  }
}


const sampleRecord = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "1998", result: "W" }, 
  { year: "1997", result: "W" },
];

console.log("Win year for sampleRecord:", superbowlWin(sampleRecord));


const sadReality = [
  { year: "2020", result: "N/A" },
  { year: "2019", result: "N/A" },
  { year: "2018", result: "L" }
];

console.log("Win year for sadReality:", superbowlWin(sadReality));



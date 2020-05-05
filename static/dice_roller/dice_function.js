var index = Math.floor(Math.random() * diceRolls.length); //start at a random place in the array
var maxDiceRoll = 32;
var result1 = "-----";
var result2 = "";

//Retrieves parameters, increases index and retrieves value from pre-generated random sequence, calculates roll(s)
function roll(dicesize) {
  load()
  var times = parseInt(document.getElementById("times").value);
  var timeword = "times";
  var resword = "results, including adjustments, are";
  if (times == 1 || Number.isNaN(times)){
    timeword = "time";
    resword = "result, including adjustments, is";
  }
  var bonus = parseInt(document.getElementById("bonus").value);
  var bstr = `a bonus of +${bonus}`;
  if (bonus < 0){
    bstr = `a handicap of ${bonus}`;
  } else if (bonus == 0 || Number.isNaN(bonus)){
    bstr = "no bonus";
  }

  if (Number.isNaN(times) || Number.isNaN(bonus)) {
    times = 1;
    bonus = 0;
  }
  var res = [];
  for (i = 0; i < times; i++){
    increaseIndex();
    var fract = (diceRolls[index]+1)/maxDiceRoll;
    var normalizedRoll = Math.ceil(fract*dicesize);
    res.push(normalizedRoll+bonus);
  }
  result1 = `You rolled a ${dicesize}-sided die ${times} ${timeword} with ${bstr}`
  result2 = `The ${resword} ${res.toString()}`
  
  document.getElementById("result1").innerHTML = result1;
  document.getElementById("result2").innerHTML = result2;
}

//Get the answer area to display a loading gif for 1 second before displaying the answer
function load() {
  document.getElementById("result1").style.display = "none";
  document.getElementById("result2").style.display = "none";
  document.getElementById("loader").style.display = "block";

  setTimeout(function() {
    document.getElementById("result1").style.display = "block";
    document.getElementById("result2").style.display = "block";
    document.getElementById("loader").style.display = "none";
  }, 1000);
}

function increaseIndex() { //go to the next number. If its the end of the array, go back to the front
  if (index < diceRolls.length-1) {
      index ++;
  } else {
    index = 0;
  }
}
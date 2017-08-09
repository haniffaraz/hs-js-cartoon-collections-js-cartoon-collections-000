function dwarfRollCall(dwarves) {
  var output = '';
  for ( var i=0; i < dwarves.length; i++) {
    output += (i + 1) + '. ' + dwarves[i] + ' ';
  }

  return output;
}

function summonCaptainPlanet(planeteerCalls){
  var output = [];
  for ( var i=0; i < planeteerCalls.length; i++) {
    output.push(planeteerCalls[i].toUpperCase() + '!' );
  }
  return output;
}

function longPlaneteerCalls(words) {
  var output = false;

  for (var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      output = true;
    }
  }

  return output;
}

function findTheCheese (foods) {
  var cheese = ['gouda', 'cheddar', 'camembert'];
  for (var i=0; i < foods.length; i++) {
    for (var j=0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return cheese[j]
      }
    }
  }
        return 'no cheese!'
      }

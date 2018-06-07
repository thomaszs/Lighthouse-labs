var inputs = process.argv.slice(2);
var times = inputs[0];

var rolled = "Rolled " + times + " dice: "; 

for (var i = 0; i < times; i++) {
    var random =  Math.floor(Math.random() * 6) + 1; //The maximum is inclusive and the minimum is inclusive 
    var timesRolled = random;
    rolled += random + ", ";
}

console.log(rolled.substr(0, rolled.length - 2)); 

console.log('')
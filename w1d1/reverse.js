var inputs = process.argv.slice(2);

function reverseStrings (reverse) {
    var newString = "";
    for (var i = reverse.length - 1; i >= 0; i--) {
        newString += reverse[i];
    }
    return newString;
}

inputs.forEach(function(input){
    var reversedString = reverseStrings(input);
    console.log(reversedString);
})


var inputs = process.argv.slice(2);

function pigLatin (str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        var removeFirst = str.substring(1)
        newString = removeFirst + str.charAt(0) + "ay";
    }
    return newString;
}

var sentence = "";
inputs.forEach(function(input, index){
    var pigLatinDone = pigLatin(input);
    sentence = sentence + pigLatinDone +  " "; 
})
console.log(sentence);


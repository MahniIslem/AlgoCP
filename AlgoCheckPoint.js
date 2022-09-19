function sentenceread (str){
    var counter = 0;
    for (let index = 0; index < str.length; index++) {
        counter += 1;
    
    }
    return counter;
   
}
var input = prompt("input your string");
console.log(sentenceread(input))


function vowelsCounter(str) {
    var vc = 0;
    for (var char of str){
        if(char == "a" || char == "o" || char == "i" || char == "u" || char == "e" || char == "y" ){
            vc += 1;
        }
    }
    return vc;
}    
var input = prompt("input your string");
console.log(vowelsCounter(input))

function wordCounter(str){
    var wc = 0;
    for(let index=1; index< str.length; index++){
        if((str[index] == " ") || (str[index] == ".")){
            wc += 1;
        }
    }
    return wc;
}
var input = prompt("input your string");
console.log(wordCounter(input))
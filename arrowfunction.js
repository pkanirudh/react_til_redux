
var converter = function(funcRef){
    
    var result = funcRef();

    return result;
}

var tempConverter = (faren)=> 5/9 * (faren-32);
var usdToInr = (usd) => usd*65;
console.log(converter(tempConverter(212)));
console.log(converter(usdToInr(230)))

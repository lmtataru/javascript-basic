function calculator(operator, value1, value2) {
  var result;
  if( operator == "subtraction"){
    result = value1 - value2;
  } else if( operator == "addition"){
    result = value1 + value2;
  } else if(operator == "multiplication"){
    result = value1 * value2;
}
   return result;
}

function main(){
    var result;
    result = calculator("subtraction", 40, 20);
    console.log(result);
    result = calculator("addition", 40, 20);
    console.log(result);
    result = calculator("multiplication", 40, 20);
    console.log(result);
}

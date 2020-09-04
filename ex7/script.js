function myFunction(){
    var products=["table", "chair", "computer", "notebook"];
    var result = "";
    var i;
    for(i=0; i < products.length; i++){
       result += "The object " + products[i] + " is at position: " + i + "\n";
    }
    console.log(result);
}
function increment() {
  // to take value from input field .innerHTML is used , for the input all the values of h1 is in format of string so convert it into number by Number keyword
  var number = Number(document.getElementById("number").innerHTML); //take value from h1 tag
  document.getElementById("number").innerHTML = number + 1; //innerhtml means updating a value
  //we need to use that value to update that value only
}

function decrement() {
  var number = Number(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = number - 1;
}

function neutral() {
  //   var number = Number(document.getElementById("number").innerHTML);      //here we do not need it coz whatever maybe value convert it to zero;
  document.getElementById("number").innerHTML = 0;
}

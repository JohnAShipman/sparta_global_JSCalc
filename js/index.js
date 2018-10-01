//Variable Declaration
var FirstNum;
var SecondNum;
var operation;
var OpSymb;
var OpDesc;
var FinalNum;
var Continue;

// Main Code
do {
  operation = prompt("What operation do you want to do? (1) Addition, (2) Subtraction, (3) Multiplication, (4) Division");
  FirstNum = prompt("What is the starting number?");

  operation = parseFloat(operation); //Convert input to float

  // Checks the operation
  if (operation == 2) {
    OpSymb = "-";
    OpDesc = "subtract from your start number?";
  } else if (operation == 3) {
    OpSymb = "*";
    OpDesc = "multiply your start number by?";
  } else if (operation == 4) {
    OpSymb = "/";
    OpDesc = "divide your start number by?";
  } else {
    OpSymb = "+";
    OpDesc = "add to your start number?";
  }

  SecondNum = prompt("What number do you want to " + OpDesc);

  FirstNum = parseFloat(FirstNum); //Convert input to float
  SecondNum = parseFloat(SecondNum); //Convert input to float

  // The calculation
  if (operation == 2) {
    FinalNum = FirstNum - SecondNum;
  } else if (operation == 3) {
    FinalNum = FirstNum * SecondNum;
  } else if (operation == 4) {
    FinalNum = FirstNum / SecondNum;
  } else {
    FinalNum = FirstNum + SecondNum;
  }

  // Prints result
  alert(FirstNum + " " + OpSymb + " " + SecondNum + " = " + FinalNum);

  // Check for Continue;
  Continue = prompt("Continue? (1) Yes, (2) No");
} while (Continue == "1");

function main(){
	// Importing the module
const readline = require("readline-sync");
  
// Enter the number
console.log("Enter x")
let x = Number(readline.question());
console.log("Enter y")
let y = Number(readline.question());
	//here 

var ad=(x+y)*(x-y)
console.log(ad)

}

main()
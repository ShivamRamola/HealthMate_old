const readline = require("readline"); // ye readline ek module ko import krti hai 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); // readline module se ek interface banaya hai jo input process.stdin se lete hai aur output process.stdout par deta hai

rl.question("Enter your Marks: ", function (marks) { // readline module ke question function se ek question puchha hai aur ye function ke liye ek callback function diya hai
    marks = Number(marks);
    if (marks >= 90){
        console.log("A Grade");
    }
    else if (marks >= 80){
        console.log("B Grade");
    }else {
        console.log("Needs improvement")
    }
})



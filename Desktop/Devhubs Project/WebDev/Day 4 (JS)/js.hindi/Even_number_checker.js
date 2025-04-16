const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter a number : ", function(num){
    num = Number (num);

    if (isNaN(num)){// check if the input is a number
        console.log("Please enter a valid number: ");
    }else if (num % 2 == 0) {
        console.log("it is an Even Number")
    }else {
        console.log("It's an ODD number");   
    }
    r1.close();
})

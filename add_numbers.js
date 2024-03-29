const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    
    if (numsLeft > 0) {
       
        reader.question('Please input a number:', function (number) {
            sum += parseInt(number);
            console.log(`Total Sum: ${sum}`);
            numsLeft--;
            console.log(`Numbers remaining: ${numsLeft}`);
            addNumbers(sum, numsLeft, completionCallback)
        }) 
    } if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
    
}



addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

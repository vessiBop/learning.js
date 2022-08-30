console.log("Hello World from the external script.js file");
// console.log("I enjoy writing code");
/* console.log("This is written in a");
console.log("Multi-line");
console.log("otherwise known as block-comment");
console.log("these commands will NOT be executed"); */
console.log ("I hope you like my super complex website ;)");

const myFirstName = "Silvestre";
const myLastName = "Fernandez";

/* Rule of thumb - Start with const, use as much as possible as it assigns a constant value to the variable
e.g. const x = 2 if you need to change this for any reason, then change 'const' to 'let' but 
avoid using var at all costs */

console.log("The value in the variable myFirstName is ");
console.log(myFirstName);
console.log("The value for the variable myLastName is"); console.log(myLastName);

/* Conditionals Syntax 
        if (1 === 1) {
            console.log("The condition is true");
        } 
        If the condition is true, the code within the "if statement will run. Otherwise the program continues.
        Other statements that could come after the "if" are "else if" and "else".
        
        */

const x = 10

if ( x < 0 ) { 
    console.log("x is a negative number"); 
} else if (x === 0) {
    console.log ("x is 0"); 
} else { 
    console.log("x is a positive number");
}


if ( x > 5 && x < 15 ) { 
    console.log ("x is between 6 & 14")
}



let berry ='banana'

switch (berry) {
    case 'eggplant':
        console.log('the berry is an eggplant');
        break;
    case 'banana':
        console.log('the berry is a banana');
        break;
    case 'grape':
        console.log('the berry is a grape');
        break;
    default:
        console.log('404 berry not found')

}

for (let i = 1; i <= 100; i++)
{
    console.log(i);
}
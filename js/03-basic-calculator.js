// IMPORT THE MODULE
function add(num_1,num_2) {
    return num_1 + num_2
}

function subtract(num_1,num_2) {
    return num_1 - num_2
}

function multiply(num_1,num_2) {
    return num_1 * num_2
}

function divide(num_1,num_2) {
    return num_1 / num_2
}

let operation
let num_1
let num_2

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
do {
num_1 = Number(prompt('Enter first number'))
num_2 = Number(prompt('Enter second number'))
operation = prompt('Enter operation')
if (!(operation == '+' || operation == '-' || operation == '*' || operation == '/'))
    alert('You did not enter the correct operator. Try again')
} while(!(operation == '+' || operation == '-' || operation == '*' || operation == '/'))

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch (operation) {
    case '+':
        alert(add(num_1,num_2))
        break;
    case '-':
        alert(subtract(num_1,num_2))
        break; 
    case '*':
        alert(multiply(num_1,num_2))
        break; 
    case '/':
        alert(divide(num_1,num_2))
        break;
    default:
        alert('Error occured')
        break;
}
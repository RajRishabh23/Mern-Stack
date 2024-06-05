// 1. Variable Declaration and Initialization:
//    - Write a program that declares variables of different data types (integer, float, character, string, boolean). Initialize them with appropriate values and display these values using console output.


// let age=21;
// let age1=42.6;
// let name="Raju";
// let char='c';
// console.log(5==='5');
// console.log(age+" "+age1+" "+name+" "+char);



// 2. Type Conversion:
//    - Create a program that demonstrates implicit and explicit type conversion. Include examples where you convert an integer to a float, a float to an integer, a string to an integer, and an integer to a string. Print the results to the console.

// let age="21";
// let newAge=Number(age);
// console.log(typeof newAge);


// let age=21;
// let newAge=String(age);
// console.log(typeof newAge);


// let age=21;
// let newAge=parseFloat(age);
// console.log(newAge);

// let age=21.6;
// let newAge=parseInt(age);
// console.log(typeof newAge);


// 3. Data Type Operations:
//    - Develop a program that performs various operations on different data types. For example, add two integers, concatenate two strings, and perform logical operations on boolean variables. Display the results of each operation.



// let a=10;
// let b=5;

// console.log(a+b);
// console.log(a*b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let firstName="Rishabh";
// let lastName="Raj";

// let name=firstName.concat(lastName);
// console.log(firstName.length);
// console.log(name);

// console.log(5 > 10) && (10>8);
// console.log(5 < 10) || (10>8);


// 4. Array and List Manipulation:
//    - Write a program that initializes an array or list with a set of integers. Perform operations like finding the maximum, minimum, sum, and average of the elements. Print the results to the console.


// let array=[3,6,2,5,8];

// let newArray=array.sort;

// console.log(array[array.length-1]);

// console.log(array[0]);

// let array2=[3,3,8,9];

// let concat=array.concat(array2);
// console.log(concat.sort());

// let a=5;
// let b=10;
// let c=20;

// let result=(a+b+c)/2;
// console.log(result);

// 5. User Input and Data Type Conversion:
//    - Create a program that prompts the user to enter their age (integer), height (float), and name (string). Convert these inputs to the appropriate data types if necessary and display them in a formatted string.

// let name=String(prompt("Enter your name:"));
// let age=parseInt(prompt("Enter your age :"));
// let height = parseFloat(prompt("Enter your height:"));


// console.log("The name of the user is " +String(name) + ", age is " +String(age)+ "and height is "+String(height));


// ### Displaying the Data using Console

// 1. Basic Output:
//    - Write a program that displays a welcome message and your favorite quote using console output.

// let a="Welcome to you all";

// let myFavQuote="Word hard";

// console.log(a);
// console.log(myFavQuote);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment Operators

// 8. Practical Question:
//    - Write a script that demonstrates the use of different assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`).

let a = 10;
let b = 5;

let c = a + b;
console.log("Result of '=' operator:", c);
a += b;
console.log("Result of '+=' operator:", a);
a -= b;
console.log("Result of '-=' operator:", a);
a *= b;
console.log("Result of '*=' operator:", a);
a /= b;
console.log("Result of '/=' operator:", a);
a %= b;
console.log("Result of '%=' operator:", a);

// 1. Array Reversal:
//    - Write a function `reverse_array(arr)` that takes an array and returns a new array with the elements in reverse order.
//    - Write a main function that initializes an array and prints both the original and reversed arrays using `reverse_array`.


function reverse_array(arr) 
{
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
function main() 
{
    let original = [1, 2, 3, 4, 5];
    console.log("Original", original);
    let reversed = reverse_array(original);
    console.log("Reversed", reversed);
}
main();



// 12. Order Calculation:
//     - Extend the restaurant object to include an array of current orders. Write a method to calculate the total cost of the orders and another method to clear all orders. Demonstrate these methods.



// #### Topic 5: Accessing Properties Outside & Inside
// 8. Internal Access:
// - Inside the `student` object, add a method `updateGrade(newGrade)` that updates the
// `grade` property.

let student = 
{
    name: "Rishabh",
    grade: 64,
    updateGrade: function(newGrade) 
    {
        this.grade = newGrade;
    }
};

console.log("Initial grade:", student.grade);
student.updateGrade(90);
console.log("Updated grade:", student.grade);


// 5. Loop-Based Display:
// - Develop a program that uses a loop to display the multiplication table for a number
// provided by the user (up to 10 times the number). Ensure the output is neatly formatted.

let number = parseInt(prompt("Enter a number"));

if (!isNaN(number)) 
    {
    console.log(`Multiplication table for ${number}`);
    for (let i = 1; i <= 10; i++) 
        {
        console.log(`${number} x ${i} = ${number * i}`);
        }
}
 else 
{
    console.log("Invalid input");
}


/*Hey Prepstars!!!  By now, you should have a good understanding of the basics of Javascript. 

The following exercises will be a good review of the materials we covered in class. Run node in your terminal to test your code.

Don't forget to commit and push your work after each completed exercise.

Now, unleash your coding beast!

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/

var yourName = 'Brett Matsumoto';
console.log('Question 1: My Name is ' + yourName + ".");
var neighborName = 'Mr.Rogers';
console.log('Question 1: My neightbors name is ' + neighborName + ".");
var teacherName = 'Vic';
console.log('Question 1: My Teachers name is ' + teacherName + ".");

/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear. Please assign the actual data for each variable.
Console log each variable.*/

var numberOfFloorsBurjKhalifa = 163;
console.log('Question 2: The number of floors in the Burj Khalifa is ' + numberOfFloorsBurjKhalifa + ".");
var tokyoOlympicsYear = 2020;
console.log('Question 2: The year the Olympics will be held in Tokyo is ' + tokyoOlympicsYear + ".");

/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/

var lovesPrepClass = true;
console.log('Question 3: Boolean value for lovesPrepClass is: ' + lovesPrepClass + ".");
var eatsDonuts = false;
console.log('Question 3: Boolean value for eatsDonuts is: ' + eatsDonuts + ".");
var drinksGin = true;
console.log('Question 3: Boolean value for drinksGin is: ' + drinksGin + ".");

/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/

var completedCodingChallenge = null;
console.log('Question 4: Set completedCodingChallenge to ' + completedCodingChallenge + '.');
var traveledToSpace = null;
console.log('Question 4: Set traveledToSpace to ' + traveledToSpace + '.');

/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of any 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/

var japanPrefectures = ['Hokkadio', 'Tohoku', 'Kanto', 'Chubu', 'Kansai'];
console.log('Question 5: japanPrefectures array: ' + japanPrefectures + '.');
console.log('Question 5: Index 1 of japanPrefectures array: ' + japanPrefectures[1] + '.');
console.log('Question 5: Index 3 of japanPrefectures array: ' + japanPrefectures[3] + '.');

/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/

var planets = ['Murcury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
console.log('Question 6: planets array: ' + planets + '.');
console.log('Question 6: Find "Earth": ' + planets[2]);
console.log('Question 6: find "Uranus": ' + planets[6]);

/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/

var india = ['Taj Mahal', 'Amber Palace', 'Hawa Mahal'];
console.log('Question 7: india array: ' + india + '.');

/*8. Adding new elements to an array.
Add another popular tourist attraction to the india variable from position 1 of the index.
(hint, it is not the push() method). Console log the variable.*/

india.unshift('Red Fort');
console.log('Question 8: add new first element to india array: ' + india + '.');

/*9. Removing the last element from an array.
Using the same india variable, remove the last element from the array. Console log the variable. */

india.pop();
console.log('Question 9: remove last element from india array: ' + india + '.');

/*10. Removing an element from an array into a new array. 
Removethe first two elements in the snacks array and return a new array.
Console log the new variable. */

var snacks = ["peanut butter cup oreo", "birthday cake oreo", "banana split oreo", "watermelon oreo", "cookie dough oreo", "creamsicle oreo"];
console.log('Question 10: snacks array: ' + snacks + '.');
snacks.shift();
snacks.shift();
snackLess = snacks;
console.log('Question 10: new snacks array: ' + snackLess + '.');

/*11. Declare two variables with names of your choosing and use the triple comparison operator (===) to compare:
a) two strings "Racecar" and "racecar"
b) a string and a number "three" and 3

console log each variable*/

var car1 = 'Racecar';
var car2 = 'racecar';
var res1 = car1 === car2;
console.log('Question 11(a): "Racecar" === "racecar" is ' + res1 + '.');

var num1 = 'three';
var num2 = 3;
var res2 = num1 === num2;
console.log('Question 11(b): "three" === "3" is ' + res2 + '.');

/*12.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/

 var hotel = {
    name: 'Hilton',
    rooms: 200,
    pool: true,
    checkIn: null,
 }
 console.log(hotel);

/*13.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/

 var car = {
    make: 'BMW',
    model: 'X5',
    year: 2015,
    doors: 4,
 }
 console.log(car);

/*14.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a property named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/

var bigBox = {};
bigBox.size = Math.floor(Math.random()*50);
bigBox.color = 'Green';
bigBox.contents = [];
console.log(bigBox);

/*15.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pink'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 

var colorMeBadd = 
{
   iro: 
   {
      akai: 'red',
      aoi: 'blue',
      midori: 'green',
      shiroi: 'white',
      pinku: 'pink',
      murasaki: 'purple',
   },
   isJapanese: true,
}
console.log(colorMeBadd);

/*16. As the general manager for the DevLeague Prep Beer Pong Team, your job is to select the starting players from the roster array. Create two variables, Ateam and Bteam and assign each an empty array. You will then assigned players that have an even number index position to the Ateam and odd number index position to the Bteam. Let the games begin! Console log the results.*/

var roster = ["Alex", "Laura", "Sami", "Jasmine", "Adam", "Dakota", "Jonathon", "Luther", "Kevin", "Vic"];

/*17. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/

/*18. Declare a function named addUp.
This function will take a number parameter and add up all the numbers from 1 to that number.
The parameter will be any number from 1 to 88.*/

/*19. Declare a variable named oddNumbers and assign it to an empty array
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/

/*20.  Declare a function named oldEnough.
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in the Antigua. Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/

/*21. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 14.  Console log the result.*/

/*22.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/

/*23. Declare a function named letterCap which takes a single parameter str. This function will capitalize the first letter of the string you pass in to invoke the function. 
*/

/*24. Declare a function named longestWord which takes a single parameter str. This function will return the longest word in the string when you invoke this function.*/ 

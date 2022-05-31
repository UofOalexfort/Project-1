/*  
CIT 281 Project 1
Name: Alex Fort
 */

//----------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Details: Random Number

//Output to the console a string of random length between 5 - 25 characters (range inclusive) 
    in length, that consists of all random lowercase letters from the English alphabet.

//You have no restriction on what type of code you can use, but you must be able to explain your code. 
    I strongly recommend trying to solve this assignment as much as possible on your own, 
    and then refactor the code for efficiency and readability.
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------

function scramble(min,max) {                                                            //function that contains my code, parameter min is inclusive and parameter max is exclusive 
    let result = "";                                                                    //defining result as an empty string will ensure the function returns a string
    const characters = 'abcdefghijklmnopqrstuvwxyz';                                    //variable characters contains the string of characters that my function will "pull from"
    const charactersLength = characters.length;                                         //charactersLength is initialized to the numerical length of the variable characters

    for ( let i = 0; i < Math.floor(Math.random() * (max - min) + min); i++ ) {         //the for loop determines the length of the string that will output based on the random number that is generated. Math.random() generates a random number between 0-1, and Math.Floor rounds that number to the nearest whole number. min and max set the minimum and maximum possible lengths (as defined when calling the function). - This line also contains the random integer code provided
      result += characters.charAt(Math.random() * charactersLength);                    //result = result + characters.charAt(Math.Random() - uses the charAt() method in tandem with Math.random to randomly pick a character from the characters variable. CharactersLength allows the code to pick from the entirity of the string within variable characters. If the code: characters.charAt(Math.random() * charactersLength); was to run without the for loop on the line above, it would only output a single random character from the variable characters

   }
   console.log(result);                                                                 //prints the scramble to the debug console as a string

   return result;                                                                       //returns the random scramble as a string, becasue result is defined as an empty string 
}
scramble(5,26);                                                                         //min is inclusive and max is exclusive, so the length of the returned string will be between 5 and 25 (numbers greater than or euqual 4 are excluded and numbers greater than or euqual to 26 are also excluded)










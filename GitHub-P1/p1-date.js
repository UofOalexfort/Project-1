/*  
CIT 281 Project 1
Name: Alex Fort
 */

//----------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Details: Day of the Week

Output to the console the day of the week of the current day. 
    The day of the week must be the full name for the day (e.g., Sunday, Monday).

Your solution must use an array that contains the days of the week.

Try to come up with a single line of code, including the days of the week array, to solve this problem, although multi-line answers are acceptable. 
    You should solve the problem, and then refactor if possible into a single line of code.

Execute your program using the command line, as well as the Run and Debug VSCode option.
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------
    
 function whatDayIsIt(){                                                                            //Function that contains code to display current weekday
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    //array with days of the week as strings -js counts Sunday as the begging of the week, and saturday as the last day. So Sunday should be indexed as [0] in the array
    const createDate = new Date().getDay();                                                         //variable createDate is initialized to current day, based on the local time, and .getDay() converts the resulting date into a number (0-6). essentially, createDate variable is equal to the number created by .getDay()
    let day = daysOfWeek[createDate];                                                               //variable day access the array daysOfWeek[] and uses the createDate variable, aka the number resulting from .GetDay(), as the index value to pull the correlating string from the array
    console.log(day);                                                                               //console.log(day) outputs the result of the comment above to the debug console as a string
           
    return day                                                                                      //return is always the last keyword within a funtion - returns the current day of the week according to the logic commented above
 }                                                                                                  //function "ends" - code insidee the {} is considered part of the function
 whatDayIsIt();                                                                                     //function needs to be called for code to execute


    //to execute within the command line: 
        //navigate to users/alexfort/desktop/cit281/p1
        //node p1-date.js


        
        

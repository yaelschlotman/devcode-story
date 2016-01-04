"use strict";
var number;
    for (number = 1; number < 101; number++){
    	if (number % 3 === 0 && number % 5 === 0){
    		console.log("Fizzbuzz");
    	}else if (number % 5 === 0){
            console.log("Buzz");
    	}else if (number % 3 === 0){
    	    console.log("Fizz");
    	}else {

    		console.log("The number is " + number);
    	}
    }
 
    
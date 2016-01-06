"use strict";
function getUserValues(message){
	var userValue;
	userValue = window.prompt(customMessage);
	return userValue;
}
function employerName(name){
    var name;
    name = getUserValues("Enter Employee Name.\nIf no more entries, enter \"DONE\".");
    return name;
}
function findHoursPerWeek(hours){
	var hoursperweek;
	hoursperweek = getUserValues("Enter Number of Hours This Week.  \nIf no more entries, enter \"DONE\"".);
    return hoursperweek;
}
function findPayRate(){
	var payrate;
	payrate = getUserValues("Enter Hourly Payrate.  \nIf no more entries, enter \"DONE\"");
	return payrate;
}
function calcStandardPay(){
	var standardpay;
    standardpay = hoursperweek * payrate;
    return standardpay;
}
function calcOvertimeHours(){
	var overtimehours;
    overtimehours = hoursperweek - 40.00;
    return overtimehours;
}
function calcOvertimePay(){
	var overtimepay;
	overtimepay = standardpay * 1.5 * overtimehours;
	return overtimepay;
}
function calcTotalPay(){
	var totalpay;
	totalpay = overtimepay + standardpay;
	return totalpay;
}
function showWeeklyLaborHoursWages(){
	var hoursperweek;
    while (hoursperweek != "DONE"){
    	hoursperweek = findHoursPerWeek();
	    if (hoursperweek <= 40){
        totalpay = Math.round (standardpay*100)/100;
        console.log("Hours:  ", hoursperweek, "\nRate per hour:  \t$", payrate);
        console.log("Base Pay:  \t$", standardpay);
        console.log("Overtime:\tNone",);
        console.log("Total Pay:\t$", standardpay);
         
        }else if (hoursperweek > 40) {
	    totalpay = (Math.round (overtimepay * 100) / 100);
	    console.log("Hours:  ", hoursperweek, "\nRate per hour:  \t$", payrate);
        console.log("Base Pay:\t$", standardpay);
        console.log("Overtime:\t$", overtimepay);
	    console.log("Total Pay:\t$", totalpay);
        
        }else {
        	console.log(End of List)

        }

    }
    
}
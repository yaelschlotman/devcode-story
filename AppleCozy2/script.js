"use strict";
document.getElementById("Name").innerHTML =("Yael");
console.log(44)
function myFunction() {
    document.getElementById("practice").innerHTML = "After";
   }
var hours;
var rate;
var pay;
hours = 37;
rate = 22.50;
pay = hours * rate;
console.log("Hours:  ", hours);
console.log("Rate:  $", rate);
console.log("Pay:  $", pay);
var BaseRateA;
var hoursA;
var BasePayA;
BaseRateA = 17.24; 
hoursA = 34;
BasePayA = hoursA * BaseRateA;
var BaseRateB;
var hoursB;
var BasePayB;
var OThoursB;
var OTrateB;
var OTpayB;
var TotalpayB;
BaseRateB = 23.43;
hoursB = 47;
BasePayB = hoursB*BaseRateB;
OThoursB = hoursB-40;
OTrateB = BaseRateB*1.5;
OTpayB = OThoursB*OTrateB;
TotalpayB = BasePayB+OTpayB;
console.log("JoJo worked ", hoursA, "hours at $", BaseRateA, "/hour.");
console.log("Jim John worked ", hoursB, "hours at $", BaseRateB, "/hour.");
console.log("JoJo's check was $", BasePayA);
console.log("Jim John's check was $", TotalpayB);


var hoursperweek;
var payrate;
var overtimehours;
var overtimepay;
var standardpay;
var totalpay;

hoursperweek = window.prompt ("Enter Number of Hours This Week");
payrate = window.prompt ("Enter Hourly Pay Rate");
overtimehours = hoursperweek - 40;
standardpay = (hoursperweek * payrate);
overtimepay = (payrate * 1.5 * overtimehours) + standardpay;

if (overtimehours > 0) {
	totalpay = (Math.round (overtimepay * 100) / 100);
	console.log("JoJo worked ", hoursperweek, "at $", payrate, ".");
	console.log("Her paycheck was $", totalpay);

}else {
    totalpay = Math.round (standardpay*100)/100;
    console.log ("Jim John worked ", hoursperweek, "at $", payrate, ".");
    console.log ("His paycheck was $", totalpay);
}

 
 
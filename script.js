let principal;
let rate;
let time;


principal = prompt("enter your pricipal amount");
rate = prompt("rate of interest");
time = prompt("enter your time duration");

let simpleinterest = 
   !time < 12
   ? (principal * rate * time) / 1200
   : (principal * rate * time) / 100;

alert(`your interest amount is ${simpleinterest.toFixed(2)}`);

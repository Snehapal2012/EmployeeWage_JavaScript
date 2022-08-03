/**Refactor the Code to write a function to get work hours */
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
function getWorkingHours(empCheck){
switch(empCheck){
    case 0: console.log("Employee worked as part-time employee\n");
    empHrs=PART_TIME_HOURS;
    return PART_TIME_HOURS;

    case 1: console.log("Employee worked as full-time employee\n");
    empHrs=FULL_TIME_HOURS;
    return FULL_TIME_HOURS;

    default: console.log("Employee is absent");
    empHrs=0;
    return 0;
    }
}
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage= empHrs*WAGE_PER_HOUR;
console.log("Employee Wage: "+empWage);

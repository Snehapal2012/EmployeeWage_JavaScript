/**Calculating Wages for a Month assuming 20 Working Days in a Month*/
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
function getWorkingHours(empCheck){
switch(empCheck){
    case 0: console.log("Employee worked as part-time employee\nWorking hours: "+PART_TIME_HOURS);
    empHrs=PART_TIME_HOURS;
    return PART_TIME_HOURS;
    break;
    case 1: console.log("Employee worked as full-time employee\nWorking hours: "+FULL_TIME_HOURS);
    empHrs=FULL_TIME_HOURS;
    return FULL_TIME_HOURS;
    break;
    default: console.log("Employee is absent\nWorking hours: 0");
    empHrs=0;
    return 0;
    }
}
let empHrs=0;
for( let day=0;day<NUM_OF_WORKING_DAYS; day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}
let empWage= empHrs*WAGE_PER_HOUR;
console.log("Total hours: "+empHrs+" Employee Wage: "+empWage);

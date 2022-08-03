/**Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month*/
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
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
let totalEmpHrs=0,totalWorkingDays=0;
while( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{   totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage= totalEmpHrs*WAGE_PER_HOUR;
console.log("Total Days: \t "+totalWorkingDays+" Total hours: \t "+totalEmpHrs+" Employee Wage: \t "+empWage);
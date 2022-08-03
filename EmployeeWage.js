/**Store the Daily Wage along with the Total Wage*/
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
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
let totalEmpHrs=0,totalWorkingDays=0;
let empDailyWageArr=new Array();
while( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{   totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
let empWage= calculateDailyWage(totalEmpHrs);
console.log("Total Days: \t "+totalWorkingDays+" Total hours: \t "+totalEmpHrs+" Employee Wage: \t "+empWage);
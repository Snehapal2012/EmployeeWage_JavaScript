/**Use the Daily Wage Array perform following operations using Array Helper Functions*/
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
//Array Helper Functions
let totEmpWage=0;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
let empWage= calculateDailyWage(totalEmpHrs);
console.log("Total Days: \t "+totalWorkingDays+"\tTotal hours: \t "+totalEmpHrs+"\tEmployee Wage: \t "+totEmpWage);
function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;
}
console.log("Employee Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));
//Show the Day along with Daily Wage using Array map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map:------------------------------------------");
console.log(mapDayWithWageArr);
//Show Days when Full time wage of 160 were earned using filter function
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily wage filter when full-time wage Earned:-----------------------------------");
console.log(fullDayWageArr);
//Find the first occurrence when Full Time Wage was earned using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time Full-time wage was earned on Day: "+mapDayWithWageArr.find(findFullTimeWage));
//Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("Check All element have full-time wage: "+fullDayWageArr.every(isAllFullTimeWage));
//Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Check if there is any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));
//Find the number of days the Employee Worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("Number of days the Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));
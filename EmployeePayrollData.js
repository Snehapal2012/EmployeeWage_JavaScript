/**Ability to create Employee Payroll Data with id, name and salary */
/**Ability to extend Employee Payroll Data to store gender and start date */
/**Ability to check the name starts with capital and has atleast 3 characters - Use Regex Pattern - Use Try Catch in case of Error */
class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }
    //getter and setter method
    get id(){ 
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get name(){ 
        return this._name;
    }
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name=name;
        else throw 'Name is Incorrect!';
    }
    get salary(){ 
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }
    get gender(){ 
        return this._gender;
    }
    set gender(gender){
        this._gender=gender;
    }
    get startDate(){ 
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id = "+this.id+", Name = "+this.name+", Gender = "+this.gender+", Salary = "+this.salary+", StartDate = "+this.startDate;
    }
}
let employeePayrollData=new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try{
    employeePayrollData.name="John";
    console.log(employeePayrollData.toString());
}catch (e){
    console.error(e);
}
let newEmployeePayrollDate=new EmployeePayrollData(1,"Terissa","F",30000,new Date());
console.log(newEmployeePayrollDate.toString());
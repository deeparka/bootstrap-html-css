class Person {

    salary = 900;

    static {
        console.log("static block");
    }

    constructor(name,age){ // paramterized constructor
      this.name= name;
      this.age= age;
    }

    greet(){
        console.log('calling the greet function');
        console.log('the salary is ' + this.salary) 
    }

    get getDetails(){
       return this.calculate();
    }

    set setAge(age)
    {
      this.age = age;
    }

    calculate(){
        console.log('the name is ' + this.name + ' and the age is '+ this.age);
    }
}

class TempPerson extends Person {

    dept = 'None';
    constructor(name,age,dept){
        super(name,age);
        this.dept= dept;
    }

    get getDept(){
        return this.dept;
    }

    set setDept(dept)
    {
    this.dept = dept;
    }

}

const per1 = new TempPerson('Tarun',34, 'IT');  /// objcects of my class
const per2 = new TempPerson('Isha', 30, 'HR');

console.log(per1.name);
console.log(per2.name);

per1.greet();

per1.getDetails;  // calling the getter method of the parent class

// per2.setAge = 32;
per2.getDetails;
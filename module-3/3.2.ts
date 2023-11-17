{
    // inheritance in oop
// kono class thk onno akta class jdi kono property inherite korw tahole jei class thk inherite kore sta inheritance class and jei classs property ney sta child class.

class Parent {
    name:string;
    age:number;
    country:string

    constructor(name:string,age:number,country:string){
        this.name=name;
        this.age=age;
        this.country=country
    }
    sleepHour(numberOfHour:number){
        console.log(`${this.name} sleeps ${numberOfHour} hours`);
    }
}
// akta student class banabo jekhane parent er property gulo extend kora hobe
class Student extends Parent{
    constructor(name:string,age:number,country:string){
        super(name,age,country)
    }
}
const student1=new Student('adiba',30,'bangladesh');

// akta teacher class banabo jekhane parent er property gulo extend kora hobe and sathe tar  kisu notun property thakbe.
class Teacher extends Parent{
    designation:string
    constructor(name:string,age:number,country:string,designation:string){
        super(name,age,country);
        this.designation=designation

    }
    takeClass(numberOfClass:number){
        console.log(`${this.name} takes ${numberOfClass} classes`);
    }
}
const teacher1=new Teacher('tanjib',34,'bangladesh','teacher');


}
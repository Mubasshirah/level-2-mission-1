{
    // 'instance of' guard in oop
    // type guard and type narrowing same
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
    doClass(classDone:number){
console.log(`${this.name} has done ${classDone} classes`)
    }
    }
   
    
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
    const getPerson=(person:Parent)=>{
        // person. korle sob property pabe but takeClass pabena because ata se inherite o korte partesena and tar modheo nai
        // Abar person:Teacher dile sob property pabe but doClass pabena because ata se inherite o korte partesena and tar modheo nai
        // ekhane bujha jaitesena person ki teacher na student hobe.tai instance of type guard use 
        if(person instanceof Teacher){
            person.takeClass(30)
        } 
        else if(person instanceof Student){
            person.doClass(4)
        }
        else{
            person.sleepHour(7)
        }


    }
// uporer parttuku aro smart way te function dia handle kora jay

//     const isTeacher=(person:Parent):person is Teacher=>{
// return person instanceof Teacher
//     }
//     const isStudent=(person:Parent):person is Student=>{
// return person instanceof Student
//     }
//     const getPerson=(person:Parent)=>{
       
//         if(isTeacher(person)){
//             person.takeClass(30)
//         } 
//         else if(isStudent(person)){
//             person.doClass(4)
//         }
//         else{
//             person.sleepHour(8)
//         }


//     }
   
    const student1=new Student('adiba',30,'bangladesh');
    const teacher1=new Teacher('tanjib',34,'bangladesh','teacher');
    const person1=new Parent('adi',20,'buffalo')
    getPerson(teacher1)
    getPerson(student1)
    getPerson(person1)
    
    
}
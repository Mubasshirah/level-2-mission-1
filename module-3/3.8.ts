{
    // polymorphism in oop 
    // class er akta particular method different  class e gie jdi diferent output day tobe setai polymorphism
    class Person{
        getSleep(){
            console.log('i sleep 8 hours ')
        }
    }
    class Student extends Person{
        getSleep() {
            console.log('i sleep 6 hours')
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log('i sleep 4 hours');
        }
    }
    // param er type hisebe akta class o choose kora jay
    const getSleepingHours=(param:Person)=>{
param.getSleep()
    }
    const person1=new Person();
    const person2=new Student();
    const person3=new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);

    // -------------------------another exemple-------------------
    class Shape{
        getArea():number{
            return 0;
        }
    }
    class Circle extends Shape{
     radius:number;
     constructor(radius:number){
        super();
        this.radius=radius;
     }
     getArea(): number {
         return Math.PI*this.radius*this.radius;
     }
    }
    class Rectangle extends Shape{
     height:number;
     width:number;
     constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
     }
     getArea(): number {
         return this.height*this.width;
     }
    }

    const getAreaMeasurement=(param:Shape)=>{
console.log(param.getArea());
    }
    const shape1=new Shape();
    const shape2=new Circle(10);
    const shape3=new Rectangle(10,20);
    getAreaMeasurement(shape1);
    getAreaMeasurement(shape2);
    getAreaMeasurement(shape3);
}
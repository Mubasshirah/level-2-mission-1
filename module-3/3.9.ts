{
    // abstraction in oop
    // abstraction means idea dibe but real implementation amra baire thk bujhte parbona

    // abstruction dui vabe kora jay: 1.abstruct 2.interface
    // idea: akhane just idea pabo je ki korbo
    interface Vehicle1{
        startMoving():void;
        stopMoving():void;
        moving():void;
    }
    // real implementation: ar ekhane really bujhte parboje ki korbo
    class Car implements Vehicle1{
        startMoving(): void {
            console.log('i have started moving');
        }
        stopMoving(): void {
            console.log('i have stopped moving');
        }
        moving(): void {
            console.log('i m moving');
        }
        test(){
            console.log('imma testing');
        }
    }
    // make instance
    const toyota=new Car();
    toyota.moving()
    toyota.startMoving();
    toyota.stopMoving()


    // ---------------using abstract class or leader class
    // abstract class thk new class create kora jayna but extend kora jay ba child class create kora jay.
// normal class
    // class Vehicle{
    //     startMoving(): void {
    //         console.log('i have started moving');
    //     }
    //     stopMoving(): void {
    //         console.log('i have stopped moving');
    //     }
    //     moving(): void {
    //         console.log('i m moving');
    //     }
    //     test(){
    //         console.log('imma testing');
    //     }
    // }
    // const honda=new Vehicle();
    // honda.

    // abstract class
   abstract class Vehicle{
       abstract startMoving(): void ;
       abstract stopMoving(): void ;
       abstract moving(): void ;
        test(){
            console.log('imma testing');
        }
    }
   class toyotaCar extends Vehicle{
            startMoving(): void {
                console.log('i have started moving');
            }
            stopMoving(): void {
                console.log('i have stopped moving');
            }
            moving(): void {
                console.log('i m moving');
            }
   }

}
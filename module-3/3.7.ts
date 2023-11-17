{
    // statics in oop
    // class Counter{
    //     count:number=0;
    //     increment(){
    //         return (this.count=this.count+1);
    //     }
    //     decrement(){
    //         return (this.count=this.count-1);
    //     }
    // }
    class Counter{
     static   count:number=0;
    //  ai method gulokeu static kora jay.just samne akta static likhte hbe. and sei khetre call kora system ta o ektu different  hbe. given below 
        increment(){
            return (Counter.count=Counter.count+1);
        }
      static  decrement(){
            return (Counter.count=Counter.count-1);
        }
    }
    const instance1=new Counter();
    console.log(instance1.increment());
    console.log(instance1.increment());
    console.log(instance1.increment());
    console.log(instance1.increment());
    
    const instance2=new Counter();
    console.log(instance2.increment());
    // method e static use korle  nicher style call korte hbe.
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.decrement());

    // same inheritance class thk duita child class banano hoileu jotobar aki child class call kora hobe totobar 1 kore increment hobe. ar arekta child class call kora hole increment abar notun kore start hobe. ai type problem thk bachte amra statics  use korbo. tahole jekono instance thk call korleu akta certain source thk value change korbe. 
}
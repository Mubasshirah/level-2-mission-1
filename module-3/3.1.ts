{
    // oop-class 

    class Animal{
        name:string;
        species:string;
        sound:string;
    constructor(name:string,species:string,sound:string){
this.name=name;
this.species=species;
this.sound=sound
    }
makeSound(){
    console.log(`this ${this.name} sounds ${this.sound}`);
}
// arrow function e this kaj korena tai normal function use korte hobe.
    }
    // instance

    const dog=new Animal('german','dog','ghew');
    const cat=new Animal('persian','cat','meaw');
    cat.makeSound();

    // parameter property (use of "public" modifier)
    // public modifier use kore amra aro cleaner way te code likhte parbo.
    
//     class Animal{
//       
//     constructor(public name:string,public species:string,public sound:string){
//
//     }
// makeSound(){
//     console.log(`this ${this.name} sounds ${this.sound}`);
// }
// // arrow function e this kaj korena tai normal function use korte hobe.
//     }
//     // instance

//     const dog=new Animal('german','dog','ghew');
//     const cat=new Animal('persian','cat','meaw');
//     cat.makeSound();
}
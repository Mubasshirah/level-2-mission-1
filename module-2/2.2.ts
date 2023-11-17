{
    // konoakta variable er type ta amra type allias er maddhome likhte parbo abar interface er maddhome likhte parbo
    // difference between interface and type allias:
    // interface dia non primitive datar type decleare kora jayna.but type aallias dia jay.non-primitive data er khetre amra interface bebohar krbo.
   type User2={
    name:string,
    age:number
   }
   const user22 :User2={
    name: "Adiba",
    age: 30
}

    interface User1 {
        name: string;
        age:number
    }

    const user1 :User1={
        name: "Adiba",
        age: 30
    }

    // type allias er moto inteerface dia amra intersection kore notun property add korte parbo
    interface userWithRole extends User1{
        role:string;
    }
    const user2 :userWithRole={
        name: "Adiba",
        age: 30,
        role: 'manager'
    }
    // js e object, array,function sob e akdhoroner object

// type vs interface dia array decleare
type roll1=number[];
const rollNumber:roll1=[1,2,3];

interface roll2{
    [index:number]:number;
}
const rollNumber2:roll2=[1,2,3]

// type vs interface dia function decleare
type Add=(num1:number,num2:number)=>number;
const add:Add=(num1,num2)=>num1+num2;

interface Add1{
    (num1:number,num2:number):number;
}
const add1:Add1=(num1,num2)=>num1+num2;

// array and object er khetre interface use na kore type allias use kora better
}
{
    // generic type through type allias
    // generic type: dynameic vabe kono akta type decleare kora  and pore sta proyojon e use kora e holo generic type
    type genericType=Array<number>;
    type genericType1=Array<string>;
    type genericType2=Array<boolean>;

    const rollNumber:number[]=[1,2,3];
    const rollNumber1:Array<number>=[1,2,3];
    const rollNumber2:genericType=[1,2,3];

    const name:string[]=['adi','adib','adiba'];
    const name1:Array<string>=['adi','adib','adiba'];
    const name2:genericType1=['adi','adib','adiba'];

    const isBoolean:boolean[]=[true,false,true];
    const isBoolean1:Array<boolean>=[true,false,true];
    const isBoolean2:genericType2=[true,false,true];

// aivabe bar bar na likhe generic type dia dynamically banano jay. param akare pathaite hbe. and pore eceive korbe jeta ase sei onujaye.means number,stringor boolean akare.industry standard hisebe param use na kore T use korboo
type GenericArray<T>=Array<T>;
const rollNumber3:GenericArray<number>=[1,2,3];
const name3:GenericArray<string>=['adi','adib','adiba'];
const isBoolean3:GenericArray<boolean>=[true,false,true];

//same way te amra array of object o banaite pari generic type dia
const users: GenericArray<{name:string,age:number}>=[
    {
        name:'adi',
        age:30
    },
    {
        name:'adib',
        age:30
    }
]

// generic tuple
// normal tuple

// const  manush:[string,string]=['messy','tessy'];
type GenericTuple<X,Y>=[X,Y];
const manush1:GenericTuple<number,{name:string,age:number}>=[1234,{name:'adiba',age:30}];
const  manush:GenericTuple<string,string>=['messy','tessy'];
}
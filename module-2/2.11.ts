{
    // utility type
    // pick
    type person={
        name:string,
        age:number,
        email?:string,
        contactNo:string
    }
    type nameAge=Pick<person,'name'|'age'>;
    // kono akta type thk pick er maddhome key nia notun type banabo jay

    // omit
    type contactInfo=Omit<person,'name'|'age'>
    // kono akta type thk omit er maddhome key omit kore notun type bananno jay

    // require type

 type required=Required<person>
//  sob guloke required bananor jnno

// partial

type partial=Partial<person>

// read only
// konobvabei kono property er value ke change kora jabena
type readOnly=Readonly<person>;
const person1:readOnly={
    name:'f',
    age:23,
    email:'ffg',
    contactNo:'4222'
}
// person1.name='fd' <-ata kora jbena
// record
type MyObj=Record<string,string>;
const myObj:MyObj={
    a:'ss',
    b:'ssss',
    c:'tt'
}
// record dia type decleare kore pore dynamically essa moto daata entry kora jay
// empty object er khetre record use kora jay,jekhane key obossoi string hbe amra jani dekhe string dibo ar value akaktar khetre ak ak ta hoite pare dekhe unknown dbo
const emptyObj:Record<string,unknown>={}
}
// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena
{
// ternary operator

// console.log('not adult')
const age:number=35
const isAdult=age>=18 ? 'adult' : 'not adult';
// console.log(isAdult);

// nullish coalescing operator
// null/undefined er upor vitti kore jokhon kono dicision making korte hoa tokon ai operator use korte hoa whereas ternary operator jekono falsy value er khetre applicable
// falsy value: null, undefined, ""
const isAuthenticated=4;
const isAuthenticated1='';
const res1=isAuthenticated ?? 'guest' ;
const res2=isAuthenticated1 ? isAuthenticated1 :'guest';
// ternary er khetre jekono falsy value dile guest dibe.ar kono truthy value dile seta dibe
console.log({res1}, {res2})

// ------------------
type User={
    name:string,
    age:number,
    address:{
        streetName:string,
        presentAdd:string,
        permanenetAdd ?: string
    }
    
}
const user:User={
    name:'adiba',
    age:30,
    address:{
        streetName:'baishteki',
        presentAdd:'buffalo',
        // permanenetAdd:'mirpur-13'
    }
}
const PermanenetAdd=user?.address?.permanenetAdd ?? 'no permanent address';
console.log({PermanenetAdd});

}
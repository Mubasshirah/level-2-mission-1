{
    // type guard using typeof and in

    // typeof-> type guard ->duita different value er modhe compare korete use hoa 
    // ts e kokkhono duita string ke add kora jayna
    type StringNumber=string|number;
    const add=(param1:StringNumber,param2:StringNumber):StringNumber=>{
        if(typeof param1==="number" && typeof param2==="number"){
        return param1+param2;    
        }
        else{
            return param1.toString()+param2.toString();
        }

    }
    const add1=add(2,2);
    // const add1=add('2','2');
    console.log(add1);

    // in guard: object er khetre use hoa
    type Admin={
        name:string,
        role:string
    }
    type User={
        name:string
    }
    const getUser=(user:Admin|User)=>{
    
        if('role' in user){
            console.log(`${user.name} has the ${user.role} role`)
        }
        else{
            console.log(`${user.name} is the user`) 
        }
    }
    const normalUser:User={
        name:'normal user vai'
    };
    const adminUser:Admin={
        name:'admin user vai',
        role:'super admin'
    }
getUser(normalUser);
getUser(adminUser);
}
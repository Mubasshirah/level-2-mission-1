{
    // function with generic: age thk bolbona ki input dibo .dynamically data input hobe.se onujaye output dibe
    // normal function
    const createArray=(param:string):string[]=>{
        return [param];
    }
    const response=createArray('bangladesh')

    // function with generic
    const createArrayWithGeneric=<T>(param:T):T[]=>{
        return [param];
    }
    const res1=createArrayWithGeneric<boolean>(true);
    const res2=createArrayWithGeneric<string>('bangladesh');
    const res3=createArrayWithGeneric<number>(123);

    // const res4=createArrayWithGeneric<{name:string,id:number}>({name:'adiba',id:234});
    const res4=createArrayWithGeneric<user>({name:'adiba',id:234});
    type user={
        name:string,
        id:number
    }
    // -------------------------------------------
    // createArrayWithTuple
    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2]
    }
    const res6=createArrayWithTuple<string,{name:string,id:number}>('adiba',{name:'adi',id:234});
    const res8=createArrayWithTuple(123,'adiba');

    // -------------------------------------------------------------
    // another exemple
    const createStudent=<T>(student:T)=>{
        const course='next level';
        return {
            ...student, course
        }
        const student1=createStudent({name:'stu1',id:23,hasWatch:true});
        const student2=createStudent({name:'stu2',id:24,hasBike:true});
    }
}
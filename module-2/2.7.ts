{
    // generic constraint with keyof operator

    type Vehicle={
        bike:string,
        car:string,
        ship:string
    };
    type owner='bike'|'car'|'ship';
    type owner2=keyof Vehicle;

    // uporer duitai same
    const getProperty=<X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key];
    }
    const car={
        name:'toyota',
        brand:876,
        model:'2222'
    }
    const bike={
        id:2,
        brand:'new',
        name:'hoonda'
    }
    const getBike=getProperty(bike,'id')
    const getCar=getProperty(car,'brand')
    


}
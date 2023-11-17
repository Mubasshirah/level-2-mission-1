{
    // conditional type: kono type er value jidi onno type er upor depend kore tobe take conditional type bole.
    type a1=number;
    // type a1=number;
    type a2=undefined;
    type x1=a1 extends null ? true :false;
    // ekhane x1 conditional type because a1 extend hoe null hoile tahole eta true return korbe.ar onno kisu hoile  false return korbe.

    // nested conditional type
     type y1=a1 extends null? true: a2 extends undefined ? undefined : any;
    //  -----------------------------------another exemple
    type Sheikh={
        bike:string,
        car:string,
        plane:string
    }
    type checkVehicle<T>=T extends keyof Sheikh?true: false;
    type hasTractor=checkVehicle<'tractor'>
    // hasTractor is a conditional type ,because it depends on checkVehicle
} 
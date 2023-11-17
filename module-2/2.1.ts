{
    // type assertion : typescript er cheu ami jdi vlo type assume korte pari tobe take type assertion bole
    let anything:any;
    anything='string';
    anything=345;
    (anything as string);
    // . dilei string er sob operation gulo show korbe
    (anything as number);
     // . dilei number er sob operation gulo show korbe

    //  /-----------------------------------------
    const kgToGm=(value:number |string):number|string|undefined=>{
        if(typeof value==="number"){
            const converted=value*1000;
            return `the value is ${converted}`
        }
        else if(typeof value==="string"){
            const converted=parseFloat(value)*1000;
            return `the value is ${converted}`
        }
        else{
            return 'the value is undefined';
        }
       
    }
    const res1=kgToGm(1000) as number;
    const res2=kgToGm('20') as string;
    // const res2=kgToGm('20') as number; ata likhle typescript bujhe nibeata number .tokhon oi block e dhukbe,
    const res3=kgToGm('') as undefined;
    console.log({res1})
    console.log({res2})
    console.log({res3})

    // -------------------
    // try catch
    type customError={
        message : string
    }
    try{

    }
    catch(error){
     console.log((error as customError).message)
    }
}
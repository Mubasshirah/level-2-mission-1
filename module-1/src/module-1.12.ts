{
// nullable type
// data type jodi null hoa thaole sta explicitly | dia bole dite hbe. noeto pore run kkorte gele error dibe
const searching=(value:string|null)=>{
if(value){
    console.log('searching');
}
    else{
        console.log('nothing tosearch')
    }
}

searching('fff')
// unknown typeof
// age thk bujhbona ki vvaue. run time e gia input value er depend kore ooutput dibe.
const getSpeedInMeterPerSecond=(value: unknown)=>{
    if(typeof value=== 'number'){
        const convertedSpeed=(value*1000)/3600;
        console.log(`the speed is ${convertedSpeed} ms^-1`);
    }
       else if (typeof value==='string'){
                      const [result,unit]=value.split(" ");
                      const convertedSpeed=((parseFloat(result)*1000)/3600);
                      const tofix=convertedSpeed.toFixed(2)
                      console.log(`the speed is ${tofix} ms^-1`);
        }
        else{
            console.log('wrong input')
        };
    
}
getSpeedInMeterPerSecond('1000');

// never
// amra jodi kokkhno jani je akta function kissu return korbena thaole amra taholeamr explicitly bole dibo return never.
const throwError=(msg: string):never=>{
    throw new Error(msg);
};
throwError('errorhoise')
}

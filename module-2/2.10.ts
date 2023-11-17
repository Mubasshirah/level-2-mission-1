{
    // mapped type
// basic mapping is js
    const  addNumber:number[]=[1,2,3];
    const convertString:string[]=addNumber.map(number=>number.toString())
console.log(convertString)

// mapped type
type areaNumber={
    height:string,
    width:string
};
type areaString={
    [key in keyof areaNumber]:string;
}
// mapping variable looping er maddhome sobguloke string e convert korse. js er mapping fn er moto.
// look up type
type height=areaNumber['height'];
// height e hover korle height:string dekhabe

// express map type in generic way
type AreaString<T>={
    [key in keyof T]:T[key];
}
const area1:AreaString<{height:string,width:number}>={
    height: '100',
    width:50
}
}
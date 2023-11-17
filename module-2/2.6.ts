{
    // constraints: kichu data  generic e obossoi thakte hbe aitakei constraints kore dia bole.
    // T extends {id:string,name:string,email:string} ata dia bujay student er vitor obossoi id,name,email ai data gulo thakte hobe.
    const createStudent=<T extends {id:string,name:string,email:string}>(student:T)=>{
const course='next level web development';
return {...student,course} 
    }
    const stu1=createStudent({isMarried:true,id:'21',name:'adi',email:'qw@gmail'})
}
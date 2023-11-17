// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena

{
// Union and Intersection types

type user={
    name: string,
    age: number,
    gender:'male'|'female',
    bloodGroup:'A+'|'O+'|'A-'
}
const student1:user={
    name:'adiba',
    age:24,
    gender:'female',
    bloodGroup:'A+'
}
// -------------------------------------

type frontEnd='fakibaj' |'junior';
type backEnd='junior' |'expert';
type developer=frontEnd  | backEnd;

// intersection type

type FrontEnd={
    skills:string[],
    designation1:'forntEnd'
}
type BackEnd={
    skills:string[],
    designation2:'frontEnd'
}
type fullStack=FrontEnd & BackEnd;
const fullDeveloper: fullStack={
    skills:['html','css','javaScript'],
    designation1:'forntEnd',
    designation2:'frontEnd'
}
}
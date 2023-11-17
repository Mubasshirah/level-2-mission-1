// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena

// type alias
// jodi same type er koekta object thake thaole akta default type banaye setake  sob object e explicitly vabe use kora ke type alias bole.
{
  type student={
    name: string,
    age: number,
    contactNo ?: string,
    address: string
  }  
  const student1: student={
    name: 'adi',
    age: 30,
    contactNo : '54683839',
    address: 'mirpur'
  }
  const student2: student={
    name: 'adib',
    age: 303,
    address: 'mirpur'
  }
// string type alias
  type userName= string
  type isAdmin=boolean
const UserName: userName = 'asim';

// function type alias
type Add=(num1:number,num2:number)=>number;
const add: Add=(num1,num2)=>num1+num2;
}
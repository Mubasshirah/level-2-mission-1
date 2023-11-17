// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena 
{
// spread operator
const bros1=['adi','adib','adiba'];
const bros2=['di','dib','diba'];
bros1.push(...bros2)
// bros1.push(bros2)->ata akta wrong output dibe jta js er khetre run korar age bujahi jbena but ts er khetre oivabe likhlei error dekhabe

// duita object o spread operator dia join kora jay
const mentor1={
    typescript:'ayman',
    redux:'aymir',
    next:'arman',
}
const mentor2={
    native:'ayman',
    react:'aymir',
    docker:'arman',
}
const mentorList={
    ...mentor1,...mentor2
}
// rest operator
// ai operator dia infinite sonkhor array element decleare kora jay. array er vitor notun joto element dhukano hok na kno sta ke show kora jay. notun notun parameter decleare kora lagena.
const greetFriend=(...friends:string[])=>{
   friends.forEach((friend:string)=>console.log(`hi ${friend}`)) 
}
greetFriend('abul','babul','kabul','dabul')
// destructuring


}
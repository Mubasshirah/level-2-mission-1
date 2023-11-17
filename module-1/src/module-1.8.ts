// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena
{
    //object destructuring
    const user={
        id:345,
        name:{ 
        firstName:'adi',
        middleName:'muba',
        lastName:'mubu'
        },
        contactNo:'0987654444'
    }
    const {contactNo, name:{middleName}}=user;
    // array destructuring
    const myFriends=['ross','monica','rachel','joey','hablu','gablu','dablu'];
    const [a,b,,bestFriend,...rest]=myFriends;
    // kono akta element skip korte chaile khali , dia dilei hbe. and koekta ke akstahe dekhanor jnno spread operator(...) use kora jbe.
}
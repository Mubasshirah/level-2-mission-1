// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena 
{
    let course : string ='web development';
    console.log(course)
    // **How to decleare object in typescript
    let user : {
        firstName: string;
        middleName ?: string; 
        // kono akta key er value optional hoile sei khetre akta ? mark dite hoa. atake literal type bole. ar ? mark na dia value na dia hoile error dibe
        lastName: string;
       readonly companyName:string ;
        // companyName:'programming hero' ;
        // kono akta key ar value fixed hoile seita assign kore dite hbe. tahole pore onno kisu dite gele error show korbe 
        //  companyName:string ;
        isMarried: boolean;
    } ={
        firstName: 'maryam',
        middleName: 'noor',
        lastName: 'junaira',
        companyName: 'programming hero ',
        isMarried: true,
    }
    // kono akta file e jodi akta object define kora hoa tahole object name. dilei tar sob key gulo implicitly show kore. tai error korar chance thakena.
    // ex: user.
    
    
    
}

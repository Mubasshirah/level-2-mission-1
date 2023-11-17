// jekono file akta second bracket er vitor rekhe dite hbe,#. taahole ata akt ascope hisebe kaj korbo and onno file e same varible abar decleare korte gele ar errror dibena 
{
// **function in typescript
    // normal function
    function add(num1: number , num2: number):number{
        return num1+num2;
        }
        add(2,2);
        // function er parameter er type assign na kore dile value any type hisebe dhore nibe and number+ boolean or number+string value dileu sta accept korbe. but type assign kroe dile wrong vabe value assign korle error dibe,
        // default value assign korte add(num1: number , num2: number=10)
        // arrow function
        const addArrow=(num1:number, num2:number):number=>num1+num2;
        addArrow(2,2)
        
        
        // *object er moddhe function likhle setake method bole
        const poorUser={
            name: 'adiba',
            balance:0,
            addBalance(balance:number):number{
                return this.balance+balance;
                // return `new balance is : ${this.balance+ balance}`;
            }
        }
        // object er vitorer kono akta property er value pete gele this use korte hoa.
        
        // map notun array return kore
        const arr:number[]=[1,2,3];
        const newArr : number[]=arr.map((elem:number):number=>elem*elem);
    

}
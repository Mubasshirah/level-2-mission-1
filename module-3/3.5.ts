{
    // access modifiers
    // readonly thakle ar value change kora jabena .khali dekha jabe
    // private dile _(underscore) dia lage
    class BankAccount{
        public readonly id:number;
        public name:string;
        // private _balance:number
        protected _balance:number

        constructor(id:number,name:string,balance:number){
            this.id=id;
            this.name=name;
            this._balance=balance

        }
        addDeposit(amount:number){
            this._balance=this._balance+amount;
            console.log(this._balance);
            return this._balance;
        }
        // kono method keuprivate kora jay .sei khetre first e private likhte hbe.and stake access korte arekta method banite hbw
        // getBalance(){
        //     return this._balance;
        // }
       private getBalance(){
            return this._balance;
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    }
    const goribMnusherAccount=new BankAccount(111,'adiba',500);
    goribMnusherAccount.addDeposit(500);
    const myBalance=goribMnusherAccount.getHiddenMethod();
    console.log(myBalance)
    // kono  inheritance class thk jdi amra kono child class banaite chai thole private property gulo o ar show korbna. ai problem thk backhte private er jaygay protected likha hoa
    // class studentAccount extends BankAccount{
    //     test(){
    //         this.
    //     }
    // }
}
{
    // getter and setter
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
        // addDeposit(amount:number){
        //     this._balance=this._balance+amount;
        //     console.log(this._balance);
        //     return this._balance;
        // }
        // getBalance(){
        //     return this._balance;
        // }

        // function er poriborte getter use korbo thole pore property er moto pore access korte parbo
        get balance(){
            return this._balance;
        }
        // setter use korbo notun amount set korte
        set deposit(amount:number){
            this._balance=this._balance+amount;
        }
    }
    const goribMnusherAccount=new BankAccount(111,'adiba',500);
    // goribMnusherAccount.addDeposit(500);
    goribMnusherAccount.deposit=500;
    // const myBalance=goribMnusherAccount.getBalance();
    const myBalance=goribMnusherAccount.balance;
    console.log(myBalance)
}
class Account {
    readonly id: number
    owner: string
    private balance: number
    nickname?: string

    constructor(id:number,owner:string,balance:number){
        this.id = id
        this.owner = owner
        this.balance = balance
    }

    deposit(amount:number): void{
        if (amount < 0) {
            throw new Error("非法数值");
        }
        this.balance += amount
    }

    withdraw(amount: number): void{
        if (this.balance < amount) {
            throw new Error("当前余额不足")
        }
        this.balance -= amount
    }

    getBalance(): number {
        return this.balance
    }
}


let account = new Account(1,'子龍',0)

account.deposit(50)

console.log(account.getBalance);

console.log(account);





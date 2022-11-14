"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error("非法数值");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            throw new Error("当前余额不足");
        }
        this.balance -= amount;
    }
}
let account = new Account(1, '子龍', 0);
account.deposit(20);
console.log(account.balance);
//# sourceMappingURL=index.js.map
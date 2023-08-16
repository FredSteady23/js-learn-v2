const bankAccount = {
    balance: 1000,
    deposit: function(amount){
        if(amount>0){
            this.balance+=amount;
            return `Вы внесли ${amount} тенге на свой счет`;
        }else{
            return 'Недостаточно средств на вашем счете';
        }
    },
    withdraw: function(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount;
            return `Вы вывели ${amount} и на вашем счете осталось ${this.balance}`;
        }else if(amount<=0){
            return `Cумма для снятия должна быть положительной`;
        }else{
            return `Недостаточно средств на вашем счете`;
        }
    },
    getBalance: function(){
        return `На вашем счете осталось ${this.balance}`;
    }
}

// Пример использования методов объекта
console.log(bankAccount.getBalance()); // Ваш текущий баланс: 1000
console.log(bankAccount.deposit(500)); // Вы внесли 500 на счет. Ваш баланс: 1500
console.log(bankAccount.withdraw(200)); // Вы сняли 200. Ваш баланс: 1300
console.log(bankAccount.withdraw(1500)); // Недостаточно средств на счете.
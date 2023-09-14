class Car{
    name: string
    price: number

    constructor(name: string, price: number){
        // public, private protected
        this.name = name,
        this.price = price
    }
    
    getInfo():string{
        return `${this.name} - ${this.price}`
    }
}

new Car('BMW', 10000).getInfo();
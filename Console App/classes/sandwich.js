class Sendwich{
    constructor(kind_breed, cheese, meat){
        this.kind_breed = kind_breed;
        this.cheese = cheese;
        this.meat = meat;
    }
    SendwichConsistOf(){
        console.log(`We have a ${this.kind_breed}, with ${this.cheese}, and three parts ${this.meat} inside`);
    }
    EatSendwitch(){
        console.log(`It was great food`);
    }
}

module.exports = Sendwich;
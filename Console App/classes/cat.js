class Cat{
    constructor(name, age, breed, legs){
        this.name = name;
        this.age = age;
        this.breed  = breed;
        this.legs = legs;
    }
    ShowInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}, Legs: ${this.legs}`);
    }
    Ability(){
        console.log("Meow Meow Meow");
    }
}

module.exports = Cat;
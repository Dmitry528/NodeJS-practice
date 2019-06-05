class Dog{
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    ShowInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
    }
    Ability(){
        console.log("Voice Grrrr.....");
    }
}
module.exports = Dog;
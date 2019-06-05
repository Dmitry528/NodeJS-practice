class Dog{
    constructor(name, age, breed){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.ShowInfo = function(){
            console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
        }
    }
}
module.exports = Dog;
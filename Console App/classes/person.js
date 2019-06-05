class Person{
    constructor(user_name, surname ,password){
        this.user_name = user_name;
        this.surname = surname
        this.password = password;
    }
    ShowInfo(){
        console.log(`Name: ${this.user_name}, Surname: ${this.surname},  Password: ${this.password}`);
    }
    SayHello(){
        console.log("Hello");
    }
}
module.exports = Person;
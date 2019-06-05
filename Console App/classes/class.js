class Person{
    constructor(user_name, password){
        this.user_name = user_name;
        this.password = password;
        this.ShowInfo = function(){
            console.log(`Name: ${this.user_name}, Password: ${this.password}`);
        }
    }
}
module.exports = Person;
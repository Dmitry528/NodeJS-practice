const Person = require("./classes/person");
const Dog = require("./classes/dog");
const Cat = require("./classes/cat");
const args = process.argv;
//console.log(args); // 0 elem - PATH, 1 elem PATH to our file;


switch (args[2]){
    case `--help`:
        console.log(`-v : Version`);
        console.log(`--create_man(name, surname, password) : create person`);
        console.log(`--man_say_hello - say hello`);
        console.log(`--create_dog(name, age, breed) : create dog`);
        console.log(`--dog_ability - show Dog ability`);
        console.log(`--create_cat(name, age, breed, legs) : create cat`);
        console.log(`--cat_ability - show Cat ability`);
    break;

    case `-v`:
        console.log(`v.0.0.1`);
    break;

    case `-version`:
        console.log(`Use valid -v`);
    break;

    case `--create_man`:
        let name = args[3];
        let surname = args[4];
        let password = args[5];
        const user = new Person(name, surname, password);
        user.ShowInfo();
    break;

    case `--man_say_hello`:
        const user_hello = new Person;
        user_hello.SayHello();
    break;

    case `--create_dog`:
        let name_dog = args[3];
        let age_dog = args[4];
        let breed_dog = args[5];
        const dog = new Dog(name_dog, age_dog, breed_dog);
        dog.ShowInfo();
    break;

    case `--create_cat`:
        let name_cat = args[3];
        let age_cat = args[4];
        let breed_cat = args[5];
        let legs_cat = args[6];
        const cat = new Cat(name_cat, age_cat, breed_cat, legs_cat);
        cat.ShowInfo();
    break;

    case `--dog_ability`:
       const dog_agility = new Dog;
       dog_agility.Ability();
    break;

    case `--cat_ability`:
        const cat_ability = new Cat;
        cat_ability.Ability();
    break;

    default:
        console.log(`Command Not Found, try --help`);
    break;
}
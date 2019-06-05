const Person = require("./classes/class");
const Dog = require("./classes/dog");
const args = process.argv;
//console.log(args); // 0 elem - PATH, 1 elem PATH to our file;


switch (args[2]){
    case `--version`:
        console.log(`v.0.0.1`);
    break;

    case `-v`:
        console.log(`v.0.0.1`);
    break;

    case `--create_man`:
        let name = args[3];
        let password = args[4];
        const user = new Person(name, password);
        user.ShowInfo();
    break;

    case `--create_dog`:
        let name_dog = args[3];
        let age = args[4];
        let breed = args[5];
        const dog = new Dog(name_dog, age, breed);
        dog.ShowInfo();
    break;

    case `--help`:
        console.log(`help`);
    break;

    default:
        console.log(`Use --help`);
    break;
}
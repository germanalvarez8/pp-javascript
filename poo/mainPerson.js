class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    show() {
        console.log(`Nombre: ${this.name}, Edad: ${this.age}, Género: ${this.gender}`);
    }
}

let person = new Person("Juan", 30, "Masculino");
person.show();

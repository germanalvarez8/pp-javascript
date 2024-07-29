class Student extends Person {
    constructor(name, age, gender, grade, average) {
        super(name, age, gender);
        this.grade = grade;
        this.average = average;
    }

    updateAverage(newAverage) {
        this.Average = newAverage;
    }

    getDetails() {
        return `Nombre: ${this.name}, Edad: ${this.age}, Género: ${this.gender}, Grado: ${this.grade}, Average: ${this.average}`;
    }
}

// Ejemplo de uso
let student = new Student("Ana", 20, "Femenino", "Segundo", 3.8);
console.log(student.obtenerDetalles());  // Nombre: Ana, Edad: 20, Género: Femenino, Grado: Segundo, Average: 3.8
student.updateAverage(4.0);
console.log(student.obtenerDetalles());  // Nombre: Ana, Edad: 20, Género: Femenino, Grado: Segundo, Promedio: 4.0

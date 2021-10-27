// TASK 1


class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this.fullName;
    }

    nameIncludes(data) {
        let result = this.showFullName().split(' ')[0] === data;
        console.log(result);
    }
    static studentBuilder() {
        const staticStud = new Student('Ihor Kohut', 'qc');
        return staticStud;

    }

    get direction() {
        return this._direction;
    }
    set direction(value) {
        if (value !== 'qc' && value !== 'dev' && value !== 'web') {
            console.log(`Direction field is invalid.`);
            console.log(value)
            return;
        }
        this._direction = value;
    }

}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1);
console.log(stud2);
console.log(stud3);

stud1.nameIncludes('Ivan');
stud1.nameIncludes('Denysenko');



































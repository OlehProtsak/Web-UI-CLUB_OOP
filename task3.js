class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get showExp() {
        return this.#experience;
    }
    set showExp(value) {
        this.#experience = value;
    }
    showSalary() {
        let result = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${result}`);

    }

    showSalaryWithExperience() {
        let result = this.dayRate * this.workingDays * this.showExp;
        console.log(`${this.fullName} salary: ${result}`);
        return result;
    }
}

const worker1 = new Worker('John Johnson', 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.salary = worker1.showSalaryWithExperience();


const worker2 = new Worker('Tom Tomson', 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker2.showSalaryWithExperience();
worker2.salary = worker2.showSalaryWithExperience();



const worker3 = new Worker('Andy Ander', 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker3.showSalaryWithExperience();
worker3.salary = worker3.showSalaryWithExperience();


const workersArr = [worker1, worker2, worker3];

let sortWorkers = workersArr.sort(function (a, b) {
    if (a.salary < b.salary) {
        return -1;
    } else if (a.salary > b.salary) {
        return 1;
    } else {
        return 0;
    }
})


console.log('Sorted salary:');
for (let i = 0; i < sortWorkers.length; i++) {
    console.log(`${sortWorkers[i].fullName}: ${sortWorkers[i].salary}`);
}



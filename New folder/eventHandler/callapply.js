const normalPerson = {
    firstName: 'rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tax, tips) {
        this.salary = this.salary - amount-tax-tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'hero',
    lastName: 'balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'hero',
    lastName: 'golam',
    salary: 25000
}

// const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);
// const friendlyPersonCharge=normalPerson.chargeBill.bind(friendlyPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);

// console.log(heroPerson.salary);

// friendlyPersonCharge(1000);
// console.log(friendlyPerson.salary)
// // normalPerson.chargeBill(150);
// // normalPerson.chargeBill(3000);
// // console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [900, 300, 10]);
normalPerson.chargeBill.apply(heroPerson, [3000, 500, 30]);

console.log(heroPerson.salary);
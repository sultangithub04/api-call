class Person{
constructor(firstName, lastName, salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.salary=salary;
}

}
const heroPerson= new Person("hero", "Balam", 2000);
console.log(heroPerson);
const friendlyPerson= new Person('hero', 'balam', 12000);
console.log(friendlyPerson);
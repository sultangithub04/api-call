// function addTodo(task){
//     const newTaskElement=document.createElement('li');

// }
// imediately invoke function

// (function(){
//     let name='jantus';
//     console.log(name);
// })();

// const addUser = function(){ let name='jantus';
//                              console.log(name);}

// console.log(addUser);

// function getFullName(firstName, lastName){
//     let fullName ='';
//     for (let i  = 0; i  < arguments.length; i ++) {
//         const namePart = arguments[i ];
//         fullName= fullName+' '+namePart;
//     }
//     return fullName;
// }
// const name =getFullName('hanif', 'poribohon', 'sonker', 'omok');
// console.log(name);

// function getFullName(firstName, lastName){
//     let fullName ='';
//     for (let i  = 0; i  < arguments.length; i ++) {
//         const namePart = arguments[i ];
//         fullName= fullName+' '+namePart;
//     }
//     return fullName;
// }
// const name =getFullName('hanif', 'poribohon', 'sonker', 'omok');
// console.log(name);

// callbackfunction
// function welcomeGuest(name, greetHandler){
//         greetHandler(name);
// }
// const actorName= 'Tom Hank';

// function greetUserMorning(name){
//     console.log('Good Morning', name);
// }
// function greetUserEvening(name){
//     console.log('Good evening', name);
// }
// function greetUserAfternoon(name){
//     console.log('Good afternoon', name);
// }

// welcomeGuest(actorName, greetUserAfternoon);
// welcomeGuest('sultan', greetUserEvening);
// welcomeGuest('soha', greetUserMorning);


// // function default paramenter
// function add(num1, num2=10){
    
//     // if(num2==undefined){
//     //     num2=0;
//     // }

//     return num1+num2;
// }
// const total= add(55, 5);
// console.log(total);


// const name = `i ama too go 
//         banladesh
//         ${8+9}     ${201%50}`;
// console.log(name);

// function doubleIt(num1, num2){
//      const sum = num1+num2;
//      return sum;
// }
// const result = doubleIt(5, 4) 
// console.log(result);

// const doubleIt= function (num1, num2){
//     const sum = num1+num2;
//     return sum;
// }
// const result = doubleIt(5, 4) 
// console.log(result);

// const doubleIt= (x, y)=>x+y;


// const result = doubleIt(5, 4) 
// console.log(result);

// const ages=[12, 33, 44, 54, 4];
// const ages2=[128, 383, 484, 584, 48];
// const ages3=[1248, 3843, 4484, 5484, 448];

// const allAges= ages.concat(ages2).concat(ages3);
// const allAges2= [...ages,...ages2, 99, ...ages3];
// maxium=Math.max(...ages)

// // console.log(allAges2);
// console.log(maxium);


// class Student{
// constructor(sId, sName){
//     this.id=sId;
//     this.name=sName;
//     this.school='uttara school';
// }

// }


// const student1 =new Student(11, 'soha');
// const student2 =new Student(111, 'sifa');
// const student3 =new Student(55, 'babbi');
// console.log(student1, student2, student3);


// class Parent{
//     constructor(name){
//         this.fatherName='schowginiger';
//     }   
//     }
// class Child extends Parent{
//        constructor(name){
//         super();
//         this.name=name;
//     }
//     getFullName(){
//         return this.name+ ' ' +this.fatherName;

//     }
//     }    
//     const baby =new Child('arnod');
//     const baby2 =new Child('tom');
//     console.log(baby.getFullName());
//     console.log(baby2.getFullName());


const person ={name:'jack william', age:33, job:'facebook', phoe:'02727847', friend:'tom corse' };
console.log(person.age)
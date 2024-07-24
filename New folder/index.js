// // var inch=10;
// var feet=inch/12;
// console.log(feet);
// function inchToFeet(inch){
//     var feet=inch/12;
//     return feet;
// };
// const nana=inchToFeet(50);
// console.log(nana);

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let number ="12.5";
// result=Math.random()*6;
// result1=parseInt(result);
// console.log(result1);


// var time= new(Date);
// console.log(time);

// var number= Math.random();
// number=Math.round(number*100); 
// console.log(number);


// var time= new(Date);
// console.log(time);

// var time= new Date(1972-11-11);
// console.log(time);


// const friend= [12, 33, 55, 23, 56];
// // const postion= friend.indexOf(23);
// // friend[1]= 500;
// // friend.push(12);
// // friend.pop()
// friend.unshift(9);

// console.log(friend.length);

// let i= 0;
// while(i<-9){
//     console.log(i);
//     i--;
// }

// let age = [22, 43, 64, 66, 34, 87, 545];
// for(i=0; i<age.length; i++){
//     let element=age[i];
//     element=element*2;
//     console.log(age[i], element);
// }

// let age=100;
// switch (age) {
//     case 100:
//        console.log("i am good");
//         break;

//     default:
//     console.log("bad");
//         break;
// }
// var student={id:6, Name: "Kamal", phone: 999};
// student.id="robin";
// console.log(student);



// function leafYear(year){
//     const leapyer=year%4;
//     if(leapyer==0){
//         return "leap year"
//     }
//     else{
//         return" not leap year"
//     }
// }
// const leap= leafYear(3001);
// console.log(leap);


// let fact = 1;
// for(let i=1; i<10; i++){
//     fact=fact*i;

//     console.log(i, fact);
// }
// function factorial(n){
//     let fact=1
//     for(let i=1; i<n; i++){
//         fact=fact*i;       
// }
// return fact;
// }
// const facti = factorial(11);
// console.log(facti);
// function fibonaci(n){
//     let fibo= [0,1];
//     for(let i=2; i<n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2]
//     }
//    return fibo;

// }

// const result = fibonaci(4);
// console.log(result);

// let n=111;


//     if(n%2==0){
//         console.log("prime Numaner");
//     }else{
//         console.log("not a prime Numaner"); 
//     };
// function primeNumber(n){
//     if(n%2==0){
//         "prime Numaner";
//     }else{
//         "not a prime Numaner"; 
//     };
//     return 
// }

// function isPrimeNumber(n){
// for(i=2;i<n; i++){
//     // console.log(i, n%i)
//     if(n%i==0){
//         return "Not prime numaner";

//     }
//     }
//     return "prime number"
// }
// const result= isPrimeNumber(9);
// console.log(result)

// let x=5;
// y=7;
// [x, y]=[y, x];
// console.log(y);

// let num =12.905678;

// for(i=0; i<10; i++){
//     let num=Math.random()*100;
// result=Math.round(num);
// console.log(result);
// }


// var marks= [12, 556, 233, 88, 24, 26, 24, 424, 24];
// var max=marks[0];
// for(i=0; i<marks.length; i++){
//     var element= marks[i];

//     if(element>max){
//         max=element;
//     }
// }
// console.log(max);

// var marks= [12, 556, 233, 88, 24, 26, 24, 424, 24];
// var sum=0;
// for(let i=0; i<marks.length; i++){
//     var element= marks[i];
//     sum= sum+element;

// }
// console.log(sum);

let age = [23, 22, 35, 345, 364, 34, 63, 78];
let uniqueName = [];
for (let i = 0; i < age.length; i++) {
    let element = age[i];
    let index = uniqueName.indexOf(element)
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
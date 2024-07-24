// const name =false;
// if(name==0){
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }

// const numbers= [2, 4, 5, 3, 5];
// const output=[];
// for (let i  = 0; i  < numbers.length; i ++) {
//     const element = numbers[i ];
//     const result =element*element
//     output.push(result);
// }
// console.log(output)

// const numbers= [2, 4, 5, 3, 5];


// const result= numbers.map(x=>x*x);
// console.log(result);


// const numbers= [2, 42, 52, 3, 50, 6];
// const result= numbers.map(x=>x*x);
// console.log(result);


// function add(num1, num2){
//     console.log([...arguments])
//     return num1+num2;
// }
// const result = add (2, 5, 4, 4);
// console.log(result);


// function stopWatch(){
//     let count =0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// const clock1= stopWatch();
// console.log(clock1()); 
// console.log(clock1());
// console.log(clock1());

// const nums= [1, 2, 3, 4, 5, 6, 7, 8];
// const part= nums.join("good ");

// console.log(part);

const nums= [1, 2, 3, 4, 5, 6, 7, 8];
for (let i  = 0; i  < nums.length; i ++) {
    
    if(nums[i]>2){
        break;
    }
    // console.log(nums[i]);
}

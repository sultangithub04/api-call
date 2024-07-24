const user ={
        id: 234, 
        name:"masud",
        friendAge: [12, 34, 55],
        friend:["kama", "salam", "jamal"]

    };
const userJSON=JSON.stringify(user);
console.log(userJSON) ;
const userFormJSON= JSON.parse(userJSON);
console.log(userFormJSON);
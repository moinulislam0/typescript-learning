type User = { username: string; id: number };

let users: User[];
users = [];

let user1: User;
user1 = { username: "moin", id: 10 };
users.push(user1);
let user2: User;
user2 = { username: "moinul", id: 111 };
users.push(user2);

console.log(users);


type RequestType1 = "GET"| "POST";
let getRequest :RequestType1;


function handleRequest (getRequest : RequestType1){
    console.log(getRequest);
}
handleRequest("GET");

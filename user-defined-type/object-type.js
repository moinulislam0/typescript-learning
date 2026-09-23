"use strict";
let users;
users = [];
let user1;
user1 = { username: "moin", id: 10 };
users.push(user1);
let user2;
user2 = { username: "moinul", id: 111 };
users.push(user2);
console.log(users);
let getRequest;
function handleRequest(getRequest) {
    console.log(getRequest);
}
handleRequest("GET");

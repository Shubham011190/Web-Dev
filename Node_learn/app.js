//Async example

console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Data");
        callback({ userEmail: email })
    },2000);
}

const user = loginUser("shubham", 123456, (user) => {
    console.log(user)
})

console.log("End");




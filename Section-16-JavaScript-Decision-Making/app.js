// let userInput = prompt("Enter a number");
// let randomNum = Math.floor(Math.random() * 100) + 1;

// if (userInput > randomNum) {
//     console.log("Wow!");
//     console.log(`Other player rolled ${randomNum}`)
// } else if (userInput <= randomNum) {
//     console.log("Aww...");
//     console.log(`Other player rolled ${randomNum}`)
// } else {
//     console.error("Error!");
// }

//password must be 6+ characters
//password cannot include space

let password = prompt("Enter a password");

if (password.length >= 6) {
    if (password.includes(" ")) {
        console.error("Password cannot contain a space");
    } else {
        console.log(password)
    }
} else {
    console.error("Password must be more than 6 characters");
}
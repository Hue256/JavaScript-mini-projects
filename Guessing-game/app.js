let max = prompt("Enter the maximum number");

let random = (Math.floor(Math.random() * max)) + 1;

let res = prompt(`Guess the number from 1 to ${max}`);

while(true) {
    if(res == "quit") {
        console.log("Player quit the game");
        break;
    }

    if(res == random) {
        console.log(`Congratulations, you guessed the number ${res} correctly`);
        break;
    } else if(res > random) {
        res = prompt("The number is too big, please try again")
    } else {
        res = prompt("The number is too small, please try again")
    }
}
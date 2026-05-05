let sides = Number(prompt("Enter the number of sides for the dice (eg: 6, 10, 20)"));

let cmd = prompt(`Enter "r" to roll and "q" to quit`);

while(true) {
    if(cmd == "q") {
        console.log("Exited dice roller");
        break;
    }

    if(cmd == "r") {
        let rand = Math.floor(Math.random() * sides) + 1;
        console.log(rand);
    } else {
        console.log(`wrong command, please enter "r" to roll and "q" to quit`);
    }
    cmd = prompt(`Enter "r" to roll and "q" to quit`);
}
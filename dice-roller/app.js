let inp = document.querySelector("input");
let btn = document.querySelector("button");
let message = document.querySelector("p");
let result = document.querySelector("#result");

btn.addEventListener("click", function() {
    let sides = Number(inp.value);

    let random = Math.floor(Math.random() * sides) + 1;
    message.innerText = `You rolled:`;
    result.innerText = random;
});
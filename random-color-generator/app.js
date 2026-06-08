let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h4 = document.querySelector("h4");
    let randomColor = getRandomColor();
    h4.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255); // No need to add 1, because its range is 0-255, not 1-255
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}
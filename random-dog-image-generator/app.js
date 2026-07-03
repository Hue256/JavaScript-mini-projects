let btn = document.querySelector("button");
let img = document.querySelector("#img");
let status = document.querySelector("#status");

let url = "https://api.thedogapi.com/v1/images/search";

btn.addEventListener("click", async() => {
    status.innerText = "Loading image...";
    btn.disabled = true;
    let link = await getImageUrl();
    
    img.onload = () => {
        img.style.display = "block";
        status.innerText = "";
        btn.disabled = false;
    };

    img.setAttribute("src", link);
});

async function getImageUrl() {
    try{
        let res = await axios.get(url);
        return res.data[0].url;
    } catch(err) {
        return "No image found";
    }
}
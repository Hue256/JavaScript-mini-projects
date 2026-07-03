let btn = document.querySelector("button");
let factPara = document.querySelector("#fact");

let url = "https://catfact.ninja/fact";

btn.addEventListener("click", async() => {
    factPara.innerText = "Loading...."; 
    let fact = await getFacts();
    factPara.innerText = fact; 
});

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(err) {
        return "No fact found";
    }
}
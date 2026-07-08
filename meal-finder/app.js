let btn = document.querySelector("button");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

btn.addEventListener("click", async () => {
    let meal = document.querySelector("#meal").value;
    let mealsArray = await getMeals(meal);

    show(mealsArray)
    
})

function show(mealsArray) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for(let meal of mealsArray) {
        let li = document.createElement("li");
        li.innerText = meal.strMeal;
        list.appendChild(li);
    }
}

async function getMeals(meal) {
    try {
        let result = await axios.get(url + meal);
        return result.data.meals;
    } catch(err) {
        return [];
    }
}
const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeList = document.querySelector('ul');


async function replaceData(recipes) {
    recipes.forEach((recipe) => {
        const image = document.createElement('img');
        const li = document.createElement('li');
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        const button = document.createElement('a');

        li.innerHTML = "";
        li.id = 'recipe-item';

        button.href = 'https://github.com/houssame-aithsain';
        button.innerText = 'VIEW RECIPE';

        image.src = recipe.image;
        h4.innerText = recipe.name;
        p.innerText = recipe.instructions[0];

        li.appendChild(image);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(button);

        recipeList.appendChild(li);
    });
}

async function getData() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    console.log(data);
    return data;
}

async function main() {
    const data = await getData();
    await replaceData(data.recipes);
}

main();

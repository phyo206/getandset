/*let recipe={
    title:"Mole",
    servings:2,
    ingredients:["cinnamon","cumin","cocoa"]
};
console.log(recipe.title);
console.log(`Serves:${recipe.servings}`);
recipe.ingredients.forEach(member=>{
    console.log(member);
});
*/
let page=document.querySelector("#page");
let page1=document.querySelector("#page1");

let recipe={
    title:"Mole",
    servings:2,
    ingredients:["cinnamon","cumin","cocoa"]
};

page1.innerHTML=(`${recipe.title}`);
page.innerHTML=(`Serves:${recipe.servings}`);
recipe.ingredients.forEach(member=>{
    page.innerHTML+=`<ul><li>${member}</li></ul>`;
});

const btnContainerEl = document.querySelector(".btn-container");
const inputEl = document.querySelector(".input");
const faSolidEl = document.querySelector(".fa-solid");

const rand = Math.random().toString(16).substring(2, 10);

btnContainerEl.addEventListener("click", ()=>{
    inputEl.value = rand;
    
})

faSolidEl.addEventListener("click", ()=>{
    alert(inputEl.value +" copied")

})

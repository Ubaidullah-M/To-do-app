let form = document.querySelector(".insert-box");
let input = document.querySelector("#input");
let btnAdd = document.querySelector("#btn");
let myList = document.querySelector("#my-list");
let counter = document.querySelector(".count");
let btnClr = document.querySelector("#clear");
let count = 0;
counter.innerHTML = count;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addMe(input.value)
})
   

function addMe(x) {
    let me = `<li>${x}<span onclick="deleteMe(this)"><i class="fas fa-trash"></i></span></li>`
    myList.insertAdjacentHTML("beforeend", me)
    input.value = ""
    input.focus()
    counter.innerHTML++
}

function deleteMe(x) {
    x.parentElement.remove()
    counter.innerHTML--
}
btnClr.addEventListener("click", (e) => {
    e.preventDefault()
    myList.innerHTML = ""
    counter.innerHTML = count
})



let body = document.querySelector("body");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let box = document.querySelector(".box-text");

form.appendChild(box);

btn3.addEventListener("click", () => {
    let paragraphs = box.children;
    if (paragraphs.length > 0) {
        paragraphs[0].textContent = input.value;
    }
})

form.addEventListener("submit", (e) => {
    let p = document.createElement("p");
    e.preventDefault();

    let random = Math.ceil(Math.random() * 1000);

    p.innerText = input.value;
    box.appendChild(p);
    input.value = "";

    btn2.addEventListener("click", () => {
        p.remove();
    })

    p.style.fontSize = "30px";
    p.style.color = `#${random}`;
})
const btn = document.getElementById("btn");
const message = document.getElementById("message");

const countText = document.getElementById("count");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");

let count = 0;

btn.addEventListener("click", () => {
    message.textContent = "🎉 JavaScript is working!";
});

plus.addEventListener("click", () => {
    count++;
    countText.textContent = count;
});

reset.addEventListener("click", () => {
    count = 0;
    countText.textContent = count;
});
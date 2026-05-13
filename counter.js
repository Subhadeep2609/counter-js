const output = document.querySelector(".container");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let count = 0;
function color() {
    output.style.color = (count > 0) ? "green" : (count < 0) ? "red" : "gray";
}
increase.addEventListener("click", () => {
    output.innerHTML = ++count
    color();
});
decrease.addEventListener("click", () => {
    output.innerHTML = --count
    color();
});
reset.addEventListener("click", () => {
    count = 0;
    output.innerHTML = count;
    color();
});

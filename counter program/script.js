const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const CounterLabel = document.getElementById("Counter Label");
let count = 0;
decreasebtn.addEventListener("click", function () {
    count--;
    CounterLabel.innerText = count;
});
resetbtn.addEventListener("click", function () {
    count = 0;
    CounterLabel.innerText = count;
});
increasebtn.addEventListener("click", function () {
    count++;
    CounterLabel.innerText = count;
});
const textbox = document.getElementById("temp");
const toferenhiet = document.getElementById("toferenhiet");
const tocelcius = document.getElementById("tocelcius");
let result = document.getElementById("result");
let temp;
function convert() {
    if (toferenhiet.checked) {
        temp = Number(textbox.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp.toFixed(2) + "°F";

    }
    else if (tocelcius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "°C";

    }
    else {
        result.textContent = "select a unit";
    }

}

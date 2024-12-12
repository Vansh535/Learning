const minnum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
let running = true;
let attempts = 0;
let guess = 0;
while (running) {
    guess = window.prompt(`guess the number between 1 and 100`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minnum || guess > maxnum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Your guess is too low");
        }
        else if (guess > answer) {
            window.alert("Your guess is too high");
        }
        else {
            window.alert(`guessed right`);
            running = false;
        }
    }
}
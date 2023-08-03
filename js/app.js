/** @format */

// interactivity

const myName = "Dan";

console.log(myName.replace("a", "aaa"));
console.log(25 / 5);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.querySelector("input#email");
    const passwordInput = document.querySelector("input#password");
    const formButton = document.querySelector("button");

    formButton.textContent = console.log({
        email: emailInput.value,
        password: passwordInput.value,
    });
});

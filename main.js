import {morse} from "./translator.js";

// console.log(morse("."))

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translateBtn");

let storedInput = "";

const getInput = () => {
    storedInput = (input.value);
    storedInput = morse(storedInput);
    console.log(storedInput);
    output.innerHTML = storedInput;
  };

translateBtn.addEventListener("click", () => {
    getInput();
});


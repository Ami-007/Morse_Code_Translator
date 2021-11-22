import {morse} from "./translator.js";

// console.log(morse("."))

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translateBtn");// let storedInput = "";

// export const getInput = () => {
//     storedInput = (input.value);
//     storedInput = morse(storedInput);
//     console.log(storedInput);
//     output.innerHTML = storedInput;
//   };

translateBtn.addEventListener("click", () => {
    output.innerHTML = morse(input.value);
});

translateMorse = morse(input.value) {
    return input.value.split("").map(code => {
        return morse[code]}).join("");
};
console.log(translateMorse(input.value));


    // translateMorse = morse(code) {
    
    //     for (let i = 0; i < code.split(" ").length; i++) {
    //         if (i === " ") {
    
    //         }
    //     }
       
    //     };
    
    //     console.log(translateMorse("...."));
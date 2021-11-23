import {morse} from "./translator.js";

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translateBtn");// let storedInput = "";


const translateMorse = () => {
    let letters = input.value.split(" ");
    
    for(let i = 0; i < letters.length; i++) {
        let translated = letters.map(char => {
            return morse(char)
        })
    output.innerHTML = translated.join("");
    } 
};

translateBtn.addEventListener("click", () => {
    translateMorse();
});


// console.log(translateMorse(input.value));

// translateMorse = morse(code) {
    
//         for (let i = 0; i < code.split(" ").length; i++) {
//             if (i === " ") {
    
//             }
//         }
       
//         };
    
//         console.log(translateMorse("...."));

// const translateMorse = function(morseCode){
//     let words = (morseCode).split('  ');
//     let letters = words.map((w) => w.split(' '));
//     let decoded = [];
  
//     for(let i = 0; i < letters.length; i++){
//       decoded[i] = [];
//       for(let x = 0; x < letters[i].length; x++){
//           if(MORSE_CODE[letters[i][x]]){
//               decoded[i].push( MORSE_CODE[letters[i][x]] );
//           }
//       }
//     }
  
//     return decoded.map(arr => arr.join('')).join(' ');
//   }
  
//   decodeMorse('.... . -.--   .--- ..- -.. .');

// export const getInput = () => {
//     storedInput = (input.value);
//     storedInput = morse(storedInput);
//     console.log(storedInput);
//     output.innerHTML = storedInput;
//   };


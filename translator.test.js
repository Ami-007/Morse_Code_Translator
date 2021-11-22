
import {morse} from "./translator";
import {getInput} from "./main.js";
import {describe, it, expect} from "@jest/globals";


// create tests for alphabet

describe("translate single letters to morse", () => {

    it ("should translate .- to a", () => {
    const result = morse(".-");
    expect(result).toBe("a");
    })

    it ("should translate -... to b", () => {
    const result = morse("-...");
    expect(result).toBe("b");
    })

    it ("should translate -.-. to c", () => {
    const result = morse("-.-.");
    expect(result).toBe("c");
    })

    it ("should translate -.. to d", () => {
    const result = morse("-..");
    expect(result).toBe("d");
    })

    it ("should translate . to e", () => {
    const result = morse(".");
    expect(result).toBe("e");
    })
    it ("should translate ..-. to f", () => {
    const result = morse("..-.");
    expect(result).toBe("f");
    })

    it ("should translate --. to g", () => {
    const result = morse("--.");
    expect(result).toBe("g");
    })
    it ("should translate .... to h", () => {
    const result = morse("....");
    expect(result).toBe("h");
    })

    it ("should translate .. to i", () => {
    const result = morse("..");
    expect(result).toBe("i");
    })
    it ("should translate .--- to j", () => {
    const result = morse(".---");
    expect(result).toBe("j");
    })

    it ("should translate -.- to k", () => {
    const result = morse("-.-");
    expect(result).toBe("k");
    })
    it ("should translate .-.. to l", () => {
    const result = morse(".-..");
    expect(result).toBe("l");
    })

    it ("should translate -- to m", () => {
    const result = morse("--");
    expect(result).toBe("m");
    })
    it ("should translate -. to n", () => {
    const result = morse("-.");
    expect(result).toBe("n");
    })

    it ("should translate --- to o", () => {
    const result = morse("---");
    expect(result).toBe("o");
    })
    it ("should translate .--. to p", () => {
    const result = morse(".--.");
    expect(result).toBe("p");
    })

    it ("should translate --.- to q", () => {
    const result = morse("--.-");
    expect(result).toBe("q");
    })
    it ("should translate .-. to r", () => {
    const result = morse(".-.");
    expect(result).toBe("r");
    })

    it ("should translate ... to s", () => {
    const result = morse("...");
    expect(result).toBe("s");
    })
    it ("should translate - to t", () => {
    const result = morse("-");
    expect(result).toBe("t");
    })

    it ("should translate ..- to u", () => {
    const result = morse("..-");
    expect(result).toBe("u");
    })
    it ("should translate ...- to v", () => {
    const result = morse("...-");
    expect(result).toBe("v");
    })

    it ("should translate .-- to w", () => {
    const result = morse(".--");
    expect(result).toBe("w");
    })
    it ("should translate -..- to x", () => {
    const result = morse("-..-");
    expect(result).toBe("x");
    })

    it ("should translate -.-- to y", () => {
    const result = morse("-.--");
    expect(result).toBe("y");
    })
    it ("should translate --.. to z", () => {
    const result = morse("--..");
    expect(result).toBe("z");
    })

    it ("should translate / to be a space", () => {
    const result = morse("/");
    expect(result).toBe(" ");
    })

})

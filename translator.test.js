// Write some tests to translate...
// French to English

// const { exportAllDeclaration } = require("babel-types");


import { translate } from './translator.js';
import { it, expect } from '@jest/globals';


// it should translate bonjour to hello (English to French)
it ("translates bonjour to hello", () => {
    // we need a function to test
    const result = translate("bonjour");
    // we need ot check what that function returns, is what we EXPECT
    expect(result).toBe("hello");
});

// it should translate je m'appelle to my name is (French to English)
it ("translates je m'appelle to my name is", () => {
    const result = translate("je m'appelle");
    expect(result).toBe("my name is");
});

// it should translate oui to yes
it ("translates oui to yes", () => {
    const result = translate("oui");
    expect(result).toBe("yes");
});

// it should translate non to no
it ("translates non to no", () => {
    const result = translate("non");
    expect(result).toBe("no");
});

// it should translate au revoir to goodbye
it ("translates au revoir to goodbye", () => {
    const result = translate("au revoir");
    expect(result).toBe("goodbye");
});



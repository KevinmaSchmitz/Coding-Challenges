// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

// note: input will never be an empty string.
function fakeBin(x) {
    let arr = x.split('')
    let bin = ''
    arr.forEach((x) => {
        if (x < 5) {
            bin += '0'
        }
        else if (x >= 5) {
            bin += '1'
        }
    })
    return bin
}

// Test Cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
        assert.strictEqual(fakeBin('509321967506747'), '101000111101101');
        assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
    })
});
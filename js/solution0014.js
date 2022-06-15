// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let seconds = s * 1000
    let minutes = m * 60000
    let hours = h * 3600000
    return hours + minutes + seconds
}

// Test Cases
describe("Fixed Tests", () => {
    it("Tests", () => {
        Test.assertEquals(past(0, 1, 1), 61000)
        Test.assertEquals(past(1, 1, 1), 3661000)
        Test.assertEquals(past(0, 0, 0), 0)
        Test.assertEquals(past(1, 0, 1), 3601000)
        Test.assertEquals(past(1, 0, 0), 3600000)
    });
});
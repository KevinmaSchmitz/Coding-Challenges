// You are given the length and width of a 4 - sided polygon.The polygon can either be a rectangle or a square.
// If it is a square, return its area.If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
    if (l != w) {
        return 2 * l + 2 * w
    } else {
        return l * w
    }
};

// Test Cases

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(areaOrPerimeter(4, 4), 16);
        Test.assertEquals(areaOrPerimeter(6, 10), 32);
    });
});
const { translate } = require("../src/translate");

describe("translate function", () => {
  test("words that start with vowels a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
});

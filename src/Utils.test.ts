import { toUpperCase } from "./Utils";

describe("Utils test suite", () => {
  test("should return uppercase string", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
});

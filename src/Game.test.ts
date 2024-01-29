import { rock, paper, scissors, draw, play } from "./Game";

describe("Game test suite", () => {
  test("rock draws rock", () => {
    expect(play(rock, rock)).toBe(draw);
  });

  test("paper draws paper", () => {
    expect(play(paper, paper)).toBe(draw);
  });

  test("scissors draws scissors", () => {
    expect(play(scissors, scissors)).toBe(draw);
  });

  test("paper covers rock", () => {
    expect(play(paper, rock)).toBe(paper);
    expect(play(rock, paper)).toBe(paper);
  });

  test("rock breaks scissors", () => {
    expect(play(rock, scissors)).toBe(rock);
    expect(play(scissors, rock)).toBe(rock);
  });

  test("scissors cuts paper", () => {
    expect(play(scissors, paper)).toBe(scissors);
    expect(play(paper, scissors)).toBe(scissors);
  });

  test("undefined result for invalid arguments", () => {
    expect(play("hello", "hello")).toBeUndefined();
    expect(play("hello", paper)).toBeUndefined();
    expect(play(rock, "hello")).toBeUndefined();
  });
});

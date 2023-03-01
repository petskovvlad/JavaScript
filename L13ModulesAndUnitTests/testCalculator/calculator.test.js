import { calc } from "./calculator.js";

it("should +", () => {
  const test1 = calc("1 + 1");
  expect(test1).toEqual("1 + 1 = 2");
});

it("should -", () => {
  const test2 = calc("1 - 1");
  expect(test2).toEqual("1 - 1 = 0");
});

it("should *", () => {
  const test3 = calc("2 * 2");
  expect(test3).toEqual("2 * 2 = 4");
});

it("should +", () => {
  const test4 = calc("3 / 3");
  expect(test4).toEqual("3 / 3 = 1");
});

it("should +", () => {
  const test5 = calc(3 / 3);
  expect(test5).toEqual(null);
});

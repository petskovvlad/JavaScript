import { minSquaredNumber } from "./getMinSquaredNumber.js";

it("should get min squared number", () => {
  const test1 = minSquaredNumber([]);
  expect(test1).toEqual(null);
});

it("should get min squared number", () => {
  const test2 = minSquaredNumber(["string"]);
  expect(test2).toEqual(NaN);
});

it("should get min squared number", () => {
  const test3 = minSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(test3).toEqual(4);
});

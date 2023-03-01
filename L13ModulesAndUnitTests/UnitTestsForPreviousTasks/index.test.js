import { reverseArray, withdraw, getAdults } from "./index.js";

it("should get reverse array", () => {
  const test1 = reverseArray([1, 2, 3, 4, 5]);
  expect(test1).toEqual([5, 4, 3, 2, 1]);
});

it("should get reverse array", () => {
  const test2 = reverseArray(1, 2, 3, 4, 5);
  expect(test2).toEqual(null);
});

it("should get reverse array", () => {
  const test3 = reverseArray([0, 1, 3]);
  expect(test3).toEqual([3, 1, 0]);
});
// withdraw
it("should get withdraw", () => {
  const test4 = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(test4).toEqual(37);
});

it("should get withdraw", () => {
  const test5 = withdraw(["Ann", "John", "User"], [1400, 87, -6], 10, 10);
  expect(test5).toEqual(undefined);
});

it("should get withdraw", () => {
  const test6 = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Andriy", 10);
  expect(test6).toEqual(undefined);
});
// filter object
it("should get adult user", () => {
  const test7 = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(test7).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should get adult user", () => {
  const test8 = getAdults({ Doe: 0, Tom: 10, Bob: 8 });
  expect(test8).toEqual({});
});

it("should get adult user", () => {
  const test9 = getAdults({});
  expect(test9).toEqual({});
});

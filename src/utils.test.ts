import { add, multiply, formatPrice, isEven } from "./utils";

describe("Math utilities", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("adds negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("multiplies two positive numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("multiplies negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("formatPrice", () => {
    it("formats Korean currency", () => {
      expect(formatPrice(1000)).toBe("₩1,000");
    });

    it("formats large numbers", () => {
      expect(formatPrice(1234567)).toBe("₩1,234,567");
    });
  });

  describe("isEven", () => {
    it("returns true for even numbers", () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    it("returns false for odd numbers", () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-5)).toBe(false);
    });
  });
});

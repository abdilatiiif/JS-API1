// Her kan du skrive testene dine
import sum from "../app.js";

test("legger sammen 1 + 2 for å bli 3", () => {
  expect(sum(1, 2)).toBe(3);
});

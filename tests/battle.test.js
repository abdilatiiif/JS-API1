// Import using CommonJS eller Module?? error problemer

// test 1
const { getRandomNumber } = require("../app.js");

test("getRandomNumber mellom bestemt tall", () => {
  const min = 10;
  const max = 40;
  const result = getRandomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

// test 2
const { newCharacter } = require("../app.js");

test("tester at all inputs values blir riktig", () => {
  expect(newCharacter.name).toBe("Hero");
  expect(newCharacter.health).toBe(100);
  expect(newCharacter.attackDamage).toBe(25);
  expect(newCharacter.Image).toBe("image.jpg");
  expect(newCharacter.id).toBe(1); // Sjekker at ID er generert math . random()
});

// test 3
const { hvemVinner } = require("../app.js");

test("test duelen ved uavgjort?", () => {
  const hero = { health: 100 };
  const enemy = { health: 100 };

  hvemVinner(hero, enemy);
  expect(hvemVinner(hero, enemy)).toBe("uavgjort");
});

test("test duelen hero vinner?", () => {
  const hero = { health: 100 };
  const enemy = { health: 70 };

  hvemVinner(hero, enemy);
  expect(hvemVinner(hero, enemy)).toBe("Helten vant");
});
test("hvem vinner duelen?", () => {
  const hero = { health: 70 };
  const enemy = { health: 100 };

  hvemVinner(hero, enemy);
  expect(hvemVinner(hero, enemy)).toBe("Fienden vant");
});

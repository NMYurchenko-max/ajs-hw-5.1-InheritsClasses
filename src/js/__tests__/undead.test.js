import Undead from "../classes/Undead";
test("Undead should have correct properties", () => {
  const lazarus = new Undead("Лазарь");
  const correct = {
    name: "Лазарь",
    type: "Undead",
    attack: 25,
    defenсe: 25,
    health: 100,
    level: 1,
  };
  expect(lazarus).toEqual(correct);
});

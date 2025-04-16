import Swordsman from "../classes/Swordsman"; 
test("Swordsman should have correct properties", () => {
  const arthur = new Swordsman('Артур');
  const correct = {
    name: "Артур",
    type: "Swordsman",
    attack: 40,
    defenсe: 10,
    health: 100,
    level: 1,
  };
  expect(arthur).toEqual(correct);
});

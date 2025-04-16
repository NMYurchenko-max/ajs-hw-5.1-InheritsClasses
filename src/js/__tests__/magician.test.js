import Magician from "../classes/Magician";

test ("Magician should have correct properties",  () => {
  const merlin = new Magician('Мерлин');
  const correct = {
    name: "Мерлин",
    type: "Magician",
    attack: 10,
    defenсe: 40, 
    health: 100,
    level: 1,
  };
  expect(merlin).toEqual(correct);
});

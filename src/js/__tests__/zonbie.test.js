import Zombie from '../classes/Zombie';

test("Zombie should have correct properties", () => {
  const harry = new Zombie('Гарри');
  const correct = {
    name: "Гарри",
    type: "Zombie",
    attack: 40,
    defenсe: 10, 
    health: 100,
    level: 1,
  };
  expect(harry).toEqual(correct);
});;

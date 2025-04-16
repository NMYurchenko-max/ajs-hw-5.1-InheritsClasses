import Bowman from '../classes/Bowman';

test("Bowman should have correct properties", () => {
  const robbin = new Bowman('Робин');
  const correct = {
    name: "Робин",
    type: "Bowman",
    attack: 25,
    defenсe: 25, // Изменено с 'defence' на 'defense'
    health: 100,
    level: 1,
  };
  expect(robbin).toEqual(correct);
});

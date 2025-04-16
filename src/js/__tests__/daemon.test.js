import Daemon from '../classes/Daemon';

test("Daemon should have correct properties", () => {
  const azazel = new Daemon('Азазель');
  const correct = {
    name: "Азазель",
    type: "Daemon",
    attack: 10,
    defenсe: 40, 
    health: 100,
    level: 1,
  };
  
  expect(azazel).toEqual(correct);
});

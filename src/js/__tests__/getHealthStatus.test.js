import getHealthStatus from "../utils/getHealthStatus";

describe('getHealthStatus', () => {
  test('should return green for health > 50', () => {
    const character = { name: "маг", health: 90 };
    const healthColor = getHealthStatus(character);
    expect(healthColor).toBe('green');
  });

  test('should return yellow for health <= 50 && health > 15', () => {
    const character = { name: "лучник", health: 40 };
    const healthColor = getHealthStatus(character);
    expect(healthColor).toBe('yellow');
  });

  test('should return red for health <= 15', () => {
    const character = { name: "мечник", health: 10 };
    const healthColor = getHealthStatus(character);
    expect(healthColor).toBe('red');
  });

  test('should throw an error for invalid health value', () => {
    const character = { name: "маг", health: 'invalid' };
    expect(() => getHealthStatus(character)).toThrow('Parameter is not a valid number!');
  });
});

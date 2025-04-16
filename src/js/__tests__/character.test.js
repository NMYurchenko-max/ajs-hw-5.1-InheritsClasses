import Character from '../classes/Character';

describe("Character", () => {
  test("should create a character", () => {
    const character = new Character("Batman");
    expect(character).toBeInstanceOf(Character);
  });

  // Проврека длины строки
  test("should throw an error if the name is less than 2 characters long", () => {
    expect(() => new Character("B")).toThrow(
      "Имя должно быть строкой от 2 до 10 символов включительно"
    );
  });

  test("should throw an error if the name is more than 10 characters long", () => {
    expect(() => new Character("Batmancatman")).toThrow(
      "Имя должно быть строкой от 2 до 10 символов включительно"
    );
  });

  // Проверка на число
  test("should throw an error if the level is not a number", () => {
    const character = new Character("Batman");
    expect(() => character.setLevel("one")).toThrow(
      "Уровень должен быть числом от 1 до 100"
    );
  });

  test("should throw an error if the health is not a number", () => {
    const character = new Character("Batman");
    expect(() => character.setHealth("one")).toThrow(
      "Здоровье должно быть положительным числом от 1 до 100"
    );
  });

  test("should throw an error if the level is less than 1", () => {
    const character = new Character("Batman");
    expect(() => character.setLevel(0)).toThrow(
      "Уровень должен быть числом от 1 до 100"
    );
  });

  test("should throw an error if the level is more than 100", () => {
    const character = new Character("Batman");
    expect(() => character.setLevel(101)).toThrow(
      "Уровень должен быть числом от 1 до 100"
    );
  });

  test("should throw an error if the health is less than 0", () => {
    const character = new Character("Batman");
    expect(() => character.setHealth(-1)).toThrow(
      "Здоровье должно быть положительным числом от 1 до 100"
    );
  });

  test("should throw an error if the health is more than 100", () => {
    const character = new Character("Batman");
    expect(() => character.setHealth(101)).toThrow(
      "Здоровье должно быть положительным числом от 1 до 100"
    );
  });

  // Проверка пограничных значений
  test("should throw an error if the name is not a string", () => {
    expect(() => new Character(["Batman"])).toThrow(
      "Имя должно быть строкой от 2 до 10 символов включительно"
    );
  });

  // Проверка на пустую строку
  test("should throw an error if the name is empty", () => {
    expect(() => new Character("")).toThrow(
      "Имя должно быть строкой от 2 до 10 символов включительно"
    );
  });
  // Проверка на число
  test("should set level to 1", () => {
    const character = new Character("Batman");
    character.setLevel(1);
    expect(character.level).toBe(1);
  });

  test("should set level to 100", () => {
    const character = new Character("Batman");
    character.setLevel(100);
    expect(character.level).toBe(100);
  });

  test("should set health to 0", () => {
    const character = new Character("Batman");
    character.setHealth(0);
    expect(character.health).toBe(0);
  });

  test("should set health to 100", () => {
    const character = new Character("Batman");
    character.setHealth(100);
    expect(character.health).toBe(100);
  });
});

export default class Character {
  constructor(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов включительно');
    }
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  setLevel(level) {
    if (typeof level !== 'number' || level < 1 || level > 100) {
      throw new Error('Уровень должен быть числом от 1 до 100');
    }
    this.level = level;
  }

  setHealth(health) {
    if (typeof health !== 'number' || health < 0 || health > 100) {
      throw new Error('Здоровье должно быть положительным числом от 1 до 100');
    }
    this.health = health;
  }
}

import Character from './Character.js';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defenсe = 40;
  }
}

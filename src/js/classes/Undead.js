import Character from './Character.js';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defenсe = 25;
  }
}

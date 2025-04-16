import Character from './Character.js';


export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defenсe = 25;
  }
}

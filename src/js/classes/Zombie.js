import Character from "./Character.js";

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = "Zombie";
    this.attack = 40;
    this.defenсe = 10;
  }
}

import { Character } from './Character';

export class Daemon extends Character {
  constructor(name) {
    super(name);
    this.characterAttack = 110;
  }
}

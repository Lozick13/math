export class Character {
  constructor(name) {
    this.characterName = name;
    this.characterDistance = 0;
    this.characterStoned = false;
    this.characterAttack = 100;
  }

  get distance() {
    return this.characterDistance;
  }
  set distance(value) {
    if (typeof value !== 'number' || value < 1) {
      throw new Error('Distance must be a positive number');
    }
    this.characterDistance = value;
  }

  get stoned() {
    return this.characterStoned;
  }
  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Stoned must be a boolean');
    }
    this.characterStoned = value;
  }

  get attack() {
    if (this.characterDistance <= 0) {
      throw new Error('Zero distance');
    }

    this.characterAttack *= 1 - (this.characterDistance - 1) * 0.1;

    if (this.characterStoned) {
      this.characterAttack -= Math.round(Math.log2(this.characterDistance) * 5);
    }

    return this.characterAttack;
  }
  set attack(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Attack must be a positive number');
    }
    this.characterAttack = value;
  }
}

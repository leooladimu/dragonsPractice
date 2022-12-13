class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // const newAccount = new BankAccount('Will Alexander', 500);

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...Dragon) {
    return this.name;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

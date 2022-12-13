class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...args) {
    let dragonNames = []
    args.forEach(arg => {
      dragonNames.push(arg.name)
    });
    return dragonNames
  }
  
}


const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

const john = new Dragon("John", "brown");
console.log(john);
console.log(john.breathesFire());

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

// Dragon { name: 'Toothless', color: 'black' }
// Toothless breathes fire everywhere! BURN!!!!

// const puff = new Dragon("Puff", "green");
// const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless, john));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}



// constructor(name, color) {
//   this.name = name;
//   this.color = color;
// }
// // const newAccount = new BankAccount('Will Alexander', 500);
// 
// breathesFire() {
//   return `${this.name} breathes fire everywhere! BURN!!!!`;
// }
// static getDragons(...Dragon) {
//   return this.name;
// }
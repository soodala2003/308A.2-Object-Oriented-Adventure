// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

//console.log(adventurer.inventory[0]); // sword

adventurer.inventory.forEach(item => {
    console.log(item);
});

//console.log(adventurer.roll());
//console.log(adventurer.roll());
//console.log(adventurer.roll());
//console.log(adventurer);

// Part 2: Class Fantasy & part 4 
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        //console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
    static MAX_HEALTH = 100;
}

//const robin = new Character("Robin");
//robin.inventory = ["sword", "potion", "artifact"];
//robin.companion = new Character("Leo");
//robin.companion.type = "Cat";
//robin.companion.companion = new Character("Frank");
//robin.companion.companion.type = "Flea";
//robin.companion.companion.inventory = ["small hat", "sunglasses"];

//console.log(robin);
//console.log(robin.roll());
//console.log(robin.companion.roll());
//console.log(robin.companion.companion.roll());

// Part 3: Class Features & part 4 & part 6
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    static ROLES = ["Fighter", "Healer", "Wizard"];

    isMatchedRole () {
        for (let i = 0; i < ROLES.length; i++) {
            if (this.role === ROLES[i]) {
                return true;
            } else {
                return false;
            }
        }            
    }

    duel (adventurer = "Adventurer") {
        do {
            if (super.roll() > adventurer.roll()) {
                adventurer.health = adventurer.health - 1; 
                console.log(`${this.name} won this round.`);
                console.log(`${this.name}'s roll: ${super.roll()}, current health: ${this.health}`);
                console.log(`${adventurer.name}'s roll: ${adventurer.roll()}, current health: ${adventurer.health}`);
            } else if (super.roll() < adventurer.roll()) {
                this.health = this.health - 1;
                console.log(`${adventurer.name} won this round.`)
                console.log(`${adventurer.name}'s roll: ${adventurer.roll()}, current health: ${adventurer.health}`);
                console.log(`${this.name}'s roll: ${super.roll()}, current health: ${this.health}`);
            } else {
                console.log(`${this.name} and ${adventurer.name} tied`);
            }
        } while (this.health === 50 || adventurer.health === 50);

        if (this.health > 50) {
            console.log(`${this.name} is the winner of the duel: ${this.name} still above 50 health.`);
        } else if (adventurer.health > 50) {
            console.log(`${adventurer.name} is the winner of the duel: ${adventurer.name} still above 50 health.`);
        }
    }
}

class Companion extends Character {
    constructor (name, type) {
        super(name);
        this.type = type;
        this.inventory = [];
    }
}

const robin = new Adventurer("Robin", "Fighter");
const kevin = new Adventurer("Kevin", "Fighter");
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin.duel(kevin));

// Part 5: Gather your Party
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
}
  
const healers = new AdventurerFactory("Healer");
//console.log(healers);
//const robin = healers.generate("Robin");
//console.log(robin);

// Alternative approach
/* class Healer extends Adventurer {
    constructor (name, role) {
        super(name, role);
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
      }
      findByIndex (index) {
        return this.adventurers[index];
      }
      findByName (name) {
        return this.adventurers.find((a) => a.name === name);
      }
}
 */

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

// Part 2: Class Fantasy & part 4 
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
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

// Part 3: Class Features & part 4 
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
    static roles() {
        return ["Fighter", "Healer", "Wizard"];
    }
    isMatch () {
        for (let i = 0; i < roles().length; i++) {
            if (role === roles()[i]) {
                return true;
            } else {
                return false;
            }
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

const robin = new Adventurer("Robin");
//robin.role = Adventurer.roles()[0];
//robin.companion = new Companion("Leo", "Cat");
//robin.companion.companion = new Companion("Frank", "Flea");
//robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);

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
const robin1 = healers.generate("Robin");

//console.log(robin);
console.log(healers);
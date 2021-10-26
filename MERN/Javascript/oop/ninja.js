class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`
        Name: ${this.name}\n
        Strength: ${this.strength}\n
        Speed: ${this.speed}\n
        Health: ${this.health}\n
        `)
    }

    drinkSake() {
        this.health += 10
        return this
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats()
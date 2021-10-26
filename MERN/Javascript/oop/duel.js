class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target) {
        target.res -= this.power
        return this
    }
}

class Effect extends Card {
    constructor(name, cost, stat, mag) {
        super(name, cost)
        this.stat = stat
        this.mag = mag
        this.text = `${this.mag > 0 ? 'increase' : 'reduce'} target's ${this.stat} by ${Math.abs(this.mag)}`
    }

    play(target) {
        if (target instanceof Unit) {
            switch (this.attr) {
                case 'resilience': target.res += this.mag; break;
                case 'power': target.power += this.mag; break;
            }
        } else {
            throw new Error("Target must be a unit!")
        }
        return this
    }
}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4)
const bbn = new Unit("Black Belt Ninja", 4, 5, 4)

const ha = new Effect("Hard Algorithm", 2, "resilience", 3)
const upr = new Effect("Unhandled Promise Rejection", 1, "resilience", -2)
const pp = new Effect("Pair Programming", 3, "power", 2)

ha.play(rbn)
upr.play(rbn)
pp.play(rbn)
rbn.attack(bbn)

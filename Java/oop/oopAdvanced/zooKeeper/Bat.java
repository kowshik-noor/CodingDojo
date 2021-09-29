public class Bat extends Mammal {
    public Bat() {
        this.energyLevel = 300;
    }

    public void fly() {
        System.out.println("Swoosh");
        this.energyLevel -= 50;
    }

    public void eatHumans() {
        System.out.println("so- well, never mind");
        this.energyLevel += 25;
    }
    
    public void attackTown() {
        System.out.println("*town on fire*");
        this.energyLevel -= 100;
    }
}
public class Item {
    private String name;
    private double price;
    private int id;


    // constructor
    public Item(String name, double price, int id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
    
    // getters
    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getId() {
        return id;
    }

}

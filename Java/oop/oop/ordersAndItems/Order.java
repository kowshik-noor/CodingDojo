import java.util.ArrayList;

public class Order {
    public String name;
    public double total = 0;
    public boolean ready;
    public ArrayList<Item> items = new ArrayList<Item>();

    public Order(String name) {
        this.name = name;
    }

    public Order addItem(Item item) {
        this.items.add(item);
        this.total += item.price;
        return this;
    }
}

import java.util.ArrayList;

public class Order {
    private String name;
    private double total = 0;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();

    public Order() {
        name = "anon";
    }

    public Order(String name) {
        this.name = name;
    }

    // getters
    public String getName() {
        return name;
    }

    public double getTotal() {
        return total;
    }

    public String getStatus() {
        return ready ? "Your order is ready." : "Thank you for waiting your order will be ready soon";
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    // setters
    public Order addItem(Item item) {
        this.items.add(item);
        this.total += item.getPrice();
        return this;
    }

    public void changeStatus(boolean status) {
        ready = status;
    }


    // display method
    public void display() {
        System.out.printf("Customer Name: %s\n", name);
        for (Item item : items) {
            System.out.printf("%s - $%.2f\n", item.getName(), item.getPrice());
        }
        System.out.printf("Total: $%.2f\n", total);
    }






}

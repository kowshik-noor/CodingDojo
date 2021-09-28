import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        //  Menu items
        Item item1 = new Item("mocha", 1.0);
        Item item2 = new Item("latte", 1.5);
        Item item3 = new Item("drip coffee", 2.0);
        Item item4 = new Item("capuccino", 2.5);


        // Order variables
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
        
        System.out.printf("Name: %s\n", order1.name);
        // if i print the total of order 1, it can either return nothing or undefined...
        System.out.printf("Total: %s\n", order1.total);

        order2.addItem(item1);
        order3.addItem(item4);
        order4.addItem(item2);

        order1.ready = true;

        order4.addItem(item2).addItem(item2);

        order2.ready = true;

        System.out.printf("Order 4 Total: %s\n", order4.total);


    }
}

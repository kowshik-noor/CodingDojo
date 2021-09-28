import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {
        // Menu items
        Item item1 = new Item("mocha", 1.0);
        Item item2 = new Item("latte", 1.5);
        Item item3 = new Item("drip coffee", 2.0);
        Item item4 = new Item("capuccino", 2.5);

        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Kowshik");
        Order order4 = new Order("Sadia");
        Order order5 = new Order("Karen");

        order1.addItem(item1).addItem(item2);
        order2.addItem(item3).addItem(item4).addItem(item1);
        order3.addItem(item2).addItem(item3);
        order4.addItem(item4).addItem(item1).addItem(item2);
        order5.addItem(item3).addItem(item4);


        order2.changeStatus(true);
        System.out.println(order2.getStatus());

        System.out.println(order1.getTotal());


        order3.display();
        

    }
}

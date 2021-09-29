import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        menu = new ArrayList<Item> ();
        orders = new ArrayList<Order> ();
    }

    // methods
    public void addMenuItem(String name, double price) {
        Item item = new Item(name, price, menu.size());
        menu.add(item);
    }

    public void displayMenu() {
        for (Item item : menu) {
            System.out.printf("%s %s -- $%.2f\n", item.getId(), item.getName(), item.getPrice());
        }
    }

    public void newOrder() {
        String name = System.console().readLine("Please enter customer name for new order: \n");

        Order order = new Order(name);

        orders.add(order);


        System.out.printf("Hello, %s. Here's the menu:\n", name);

        displayMenu();

        String itemNumber = System.console().readLine("Please enter a menu item index or q to quit: \n");

        while (!itemNumber.equals("q")) {
            // get the item object from the menu and add the item to the order
            int itemId = Integer.parseInt(itemNumber);

            order.addItem(menu.get(itemId));

            // get input from the user again until they quit
            itemNumber = System.console().readLine("Please enter a menu item index or q to quit: \n");
        }

        // print the order details
        order.display();

    }

}

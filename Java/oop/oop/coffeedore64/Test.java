public class Test {
    public static void main(String[] args) {
        CoffeeKiosk ck = new CoffeeKiosk();
        ck.addMenuItem("ham", 1);
        ck.addMenuItem("burger", 1.5);
        ck.addMenuItem("hamburger", 2.5);

        ck.newOrder();


    }
}

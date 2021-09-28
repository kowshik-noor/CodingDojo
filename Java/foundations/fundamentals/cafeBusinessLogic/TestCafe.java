import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class TestCafe {
    public static void main(String[] args) {
        CafeUtil appTest = new CafeUtil();

        System.out.println("----- Streak Goal Test -----");
        int timeFrame = 10;
        System.out.printf("Purchases needed by week %s: %s \n", timeFrame, appTest.getStreakGoal(timeFrame));

        System.out.println("----- Price Chart Test-----");
        appTest.printPriceChart("Chai Latte Mix", 4.5, 3);
        appTest.printPriceChart("Specialty Coaster", 2.0, 5);

        System.out.println("----- Order Total Test-----");
        double[] lineItems = { 3.5, 1.5, 4.0, 4.5 };
        System.out.printf("Order total: %s \n", appTest.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test-----");
        List<String> loadMenu = Arrays.asList("drip coffee", "cappucino", "latte", "mocha");
        List<Double> loadPrices = Arrays.asList(1.5, 3.5, 4.5, 3.5);
        ArrayList<String> menu = new ArrayList<String>();
        ArrayList<Double> prices = new ArrayList<Double>();

        // Note: Below is a way to add multiple elements to a list in fewer lines.
        // It does require an extra import at the top of the file.
        menu.addAll(loadMenu);
        prices.addAll(loadPrices);
        appTest.displayMenu(menu, prices);

        System.out.println("----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // Test 4 times
        for (int i = 0; i < 4; i++) {
            appTest.addCustomer(customers);
            System.out.println(customers);
        }

    }
}

import java.util.ArrayList;

public class CafeUtil {
    public int getStreakGoal(int numWeeks) {
        if (numWeeks <= 0) {
            return 0;
        }
        return numWeeks + getStreakGoal(numWeeks - 1);
    }

    public void printPriceChart(String thing, double price, int quant) {
        System.out.println(thing);
        for (int i = 0; i < quant; i++) {
            System.out.println(String.format("%s - $%.2f", i + 1, (price * (i+1)) - (i*0.5) ));
        }
    }

    public double getOrderTotal(double[] prices) {
        double total = 0;
        for (double item : prices) {
            total += item;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> items, ArrayList<Double> prices) {
        for (int i = 0; i < items.size(); i++) {
            System.out.println(String.format("%s %s -- $%.2f", i, items.get(i), prices.get(i)));
        }
    }
    
    public void addCustomer(ArrayList<String> people) {
        String userName = System.console().readLine("What's your name? \n");

        System.out.println(String.format("Hello, %s!", userName));
        System.out.println(String.format("There are %s people ahead of you.", people.size()));
        people.add(userName);
    }
}

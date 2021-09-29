public class BankTest {
    public static void main(String[] args) {
        BankAccount b1 = new BankAccount(69.69, 66.66);

        b1.deposit("c", 100);
        b1.withdraw("s", 5);

        System.out.println(b1.getTotal());

    }
}

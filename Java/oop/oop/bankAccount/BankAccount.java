public class BankAccount {
    private double cBal;
    private double sBal;
    static private int numAccounts = 0;
    static private double totalMoney = 0;


    public BankAccount(double cBal, double sBal) {
        this.cBal = cBal;
        this.sBal = sBal;
        totalMoney += (cBal + sBal);
        numAccounts++;
    }

    // getters
    public double getChecking() {
        return cBal;
    }

    public double getSaving() {
        return sBal;
    }

    // methods and stuff
    public void withdraw(String acct, double amt) {
        if (amt > cBal || amt > sBal) {
            System.out.println("Error... You have insufficient funds.");
            return;
        }

        switch (acct) {
            case "c":
                cBal -= amt;
                totalMoney -= amt;
                break;
            case "s":
                sBal -= amt;
                totalMoney -= amt;
                break;
            default:
                System.out.println("Error... Pick an account. 'c' for checkings and 's' for savings.");
        }
    }

    public void deposit(String acct, double amt) {
        switch (acct) {
            case "c":
                cBal += amt;
                totalMoney += amt;
                break;
            case "s":
                sBal += amt;
                totalMoney += amt;
                break;
            default:
                System.out.println("Error... Pick an account. 'c' for checkings and 's' for savings.");
        }
    }

    public double getTotal() {
        return cBal + sBal;
    }
    
}
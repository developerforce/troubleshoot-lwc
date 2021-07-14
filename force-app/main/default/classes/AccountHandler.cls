public with sharing class AccountHandler {
    
    public static void insertAccount(Integer n) {
        List<Account> addAccounts = new List<Account>();
        Integer i = 1;
        while(i <= n){
            addAccounts.add(new Account(Name = 'Acme Inc '+i, AccountNumber = 'A000'+i));
            i++;
        }
        insert addAccounts;
    }
}

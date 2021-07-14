public with sharing class AccountUtility {
    public static void viewAnnualRevenue() {
        List<Account> accountsList = [SELECT AnnualRevenue, Name FROM Account];
        for(Account acc : accountsList){
            String acctRev = acc.Name + ':' + acc.AnnualRevenue;
            System.debug(acctRev);
        }
    }
}

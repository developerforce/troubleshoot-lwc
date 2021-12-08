/**
 * Simple controller for the Bad Bunch demo.
 **/
public with sharing class BadBunchController {
    
  /**
   * Generates a number of accounts.
   * @returns (Account)
   */
  @AuraEnabled(cacheable=false)
  public static Account[] generateRecords(Integer size) {
    Account[] results = new Account[]{};

    for(Integer i = 0; i < size; i++) {
      results.add(new Account(
        name = 'Account_' + i + Integer.valueof((Math.random() * 10))
      ));
    }

    return results;
  }

  /**
   * Generates a number of accounts as JSON string
   * @returns (String)
   */
  @AuraEnabled(cacheable=false)
  public static String generateJSONRecords(Integer size) {
    Account[] accounts = generateRecords(size);
    String results = JSON.serialize(accounts);
    runDescribe();

    return results;
  }

  @AuraEnabled(cacheable=false)
  public static List<String> runDescribe() {
    Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe(); 
    Set<String> objs = new Set<String>();
    for(Schema.SObjectType d : gd.values()) {
      Schema.DescribeSObjectResult ds = d.getDescribe();
      if(!ds.isCreateable())
      continue;
      objs.add(ds.getName());
    }
    List<String> sortedNames = new List<String>(objs);
    sortedNames.sort();
    
    return sortedNames;
  }
}
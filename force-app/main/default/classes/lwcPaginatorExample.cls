public with sharing class lwcPaginatorExample {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getData(Integer rowsToFetch, Integer offset){
        return [SELECT Id, Name, Industry, CreatedDate 
                FROM Account 
                ORDER BY CreatedDate
                LIMIT :rowsToFetch
                OFFSET :offset];
    }

    @AuraEnabled(cacheable=true)
    public static Integer getCount(){
        return [SELECT COUNT() FROM Account];
    }
}
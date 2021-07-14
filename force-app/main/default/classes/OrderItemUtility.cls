public with sharing class OrderItemUtility {

    public static void addBonusBouquet(List<Order> ordersFromTrigger) {
        List<OrderItem> newBouquets = new List<OrderItem>();
        // Use SOQL to get the ID of the bonus bouquet and store it in an sObject variable called bonusProduct
        List<Product2> bonusProductList = [SELECT Id, ProductCode FROM Product2 WHERE ProductCode = 'BOT-BB-12'];
        Product2 bonusProduct = new Product2();
        if(bonusProductList.size() > 0) {
            bonusProduct = bonusProductList[0];
        }
        // Use SOQL to get the price book entry ID associated with the bonusProduct and store it in an sObject variable called entry
        // Every Product has an assosiated PricebookEntry
        List<PricebookEntry> entryList = [SELECT Id, Product2Id FROM PricebookEntry WHERE Product2Id = :bonusProduct.Id];
        PricebookEntry entry = new PricebookEntry();
        if(entryList.size() > 0) {
            entry = entryList[0];
        }
        for(Order currentOrder : ordersFromTrigger) {
            if(currentOrder.Status == 'Activated') {
                OrderItem freeBouquet = new OrderItem(
                    OrderId = currentOrder.id, //this is the order we're linking the bouquet to
                    PricebookEntryId = entry.id,
                    numberOfFlowers__c = 3,
                    description = 'FREE Bouquet',
                    Quantity = 1,
                    colorTheme__c = 'Spectacular Sunset',
                    percentOfOpening__c = 0,
                    UnitPrice = 0.00
                );
                newBouquets.add(freeBouquet);
            }
        }
        insert newBouquets;
    }
}
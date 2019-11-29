public class QueryAccountRecordsController {
    @AuraEnabled
    public static List<Account> queryRecordMethod(){
           return [SELECT Id, Name, createdDate from Account order by createdDate DESC Limit 10];
    }
}
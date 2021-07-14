public class SharingSettingsUnderstanding {
    
    public void run(){
        withSharingClass obj1 = new withSharingClass();
        obj1.method1(); // with sharing
        obj1.method2(); //run as "without sharing" because class withoutSharingClass is explicitely declared as "without sharing" 
        obj1.method3(); //run as "with sharing" because class inheritedSharingClass is inheriting caller's sharing
        obj1.method4(); //run as "with sharing" because class JustClass doesn't have any sharing modified specified

        withoutSharingClass obj2 = new withoutSharingClass();
        obj2.method1(); //without sharing
        obj2.method2(); //run as "with sharing" because class withSharingClass is explicitely declared as "with sharing"
        obj2.method3(); //run as "without sharing" because class inheritedSharingClass is inheriting caller's sharing
        obj2.method4(); //runs as without sharing by default

        inheritedSharingClass obj3 = new inheritedSharingClass();
        obj3.method1(); //by default, "with sharing"
        obj3.method2(); //calling a withsharing class hence "with sharing" applied
        obj3.method3(); //calling a withoutSharingClass hence "without sharing" applied
        obj3.method4(); //calling a class who doesn't have any sharing modified hence "with sharing" applied

        JustClass obj = new JustClass();
        obj.method1();//by default, "without sharing"
        obj.method2(); //calling a with sharing class hence sharing applied
        obj.method3(); //calling a without sharing class hence no sharing applied
        obj.method4(); //calling inherited sharing class hence by default with sharing applied.
    }
    
    public class JustClass{
        
        public void method1(){
            List<sobject> acc = [SELECT Id FROM Account];
        }

        public void method2(){
            withSharingClass withSharing = new withSharingClass();
            withSharing.method1();
        }
    
        public void method3(){
            withoutSharingClass withoutSharing = new withoutSharingClass();
            withoutSharing.method1();
        }
    
        public void method4(){
            inheritedSharingClass inheriedSharing = new inheritedSharingClass();
            inheriedSharing.method1();
        }
    }
    public with sharing class withSharingClass {
        
        public withSharingClass(){

        }
        public void method1(){
            List<sobject> acc = [SELECT Id FROM Account];
        }
    
        public void method2(){
            withoutSharingClass withoutSharing = new withoutSharingClass();
            withoutSharing.method1();
        }
    
        public void method3(){
            inheritedSharingClass inheriedSharing = new inheritedSharingClass();
            inheriedSharing.method1();
        }
    
        public void method4(){
            JustClass just = new JustClass();
            just.method1();
        }
    }
    
    public without sharing class withoutSharingClass {
        
        public withoutSharingClass(){}

        public void method1(){
            List<sobject> acc = [SELECT Id FROM Account];
        }
    
        public void method2(){
            withSharingClass withSharing = new withSharingClass();
            withSharing.method1();
        }
    
        public void method3(){
            inheritedSharingClass inheriedSharing = new inheritedSharingClass();
            inheriedSharing.method1();
        }
    
        public void method4(){
            JustClass just = new JustClass();
            just.method1();
        }
    }
    
    public inherited sharing class inheritedSharingClass {
        
        public inheritedSharingClass(){}

        public void method1(){
            List<sobject> acc = [SELECT Id FROM Account];
        }
    
        public void method2(){
            withSharingClass withSharing = new withSharingClass();
            withSharing.method1();
        }
    
        public void method3(){
            withoutSharingClass withoutSharing = new withoutSharingClass();
            withoutSharing.method1();
        }
    
        public void method4(){
            JustClass just = new JustClass();
            just.method1();
        }
    }
}
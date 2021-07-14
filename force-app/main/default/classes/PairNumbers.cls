public class PairNumbers {
    Integer x,y;

    public PairNumbers(Integer a, Integer b) {
        x=a;
        y=b;
    }

    public Boolean equals(Object obj) {
        if (obj instanceof PairNumbers) {
            PairNumbers p = (PairNumbers)obj;
            return ((x==p.x) && (y==p.y));
        }
        return false;
    }

    public Integer hashCode() {
        return (31 * x) ^ y;
    }

    public static void run(){
        Map<PairNumbers, String> m = new Map<PairNumbers, String>();
        PairNumbers p1 = new PairNumbers(1,2);
        PairNumbers p2 = new PairNumbers(3,4);
        // Duplicate key
        PairNumbers p3 = new PairNumbers(1,2);
        m.put(p1, 'first');
        m.put(p2, 'second');
        m.put(p3, 'third');

        // Map size is 2 because the entry with 
        // the duplicate key overwrote the first entry.
        System.assertEquals(2, m.size());

        // Use the == operator
        if (p1 == p3) {
            System.debug('p1 and p3 are equal.');
        }

        // Perform some other operations
        System.assertEquals(true, m.containsKey(p1));
        System.assertEquals(true, m.containsKey(p2));
        System.assertEquals(false, m.containsKey(new PairNumbers(5,6)));

        for(PairNumbers pn : m.keySet()) {
            System.debug('Key: ' + pn);
        }

        List<String> mValues = m.values();
        System.debug('m.values: ' + mValues);

        // Create a set
        Set<PairNumbers> s1 = new Set<PairNumbers>();
        s1.add(p1);
        s1.add(p2);
        s1.add(p3);

        // Verify that we have only two elements
        // since the p3 is equal to p1.
        System.assertEquals(2, s1.size());
    }
}
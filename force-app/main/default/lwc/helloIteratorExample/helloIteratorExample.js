import { LightningElement } from 'lwc';

export default class HelloIteratorExample extends LightningElement {
    contacts = [
        {
            id : '1',
            firstname : 'Max',
            lastname : 'Mustermann'
        },
        {
            id : '2',
            firstname : 'Daya',
            lastname : 'Tappu ke papa'
        },
        {
            id : '3',
            firstname : 'Iyer',
            lastname : 'Krishanan'
        },
        {
            id : '4',
            firstname : 'Jethalal',
            lastname : 'Gadda'
        },
        {
            id : '5',
            firstname : 'Bhide',
            lastname : 'Atmaram'
        }
    ];
}
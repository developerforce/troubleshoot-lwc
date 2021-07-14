import { LightningElement } from 'lwc';

export default class ChildThrowsError extends LightningElement {

    connectedCallback(){
        throw new Error('Error from child component!');
    }
}
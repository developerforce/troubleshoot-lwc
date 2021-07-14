import { LightningElement } from 'lwc';

export default class ParentErrorCallbackExample extends LightningElement {
    //error;
    stack;
    errorCallback(error, stack){
        //this.error = error;
        console.log(stack);
        throw error;
    }
}
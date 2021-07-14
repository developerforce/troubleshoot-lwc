import { LightningElement } from 'lwc';

export default class LifeCycleCallbackExample extends LightningElement {
    constructor(){
        super();
        console.log('Constructor');
    }
    connectedCallback(){
        console.log('connected callback');
    }
    renderedCallback(){
        console.log('rendered callback');
    }
    disconnectedCallback(){
        console.log('disconnected callback');
    }
    errorCallback(){
        console.log('error callback');
    }
}
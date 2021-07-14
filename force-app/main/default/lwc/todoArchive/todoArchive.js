import { LightningElement, track, wire } from 'lwc';
import { 
    subscribe, 
    unsubscribe, 
    APPLICATION_SCOPE, 
    MessageContext 
} from 'lightning/messageService';
import TODO_APP from '@salesforce/messageChannel/Todo_App__c';

export default class TodoArchive extends LightningElement {

    @track todoList = [];
    subscription = null;

    @wire(MessageContext) messageContext;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription = subscribe(this.messageContext, 
            TODO_APP, 
            (message) => {
                this.handleMessage(message);
            }, {
                scope : APPLICATION_SCOPE
            });
        }
    }

    unsubscribeToMessageChannel(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    handleMessage(message){
        //received message from channel
        console.log('Received Task Id from LMS: '+JSON.stringify(message));
        this.todoList.push(message);
    }

    get isEmpty(){
        return this.todoList.length > 0 ? false : true;
    }
}
import { LightningElement, track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TODO_APP from '@salesforce/messageChannel/Todo_App__c';

export default class TodoWrapper extends LightningElement {

    @track todoList = [];

    @wire(MessageContext) messageContext;

    handleTodoCreation(event){
        console.log('todo-wrapper: Received Task Event from to-do-creator : '+event.detail.taskId);
        const todo = {
            'task' : event.detail.value,
            'isComplete' : false,
            'taskId' : event.detail.taskId
        };
        this.todoList.push(todo);
    }

    handleTaskComplete(event){
        const taskId = event.detail.value;
        console.log('todo-wrapper: Receive Todo-task Id from todo-display select event: '+ taskId);
        var complectedTask;
        this.todoList = this.todoList.filter(el => {
            if(el.taskId === taskId){
                complectedTask = el;
            }
            return el.taskId !== taskId;
        });
        complectedTask.isComplete = true;
        console.log('Completed Task: '+ JSON.stringify(complectedTask));
        
        const messagePayload = {
            'taskId' : complectedTask.taskId,
            'task' : complectedTask.task,
            'completionDate' : new Date()
        };

        //publish to a message channel
        publish(this.messageContext, TODO_APP, messagePayload);
    }

    handleClear(){
        const displayCmp = this.template.querySelector('c-todo-display');
        displayCmp.todoList = [];
    }
}
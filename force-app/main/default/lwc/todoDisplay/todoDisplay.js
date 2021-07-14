import { LightningElement, api } from 'lwc';

export default class TodoDisplay extends LightningElement {
    @api todoList;

    handleTaskComplete(event){
        
        if(event.target.checked){
            const taskId = event.target.dataset.taskid;
            console.log('todo-display : Selected Task Id: ' + event.target.dataset.taskid);
            this.dispatchEvent(new CustomEvent('done', {
                detail : {
                    value : taskId
                }
            }));
        }
    }

    get isEmpty(){
        return this.todoList.length > 0 ? false: true;
    }
}
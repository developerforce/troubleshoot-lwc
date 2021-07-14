import { LightningElement } from 'lwc';

export default class TodoCreator extends LightningElement {
    
    todo;
    
    handleTodoChange(event){
        this.todo = event.target.value;
    }

    handleSave(event){
        event.preventDefault();

        const input = this.template.querySelector('lightning-input');
        let isValid = input.checkValidity();
        console.log('Todo Creator: input: '+input);
        console.log('Todo Creator: isValid: '+isValid);
        let taskId = 'id' + Math.random().toString(16).slice(2);
        console.log('Todo Creator: Task Id: '+taskId);
        if(isValid){
            console.log('Todo Creator: Save: '+ this.todo);
        
            this.dispatchEvent(new CustomEvent('todosave', {
                detail : {
                    value : this.todo,
                    taskId : taskId
                }
            }));
            input.value = '';
        }else{
            input.reportValidity();
            input.focus();
        }
    }
}
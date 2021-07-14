import { LightningElement } from 'lwc';

export default class HelloConditioningRendering extends LightningElement {
    isTrue = false;
    handleToggle(){
        this.isTrue = !this.isTrue;
    }
    handleButton(){
        console.log('button click');
        this.template.querySelectorAll('[data-element="toggle-element"]').forEach(element => {
            element.checked = !this.isTrue;
            this.handleToggle();
        });
    }
}
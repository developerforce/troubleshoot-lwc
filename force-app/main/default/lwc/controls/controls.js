import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    
    factors = [0,2,3,4,5,6];

    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleMultiply(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
            detail : factor
        }));
    }

    handleDivision(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('division', {
            detail : factor
        }));
    }
}
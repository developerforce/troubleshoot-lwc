import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {

    firstName = '';
    lastName = '';
    handleChange(event){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        if(fieldName ===  'firstName'){
            this.firstName = fieldValue;
        }else if(fieldName ===  'lastName'){
            this.lastName = fieldValue
        }
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}
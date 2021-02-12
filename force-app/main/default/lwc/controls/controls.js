import { LightningElement, api } from 'lwc';

export default class Controls extends LightningElement {
  @api operand = 1;

  handleAdd() {
    this.dispatchEvent(new CustomEvent('add', {
      detail: this.operand
    }));
  }
  
  handleSubtract() {
    this.dispatchEvent(new CustomEvent('subtract', {
      detail: this.operand
    }));
  }
}
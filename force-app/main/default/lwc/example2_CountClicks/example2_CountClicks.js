import { LightningElement } from 'lwc';
import { SomeObj } from './SomeObj';

export default class Example2_CountClicks extends LightningElement {
  /**
   * Number of clicks
   * @type {Number}
   */
  numberOfClicks = 0;

  renderedCallback() {
    this.listenForEvent();
  }

  listenForEvent() {
    const obj = new SomeObj();
    document.body.addEventListener('click', () => {
      obj.wasClicked = true;

      this.updateInformation();
    });
  }

  updateInformation() {
    this.numberOfClicks++;
  }

  get clickStyle() {
    let color = 'green';
    if (this.numberOfClicks < 10) {
      color = 'green';
    } else if (this.numberOfClicks < 100) {
      color = 'sandybrown';
    } else if (this.numberOfClicks < 500) {
      color = 'red';
    } else if (this.numberOfClicks < 5000) {
      color = 'darkred';
    } else if (this.numberOfClicks < 20000) {
      color = 'purple';
    } else {
      // bwa ha ha ha!
      color = 'black';
    }
    return `color:${color}`;
  }

  handleClick() {
    const evt = new CustomEvent('click', {
      bubbles: true,
      composed: true,
      detail: {
        timeStr: `${new Date().getTime()}`
      }
    });
    this.dispatchEvent(evt);
  }
}
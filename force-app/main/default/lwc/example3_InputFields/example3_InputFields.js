import { LightningElement } from 'lwc';

function randomInt(int) {
  return Math.floor(Math.random() * int);
}

export default class Example3_InputFields extends LightningElement {
  numCharsSlow = 0;
  numCharsFast = 0;
  runningDebounce = false;

  block() {
    const el = this.template.querySelector('.thrashy');
    el.innerHTML = ''; // eslint-disable-line @lwc/lwc/no-inner-html
    el.style.width = `${randomInt(100)}px`;
    el.style.height = `${randomInt(50)}px`;

    for(let i = 0, len = 30 + randomInt(5); i < len; i++) {
      const div = document.createElement('div');
      for(let j = 0, jLen = 10 + randomInt(5); j < jLen; j++) {
        div.appendChild(document.createElement('div'));
      }
      el.appendChild(div);
    }
    el.getBoundingClientRect();
  }

  onSlowInput() {
    performance.mark('keypress');
    this.block();
    this.numCharsSlow = this.template.querySelector(
      '.slow-typing'
    ).value.length;
    performance.measure('keypress', 'keypress');
  }

  onFastInput() {
    if (this.runningDebounce) {
      return; // already running, nothing to do
    }
    this.runningDebounce = true;
    requestIdleCallback(() => {
      performance.mark('keypress');
      this.block();
      this.numCharsFast = this.template.querySelector(
        '.fast-typing'
      ).value.length;
      performance.measure('keypress', 'keypress');
      this.runningDebounce = false;
    });
  }
}
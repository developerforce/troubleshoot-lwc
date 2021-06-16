/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement } from 'lwc';

export default class Example2_ScrollList extends LightningElement {
  rendered = false;
  items = [];

  updateListItems() {
    this.template.querySelectorAll('li').forEach((li, i) => {
      li.querySelector('span').innerText = 'List item #' + (i + 1); // update the text content
      if(i % 2 === 0) {
        // add striped background for even rows
        li.style.background = '#ededed';
      }
    });
  }

  onScroll() {
    for(let i = 0; i < 10; i++) {
      this.updateListItems();
    }
  }

  renderedCallback() {
    // To avoid input delays when switching nav items, delay with
    // double rAF and fill the items array once
    if(this.rendered) {
      return;
    }
    this.rendered = true;
    /* eslint-disable */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        /* eslint-enable */
        console.log('rendered');
        this.items = Array(500)
          .fill()
          .map((_, i) => ({ id: i }));
        Promise.resolve().then(() => {
          this.updateListItems();
        });
      });
    });
  }
}
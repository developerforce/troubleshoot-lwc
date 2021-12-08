export class SomeObj {
  constructor() {
    this[`p_${btoa(Math.random())}`] = btoa(Math.random());
  }
}
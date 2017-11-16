export default class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  salute() {
    return `Hi ${this.name}`;
  }
}

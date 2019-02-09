export default class outputErrorInformation {
  constructor(response) {
    this.response = response;
  }

  errorOutput() {
    return console.log(`An error has occurred: ${this.response}`);
  }
}

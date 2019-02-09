
export default class outputGeoInformation {
  constructor(response) {
    this.response = response;
  }

  infoOutput() {
    return console.log(this.response.data);
  }
}

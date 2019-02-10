import axios from 'axios';

export default class getGeoInformation {
  constructor() {
    this.addressUrl = 'https://ipapi.co/';
  }

  async getInfo(ip) {
    axios.get(`${this.addressUrl}${ip}/json`)
      .then(response => console.log(response.data));
  }
}

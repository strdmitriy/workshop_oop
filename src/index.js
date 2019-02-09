import axios from 'axios';
import Output from './output';
import Error from './error';

export default class getGeoInformation {
  constructor() {
    this.request = 'https://ipapi.co/';
  }

  async getInfo(ip) {
    console.log(ip);
    try {
      const response = await axios.get(`${this.request}${ip}/json`);
      Output(response.data);
    } catch (error) {
      Error(`An error has occurred: ${error}`);
    }
  }
}

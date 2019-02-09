import axios from 'axios';
import Output from './output';
import Error from './error';

export default class getGeoInformation {
  constructor(request) {
    this.request = request || '';
  }

  getInfo() {
    axios.get(`http://ip-api.com/json/${this.request}`)
      .then(response => new Output(response).infoOutput())
      .catch(error => new Error(error).infoError());
  }
}

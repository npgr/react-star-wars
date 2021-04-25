import axios, { AxiosStatic } from 'axios';
import { CharacterListData } from './api.d';

class API {
  http: AxiosStatic;

  constructor() {
    axios.defaults.baseURL = 'https://swapi.dev/api/';
    this.http = axios;
  }

  // Promise<AxiosResponse<ApiResponse>> =>
  public getCharacterList = (page = 1): Promise<CharacterListData> =>
    this.http
      .get(`people?page=${page}`)
      .then((response) => (response && response.data) || null);
}

export default new API();

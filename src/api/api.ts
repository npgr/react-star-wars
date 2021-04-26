import axios, { AxiosStatic } from 'axios';
import {
  CharacterDetailApiResponse,
  CharacterListApiResponse,
  FilmDetailApiResponse
} from './api.d';

class API {
  http: AxiosStatic;

  constructor() {
    axios.defaults.baseURL = 'https://swapi.dev/api/';
    this.http = axios;
  }

  // Promise<AxiosResponse<ApiResponse>> =>
  public getCharacterList = (page = 1): Promise<CharacterListApiResponse> =>
    this.http
      .get(`people?page=${page}`)
      .then((response) => (response && response.data) || null);

  public getCharacterDetail = (
    id: string
  ): Promise<CharacterDetailApiResponse> =>
    this.http
      .get(`people/${id}`)
      .then((response) => (response && response.data) || null);

  public getFilmDetail = (id: string): Promise<FilmDetailApiResponse> =>
    this.http
      .get(`films/${id}`)
      .then((response) => (response && response.data) || null);
}

export default new API();

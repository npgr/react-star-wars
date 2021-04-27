export interface CharacterDetailApiResponse {
  url: string;
  name: string;
  gender: string;
  height: string;
  eye_color: string;
  hair_color: string;
  mass: string;
  skin_color: string;
  films: string[];
}

export interface CharacterListApiResponse {
  count: number;
  previous: null | string;
  next: null | string;
  results: CharacterDetailApiResponse[];
}

export interface FilmDetailApiResponse {
  title: string;
}

export interface ApiCallStatus {
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

import { Character } from '../models/Character';

export interface CharacterListData {
  count: number;
  previous: null | string;
  next: null | string;
  results: Character[];
}

export interface ApiCallStatus {
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

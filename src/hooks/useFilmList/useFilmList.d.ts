import { ApiCallStatus } from '../../api';
import { FilmList } from '../../models/FilmList';

export interface FilmListState extends ApiCallStatus {
  data: FilmList[];
}

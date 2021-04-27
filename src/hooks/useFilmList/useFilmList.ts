import { useState, useCallback } from 'react';
import api from '../../api';
// import { characterListBuilder } from './useCharacterList.builder';
import { FilmListState } from './useFilmList.d';

function useFilmList(): [FilmListState, (ids: string[]) => void] {
  const EMPTY_DATA: FilmListState = {
    data: [],
    loading: false,
    loaded: false,
    error: false
  };

  const [filmListData, setFilmListData] = useState<FilmListState>(EMPTY_DATA);

  const fetchApiFilmList = (ids: string[]) => {
    try {
      setFilmListData({
        data: [],
        loading: true,
        loaded: false,
        error: false
      });

      const asyncGetFilm = async (id: string) => {
        const { title } = await api.getFilmDetail(id);
        return { id, title };
      };

      const getData = async () => {
        return Promise.all(ids.map((id) => asyncGetFilm(id)));
      };

      getData().then((data) =>
        setFilmListData({
          data,
          loading: false,
          loaded: true,
          error: false
        })
      );
    } catch (e) {
      setFilmListData({
        ...filmListData,
        loading: false,
        loaded: false,
        error: true
      });
    }
  };

  const fetchFilmList = useCallback((id: string[]) => fetchApiFilmList(id), []); // eslint-disable-line react-hooks/exhaustive-deps

  return [filmListData, fetchFilmList];
}

export default useFilmList;

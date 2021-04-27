import { useState, useCallback } from 'react';
import api, { ApiCallStatus } from '../../api';
import { characterDetailBuilder } from './useCharacterDetail.builder';
import { CharacterDetail } from '../../models/CharacterDetail';
import useFilmList, { FilmListState } from '../useFilmList';

interface CharacterDetailState extends ApiCallStatus {
  character: CharacterDetail;
}

function useCharacterDetail(): [
  CharacterDetailState,
  FilmListState,
  (id: string) => Promise<void>
] {
  const EMPTY_DATA: CharacterDetailState = {
    character: {
      id: '',
      name: '',
      gender: '',
      height: '',
      eyeColor: '',
      hairColor: '',
      mass: '',
      skinColor: ''
    },
    loading: false,
    loaded: false,
    error: false
  };

  const [
    characterDetailData,
    setCharacterDetailData
  ] = useState<CharacterDetailState>(EMPTY_DATA);

  const [filmListData, fetchFilmList] = useFilmList();

  const fetchApiCharacterDetail = async (id: string) => {
    try {
      setCharacterDetailData({
        ...characterDetailData,
        loading: true,
        loaded: false,
        error: false
      });
      const response = await api.getCharacterDetail(id);
      const [data, films] = characterDetailBuilder(response);
      setCharacterDetailData({
        character: data,
        loading: false,
        loaded: true,
        error: false
      });
      fetchFilmList(films);
    } catch (e) {
      setCharacterDetailData({
        ...characterDetailData,
        loading: false,
        loaded: false,
        error: true
      });
    }
  };

  const fetchCharacterDetail = useCallback(
    (id: string) => fetchApiCharacterDetail(id),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [characterDetailData, filmListData, fetchCharacterDetail];
}

export default useCharacterDetail;

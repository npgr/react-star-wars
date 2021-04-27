import { useState, useCallback } from 'react';
import api, { ApiCallStatus } from '../../api';
import { characterListBuilder } from './useCharacterList.builder';
import { CharacterList } from '../../models/CharacterList';

interface CharacterListState extends ApiCallStatus {
  count: number;
  next: string | null;
  previous: string | null;
  data: CharacterList[];
  page: number;
}

function useCharacterList(): [
  CharacterListState,
  (page: number) => Promise<void>
] {
  const EMPTY_DATA: CharacterListState = {
    count: 0,
    next: null,
    previous: null,
    data: [],
    loading: false,
    loaded: false,
    error: false,
    page: 0
  };

  const [
    characterListData,
    setCharacterListData
  ] = useState<CharacterListState>(EMPTY_DATA);

  const fetchApiCharacterList = async (page = 1) => {
    try {
      setCharacterListData({
        ...characterListData,
        loading: true,
        loaded: false,
        error: false
      });
      const { count, next, previous, results } = await api.getCharacterList(
        page
      );
      setCharacterListData({
        data: characterListBuilder(results),
        count,
        next,
        previous,
        loading: false,
        loaded: true,
        error: false,
        page
      });
    } catch (e) {
      setCharacterListData({
        ...characterListData,
        loading: false,
        loaded: false,
        error: true
      });
    }
  };

  const fetchCharacterList = useCallback(
    (page: number) => fetchApiCharacterList(page),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [characterListData, fetchCharacterList];
}

export default useCharacterList;

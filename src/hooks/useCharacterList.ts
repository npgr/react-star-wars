import { useState, useCallback } from 'react';
import api, { ApiCallStatus, CharacterListData } from '../api';

interface CharacterListData2 extends CharacterListData, ApiCallStatus {
  page: number;
}

export const useCharacterList = (): [
  CharacterListData2,
  (page: number) => Promise<void>
] => {
  const EMPTY_DATA: CharacterListData2 = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    loading: false,
    loaded: false,
    error: false,
    page: 0
  };

  const [
    characterListData,
    setCharacterListData
  ] = useState<CharacterListData2>(EMPTY_DATA);

  const fetchApiCharacterList = async (page = 1) => {
    try {
      setCharacterListData({
        ...characterListData,
        loading: true,
        loaded: false,
        error: false
      });
      const response = await api.getCharacterList(page);
      setCharacterListData({
        ...response,
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
    []
  );

  return [characterListData, fetchCharacterList];
};

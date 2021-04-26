import { CharacterList } from '../../models/CharacterList';
import { CharacterDetailApiResponse } from '../../api';
import { getCharacterIdFromUrl } from '../../utils/character';

export const characterListBuilder = (
  response: CharacterDetailApiResponse[]
): CharacterList[] => {
  if (!Array.isArray(response)) return [];

  const filteredResponse = response.filter(
    (people) => typeof people === 'object'
  );

  return filteredResponse
    .map(({ url, name = '', gender = '', height = '' }) => ({
      id: getCharacterIdFromUrl(url),
      name,
      gender,
      height
    }))
    .filter(({ id }) => !!id);
};

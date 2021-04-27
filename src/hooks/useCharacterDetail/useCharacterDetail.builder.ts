import { CharacterDetail } from '../../models/CharacterDetail';
import { CharacterDetailApiResponse } from '../../api';
import { getCharacterIdFromUrl } from '../../utils/character';
import { getFilmIdFromUrl } from '../../utils/film';

export const characterDetailBuilder = (
  response: CharacterDetailApiResponse
): [CharacterDetail, string[]] => {
  if (typeof response !== 'object')
    throw Error('invalid character detail data');

  const {
    url,
    name = '',
    gender = '',
    height = '',
    eye_color = '',
    hair_color = '',
    mass = '',
    skin_color = '',
    films = []
  } = response;

  if (!name && !url) throw Error('invalid character detail data');

  const parsedFilms = films
    .map((url) => getFilmIdFromUrl(url))
    .filter((id) => !!id);

  return [
    {
      id: getCharacterIdFromUrl(url),
      name,
      gender,
      height,
      eyeColor: eye_color,
      hairColor: hair_color,
      mass,
      skinColor: skin_color
    },
    parsedFilms
  ];
};

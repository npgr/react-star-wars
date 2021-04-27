const CHARACTERS_KEY = 'star-wars-characters';

export interface SavedCharacter {
  id: string;
  name: string;
}

export const saveCharacters = (characters: SavedCharacter[]) =>
  localStorage.setItem(CHARACTERS_KEY, JSON.stringify(characters));

export const getSavedCharacters = (): SavedCharacter[] => {
  const characters = localStorage.getItem(CHARACTERS_KEY);

  return characters ? JSON.parse(characters) : [];
};

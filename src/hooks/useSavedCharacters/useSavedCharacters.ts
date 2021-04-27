import { useState } from 'react';
import { SavedCharacter } from './useSavedCharacters.d';

const CHARACTERS_KEY = 'star-wars-characters';
const MAX_CHARACTERS_TO_SAVE = 3;

const saveCharactersToStore = (characters: SavedCharacter[]) =>
  localStorage.setItem(CHARACTERS_KEY, JSON.stringify(characters));

const getSavedCharactersFromStore = (): SavedCharacter[] => {
  const characters = localStorage.getItem(CHARACTERS_KEY);

  return characters ? JSON.parse(characters) : [];
};

function useSavedCharacters(): [
  SavedCharacter[],
  (character: SavedCharacter) => void
] {
  const [savedCharacters, setSavedCharacters] = useState(
    getSavedCharactersFromStore()
  );

  const saveCharacter = (character: SavedCharacter) => {
    const alreadySaved = savedCharacters.some(({ id }) => id === character.id);
    if (alreadySaved) return;
    let updatedList: SavedCharacter[];
    if (savedCharacters.length < MAX_CHARACTERS_TO_SAVE) {
      updatedList = [...savedCharacters, character];
    } else {
      const [deleted, ...remaining] = savedCharacters; // eslint-disable-line @typescript-eslint/no-unused-vars
      updatedList = [...remaining, character];
    }
    saveCharactersToStore(updatedList);
    setSavedCharacters(updatedList);
  };

  return [savedCharacters, saveCharacter];
}

export default useSavedCharacters;

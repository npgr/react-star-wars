import { createContext } from 'react';
import { getSavedCharacters } from '../utils/savedCharacters';

const savedCharacters = getSavedCharacters();

export const SavedCharactersContext = createContext(savedCharacters);

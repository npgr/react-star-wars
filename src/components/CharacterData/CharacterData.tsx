import React, { ReactElement } from 'react';
import { Character } from '../../models/Character';

interface Props {
  character: Character;
}

export default function CharacterData({ character }: Props): ReactElement {
  const {
    name,
    gender,
    eyeColor,
    hairColor,
    skinColor,
    height,
    mass
  } = character;
  return (
    <>
      <h3>{name}</h3>
      <div>
            <label>gender: </label>
            {gender}
      </div>
      <div>
            <label>eye color: </label>
            {eyeColor}
      </div>
      <div>
        <label>hair color: </label>
        {hairColor}
      </div>
      <div>
        <label>skin color: </label>
        {skinColor}
      </div>
      <div>
        <label>height: </label>
        {height}
      </div>
      <div>
        <label>mass: </label>
        {mass}
      </div>
    </>
  );
}

import { useEffect } from 'react';
import { useCharacterList } from '../../hooks/useCharacterList';

export default function CharacterList() {
  const [characterListData, fetchCharacterList] = useCharacterList();

  useEffect(() => {
    fetchCharacterList(1);
  }, [fetchCharacterList]);

  const {
    results: characterList,
    loading,
    loaded,
    page,
    previous,
    next
  } = characterListData;

  console.log('render');
  return (
    <div>
      {loading && <div>loading</div>}
      {loaded && (
        <div>
          {characterList.map((person, index) => (
            <div key={index}>{person.name}</div>
          ))}
          <button
            disabled={page < 2 || !previous}
            onClick={() => fetchCharacterList(page - 1)}
          >
            Previous
          </button>
          <div>{`Page ${page}`}</div>
          <button disabled={!next} onClick={() => fetchCharacterList(page + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

import { useEffect } from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../routes';
import useCharacterList from '../../hooks/useCharacterList';

export default function CharacterList({
  history,
  location
}: RouteComponentProps) {
  const [characterListState, fetchCharacterList] = useCharacterList();

  useEffect(() => {
    const { page } = queryString.parse(location.search, { parseNumbers: true });
    const parsedPage = typeof page === 'number' ? page : 1;
    fetchCharacterList(parsedPage);
  }, [fetchCharacterList, location.search]);

  const goDetail = (id: string) => {
    history.push(ROUTES.CHARACTER_DETAIL.replace(':id', id));
  };

  const goListPage = (page: number) => {
    history.push(`${ROUTES.CHARACTERS}?page=${page}`);
  };

  const {
    data: characterList,
    loading,
    loaded,
    page,
    error,
    previous,
    next
  } = characterListState;

  return (
    <div>
      {loading && <div>loading</div>}
      {loaded && (
        <div>
          {characterList.map(({ id, name, gender, height }, index) => (
            <div key={index} style={{ display: 'flex' }}>
              <div>{id}</div>-<div>{name}</div>-
              <button onClick={() => goDetail(id)}>detalle</button>
            </div>
          ))}
          <button
            disabled={page < 2 || !previous}
            onClick={() => goListPage(page - 1)}
          >
            Previous
          </button>
          <div>{`Page ${page}`}</div>
          <button disabled={!next} onClick={() => goListPage(page + 1)}>
            Next
          </button>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

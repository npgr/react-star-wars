import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import useCharacterDetail from '../../hooks/useCharacterDetail';

interface MatchParams {
  id: string;
}

interface CharacterDetailProps extends RouteComponentProps<MatchParams> {}

export default function CharacterDetail({
  match,
  history
}: CharacterDetailProps) {
  const [
    characterDetailData,
    filmListData,
    fetchCharacterDetail
  ] = useCharacterDetail();

  const id = match.params.id;

  useEffect(() => {
    fetchCharacterDetail(id);
  }, [fetchCharacterDetail, id]);

  const {
    loading,
    loaded,
    error,
    character: { name, height, gender }
  } = characterDetailData;

  return (
    <div>
      {loading && <div>Loading...</div>}
      {loaded && (
        <div>
          <div>name: {name}</div>
          <div>gender: {gender}</div>
          <div>height: {height}</div>
          <div>Movies:</div>
          <div>
            {filmListData.data.map(({ title }) => (
              <div>{title}</div>
            ))}
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}

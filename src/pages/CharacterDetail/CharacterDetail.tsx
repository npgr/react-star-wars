import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import useCharacterDetail from '../../hooks/useCharacterDetail';
import { PageContainer } from '../../components/UI/PageContainer';
import { Button } from '../../components/UI/Button';

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

  const {
    data: films,
    loading: loadingFilms,
    loaded: loadedFilms,
    error: errorFilms
  } = filmListData;

  return (
    <PageContainer>
      {loading && <div>Loading...</div>}
      {loaded && (
        <div>
          <div>name: {name}</div>
          <div>gender: {gender}</div>
          <div>height: {height}</div>
          <div>Movies:</div>
          <div>
            {loadingFilms && <div>Loading Films...</div>}
            {loadedFilms && films.map(({ title }) => <div>{title}</div>)}
            {errorFilms && <div>{errorFilms}</div>}
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
      <Button onClick={() => history.goBack()}>Go back</Button>
    </PageContainer>
  );
}

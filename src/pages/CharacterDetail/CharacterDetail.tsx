import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import useCharacterDetail from '../../hooks/useCharacterDetail';
import { PageContainer } from '../../components/UI/PageContainer';
import { Button } from '../../components/UI/Button';
import { Section } from './CharacterDetail.styles';

interface MatchParams {
  id: string;
}

interface CharacterDetailProps extends RouteComponentProps<MatchParams> {
  saveCharacter: Function;
}

export default function CharacterDetail({
  match,
  history,
  saveCharacter
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

  if (loaded) {
    saveCharacter({ id, name });
  }

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
        <Section>
          <div>
            <div>name: {name}</div>
            <div>gender: {gender}</div>
            <div>height: {height}</div>
            <Button onClick={() => history.goBack()}>Go back</Button>
          </div>
          <div>
            <div>Movies:</div>
            <div>
              {loadingFilms && <div>Loading Films...</div>}
              {loadedFilms && films.map(({ title }) => <div>{title}</div>)}
              {errorFilms && <div>{errorFilms}</div>}
            </div>
          </div>
        </Section>
      )}
      {error && <div>{error}</div>}
    </PageContainer>
  );
}

import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import CharacterData from '../../components/CharacterData';
import useCharacterDetail from '../../hooks/useCharacterDetail';
import { SavedCharacter } from '../../hooks/useSavedCharacters';
import { PageContainer } from '../../components/UI/PageContainer';
import { Button } from '../../components/UI/Button';
import { Section } from './CharacterDetail.styles';

interface MatchParams {
  id: string;
}

interface CharacterDetailProps extends RouteComponentProps<MatchParams> {
  saveCharacter: (character: SavedCharacter) => void;
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

  const { loading, loaded, error, character } = characterDetailData;

  if (loaded) {
    saveCharacter({ id, name: character.name });
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
            <CharacterData character={character} />
            <Button onClick={history.goBack}>Go back</Button>
          </div>
          <div>
            <h4>Movies:</h4>
            <div>
              {loadingFilms && <div>Loading Films...</div>}
              {loadedFilms &&
                films.map(({ title }, index) => <div key={index}>{title}</div>)}
              {errorFilms && <div>{errorFilms}</div>}
            </div>
          </div>
        </Section>
      )}
      {error && <div>{error}</div>}
    </PageContainer>
  );
}

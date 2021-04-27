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
    character: { name, height, gender, eyeColor, skinColor, mass, hairColor }
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

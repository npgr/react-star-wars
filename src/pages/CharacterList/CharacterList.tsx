import { useEffect } from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router';
import { ROUTES } from '../../routes';
import useCharacterList from '../../hooks/useCharacterList';
import { PageContainer } from '../../components/UI/PageContainer';
import { Button } from '../../components/UI/Button';
import { Link } from '../../components/UI/Link';
import { Pagination, Row, Title } from './CharacterList.styles';

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
    <PageContainer>
      <Title>Characters</Title>
      {loading && <div>loading...</div>}
      {loaded && (
        <div>
          {characterList.map(({ id, name, gender, height }, index) => (
            <Row key={index}>
              <div className="id">{id}</div>
              <Link
                href={ROUTES.CHARACTER_DETAIL.replace(':id', id)}
                className="name"
              >
                {name}
              </Link>
              <div className="gender">{gender}</div>
            </Row>
          ))}
          <Pagination>
            <Button
              disabled={page < 2 || !previous}
              onClick={() => goListPage(page - 1)}
            >
              Previous
            </Button>
            <div>{`Page ${page}`}</div>
            <Button disabled={!next} onClick={() => goListPage(page + 1)}>
              Next
            </Button>
          </Pagination>
        </div>
      )}
      {error && <div>{error}</div>}
    </PageContainer>
  );
}

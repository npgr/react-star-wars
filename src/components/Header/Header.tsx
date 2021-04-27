import { ROUTES } from '../../routes';
import { SavedCharacter } from '../../hooks/useSavedCharacters';
import { HeaderBar, BarGroup, LogoImage, Filter } from './Header.styles';
import { Link } from '../UI/Link';

interface HeaderProps {
  savedCharacters: SavedCharacter[];
}

export default function Header({ savedCharacters }: HeaderProps) {
  return (
    <HeaderBar>
      <Link href={ROUTES.HOME}>
        <LogoImage src="/img/logo.png" alt="home" />
      </Link>
      <BarGroup>
        <Link href={ROUTES.CHARACTERS}>Characters</Link>
        {savedCharacters.map(({ id, name }) => (
          <Link key={id} href={ROUTES.CHARACTER_DETAIL.replace(':id', id)}>
            | {name}
          </Link>
        ))}
        <Filter placeholder="Search character by name..." />
      </BarGroup>
    </HeaderBar>
  );
}

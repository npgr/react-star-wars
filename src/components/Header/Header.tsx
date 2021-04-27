import { ROUTES } from '../../routes';
import { HeaderBar, LogoImage, Link, LinkGroup, Filter } from './Header.styles';

export default function Header() {
  return (
    <HeaderBar>
      <Link href={ROUTES.HOME}>
        <LogoImage src="/img/logo.png" alt="home" />
      </Link>
      {/* <Links> */}
      <Link href={ROUTES.CHARACTERS}>Characters</Link>
      <div>3 last...</div>
      {/* </Links> */}
      <Filter placeholder="Search character by name..." />
    </HeaderBar>
  );
}

import { FooterBar } from './Footer.styles';
import { ROUTES } from '../../routes';

export default function Footer() {
  return (
    <FooterBar>
      <div>
        <a href={ROUTES.HOME}>
          <img src="/img/logo.png" alt="Star Wars" />
        </a>
        <div>Copyright Nuno Gonçalves 2021</div>
      </div>
    </FooterBar>
  );
}

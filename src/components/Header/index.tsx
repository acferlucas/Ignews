/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from '../NavLink';
import { SignInButton } from '../SignInButton';
import { Container } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <img src="logo.svg" alt="ig.news" />

      <nav>
        <NavLink destination="/">
          <a>Home</a>
        </NavLink>
        <NavLink destination="/posts">
          <a>Posts</a>
        </NavLink>
      </nav>

      <SignInButton />
    </Container>
  );
}

import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import theme from '../../styles/theme';

import { Container } from './styles';

export function SignInButton(): JSX.Element {
  const [session] = useSession();

  if (session) {
    return (
      <Container onClick={() => signOut()}>
        <FaGithub color={theme.colors.green} size={24} />
        {session.user?.name}
        <MdClose
          style={{ marginRight: 0, marginLeft: 21 }}
          color="#737380"
          size={24}
        />
      </Container>
    );
  }

  return (
    <Container onClick={() => signIn('github')}>
      <FaGithub color={theme.colors.yellow} size={24} />
      Sign in with GitHub
    </Container>
  );
}

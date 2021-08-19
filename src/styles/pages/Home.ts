import styled from 'styled-components';
import theme from '../theme';

export const Container = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.25rem;

  main {
    p {
      ${theme.fonts.secondary_title}
      color: ${theme.colors.titles};
    }

    h1 {
      ${theme.fonts.spotlight};
      color: ${theme.colors.titles};
      margin-top: 2.5rem;

      span {
        color: ${theme.colors.blue};
      }
    }

    h2 {
      width: 18rem;
      ${theme.fonts.text};
      color: ${theme.colors.titles};
      margin-top: 1.5rem;

      strong {
        font-weight: bold;
        color: ${theme.colors.blue};
      }
    }

    button {
      margin-top: 2.5rem;
      padding: 1.25rem 4rem;
      ${theme.fonts.button};
      color: #121214;
      background: ${theme.colors.yellow};
      border: 0;
      border-radius: 100px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

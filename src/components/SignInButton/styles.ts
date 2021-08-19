import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.button`
  margin-left: auto;

  padding: 1rem 1.5rem 1rem 1rem;
  border-radius: 6.25rem;
  border: 0;
  background: ${theme.colors.shape};
  color: ${theme.colors.titles};
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  transition: filter 0.2s;
  will-change: filter;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 1rem;
  }
`;

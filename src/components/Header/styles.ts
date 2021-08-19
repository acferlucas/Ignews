import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  padding: 0 10.375rem;
  align-items: center;
  height: 5rem;
  border-bottom: 2px solid #29292e;

  nav {
    margin-left: 5.125rem;
    display: flex;
    gap: 2rem;

    a {
      position: relative;
      color: ${theme.colors.texts};
      transition: color 0.2s;
      height: 5rem;
      line-height: 5rem;

      &:hover {
        color: ${theme.colors.titles};
      }

      &.active {
        color: ${theme.colors.titles};
        font-weight: bold;
      }

      &.active::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        background: ${theme.colors.yellow};
        position: absolute;
        bottom: 1px;
        left: 0;
      }
    }
  }
`;

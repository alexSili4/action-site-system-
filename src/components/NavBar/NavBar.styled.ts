import styled from '@emotion/styled';
import { IStyledProps } from './NavBar.types';
import { theme } from '@/constants';

export const Nav = styled.nav<IStyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 7 : 4)};
  flex-wrap: wrap;

  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 3 : 1)};
    order: ${({ isRootPage }) => (isRootPage ? 2 : 1)};

    & > svg {
      width: ${({ isRootPage }) => (isRootPage ? 90 : 66)}px;
      height: ${({ isRootPage }) => (isRootPage ? 32 : 24)}px;

      @media (min-width: ${theme.breakpoints.desktop}px) {
        width: 90px;
        height: 32px;
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}px) {
      flex-direction: ${({ isRootPage }) => (isRootPage ? 'column' : 'row')};
      gap: ${({ theme, isRootPage }) => theme.spacing(isRootPage ? 4 : 2)};
    }
  }
`;

// TODO color in theme
export const LogoLinkTitle = styled.span`
  color: #fd4c3c;
  font-family: ${({ theme }) => theme.fontFamily.delaGothicOne};
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

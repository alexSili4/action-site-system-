import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import NavBar from '@/components/NavBar';
import { IProps } from './Header.types';
import Container from '@/components/Container';

// TODO add PromotionsFilter
const Header: FC<IProps> = ({ isRootPage, isDesktop }) => {
  return (
    <StyledHeader>
      <Container>
        <NavBar isRootPage={isRootPage} isDesktop={isDesktop} />
        {/* <div>PromotionsFilter</div> */}
      </Container>
    </StyledHeader>
  );
};

export default Header;

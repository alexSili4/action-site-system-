import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import { IProps } from './Header.types';
import Container from '@GeneralComponents/Container';
import NavBar from '@GeneralComponents/NavBar';
import { useIsPromotionDetailsPage, useIsScrollingUp } from '@/hooks';

const Header: FC<IProps> = ({
  isDesktop,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const { isScrollingUp, isScrolling } = useIsScrollingUp();

  const isMulticolorHeader =
    isPromotionDetailsPage && isScrolling && isScrollingUp;
  const shouldHideHeader = isPromotionDetailsPage && !isScrollingUp;

  return (
    <StyledHeader
      shouldHideHeader={shouldHideHeader}
      isMulticolorHeader={isMulticolorHeader}
      isPromotionDetailsPage={isPromotionDetailsPage}
    >
      <Container>
        <NavBar
          isDesktop={isDesktop}
          isPromotionDetailsPage={isPromotionDetailsPage}
          onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
          onRegisterCodeBtnClickOnPromotionPage={
            onRegisterCodeBtnClickOnPromotionPage
          }
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;

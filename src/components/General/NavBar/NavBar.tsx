import { FC } from 'react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav, StyledLink } from './NavBar.styled';
import NavBarControls from '@GeneralComponents/NavBarControls';
import LocationFilter from '@GeneralComponents/LocationFilter';
import { useIsRootPage, useIsScrollingUp } from '@/hooks';

const NavBar: FC<IProps> = ({
  isDesktop,
  isPromotionDetailsPage,
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isRootPage = useIsRootPage();
  const { isScrolling } = useIsScrollingUp();
  const showShortLogoLinkTitle = !isRootPage && !isDesktop;
  const showFakeNavControls = isRootPage && isDesktop;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';
  const hideLocationFilter =
    (isPromotionDetailsPage && isScrolling) || isRootPage;

  return (
    <Nav isRootPage={isRootPage}>
      {showFakeNavControls && (
        <NavBarControls
          isRootPage={isRootPage}
          onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
          onRegisterCodeBtnClickOnPromotionPage={
            onRegisterCodeBtnClickOnPromotionPage
          }
          isFake
        />
      )}
      <NavBarControls
        isRootPage={isRootPage}
        onRegisterCodeBtnClickOnAllPages={onRegisterCodeBtnClickOnAllPages}
        onRegisterCodeBtnClickOnPromotionPage={
          onRegisterCodeBtnClickOnPromotionPage
        }
      />
      <StyledLink
        to={PagePaths.root}
        isDesktop={isDesktop}
        isRootPage={isRootPage}
      >
        <AtbLogo />
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </StyledLink>
      {!hideLocationFilter && <LocationFilter isRootPage={isRootPage} />}
    </Nav>
  );
};

export default NavBar;

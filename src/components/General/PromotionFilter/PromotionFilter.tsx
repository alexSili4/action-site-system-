import { FC } from 'react';
import {
  Container,
  ShowPromotionsBtn,
  ShowPromotionsBtnTitle,
  PromotionsListContainer,
} from './PromotionFilter.styled';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import SmoothFadeInDropdownList from '@AnimationBlocks/SmoothFadeInDropdownList';
import PromotionsList from '@GeneralComponents/PromotionsList';
import DropdownBackdrop from '@GeneralComponents/DropdownBackdrop';
import { usePromotionFilter } from '@/hooks';
import { IProps } from './PromotionFilter.types';

const PromotionFilter: FC<IProps> = ({ toggleShowSelectPromotionModalWin }) => {
  const {
    onShowListBtnClick,
    showPromotionsList,
    toggleShowPromotionsList,
    onPromotionLinkClick,
  } = usePromotionFilter(toggleShowSelectPromotionModalWin);

  return (
    <>
      {showPromotionsList && (
        <DropdownBackdrop onClick={toggleShowPromotionsList} />
      )}
      <Container>
        <ShowPromotionsBtn
          type='button'
          onClick={onShowListBtnClick}
          showPromotionsList={showPromotionsList}
        >
          <ShowPromotionsBtnTitle>Оберіть акцію</ShowPromotionsBtnTitle>
          <FaChevronDown size={theme.iconSizes.showPromotionsBtn} />
        </ShowPromotionsBtn>
        <SmoothFadeInDropdownList isVisible={showPromotionsList}>
          <PromotionsListContainer>
            <PromotionsList onPromotionLinkClick={onPromotionLinkClick} />
          </PromotionsListContainer>
        </SmoothFadeInDropdownList>
      </Container>
    </>
  );
};

export default PromotionFilter;
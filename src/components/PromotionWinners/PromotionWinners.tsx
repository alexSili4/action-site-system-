import { FC } from 'react';
import PromotionWinnersTable from '@/components/PromotionWinnersTable';
import {
  Container,
  ContentWrap,
  ElementWrap,
  ControlsWrap,
} from './PromotionWinners.styled';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { PagePaths, theme } from '@/constants';
import RegisterCodeLink from '@/components/RegisterCodeLink';
import PromotionPrizeDrawsDatePicker from '@/components/PromotionPrizeDrawsDatePicker';

const PromotionWinners: FC = () => {
  return (
    <Container>
      <PromotionSectionTitle title='Переможці' />
      <ContentWrap>
        <ElementWrap>
          <ControlsWrap>
            <PromotionPrizeDrawsDatePicker />
            <RegisterCodeLink to={PagePaths.code} isHiddenOnMobile />
          </ControlsWrap>
        </ElementWrap>
        <ElementWrap marginTop={theme.spacing(8)} isTable>
          <PromotionWinnersTable />
        </ElementWrap>
        <ElementWrap marginTop={theme.spacing(12)}>
          <RegisterCodeLink to={PagePaths.code} />
        </ElementWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionWinners;
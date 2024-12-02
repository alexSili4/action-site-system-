import { FC } from 'react';
import { IProps } from './PromotionWinnersTableByDateList.types';
import { List } from './PromotionWinnersTableByDateList.styled';
import { getClosestDateIndex } from '@/utils';
// components
import PromotionWinnersTableByDateListItem from '@PromotionDetailsPageComponents/PromotionWinnersTableByDateListItem';

const PromotionWinnersTableByDateList: FC<IProps> = ({ winners }) => {
  const closestDateIndex = getClosestDateIndex(winners);

  return (
    <List>
      {winners.map((winners, index) => {
        const isOpenSection = index === closestDateIndex;

        return (
          <PromotionWinnersTableByDateListItem
            isOpenSection={isOpenSection}
            winners={winners}
            key={index}
          />
        );
      })}
    </List>
  );
};

export default PromotionWinnersTableByDateList;

import { FC } from 'react';
import {
  Button,
  Item,
} from '@GeneralComponents/PaginationBar/PaginationBar.styled';
import { BtnClickEvent } from '@/types/types';
import { IProps } from './PaginationBarBtn.types';

const PaginationBarBtn: FC<IProps> = ({
  number,
  currentPage,
  step,
  setPage,
}) => {
  const isActivePageBtn = number === currentPage;

  const onTargetPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: number });
  };

  return (
    <Item key={number} page={number} currentPage={currentPage} step={step}>
      <Button isActivePageBtn={isActivePageBtn} onClick={onTargetPageBtnClick}>
        {number}
      </Button>
    </Item>
  );
};

export default PaginationBarBtn;
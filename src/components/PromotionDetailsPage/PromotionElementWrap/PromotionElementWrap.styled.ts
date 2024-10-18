import styled from '@emotion/styled';
import { IStyledProps } from './PromotionElementWrap.types';

export const Container = styled.div<IStyledProps>`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    padding-top: ${({ paddingTopMobile }) => paddingTopMobile}px;
    padding-bottom: ${({ paddingBottomMobile }) => paddingBottomMobile}px;
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme, isTable }) =>
      isTable ? '0px' : theme.spacing(5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk}px;
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk}px;
  }
`;
import { PromotionDetailsPageSections } from '@/constants';
import { Prizes } from '@/types/prize.types';
import { ReactNode } from 'react';

export interface IProps {
  prizes: Prizes;
  title: string;
  description: string;
  logo: ReactNode;
  showRegCodeLink?: boolean;
  id?: PromotionDetailsPageSections;
}

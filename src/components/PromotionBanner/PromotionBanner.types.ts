import { BannerDt, BannerMob } from '@/types/promotion.types';
import { PageLocation } from '@/types/types';

export interface IProps extends IStyledProps {
  from: PageLocation | undefined;
  period: string;
  name: string;
}

export interface IStyledProps {
  secondBannerDt: BannerDt;
  secondBannerMob: BannerMob;
}

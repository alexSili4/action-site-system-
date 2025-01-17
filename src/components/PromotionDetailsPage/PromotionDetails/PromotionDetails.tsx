import { FC } from 'react';
import { Container, Content } from './PromotionDetails.styled';
import { useLocation } from 'react-router-dom';
import { PromotionDetailsState } from '@/types/promotion.types';
import { useSetSearchParams } from '@/hooks';
import {
  PromotionDetailsPageSections,
  PromotionsCategoriesKeys,
  SearchParamsKeys,
} from '@/constants';
import { IProps } from './PromotionDetails.types';
import { getFileUrl, getPromotionBannerUrls, getValidPhone } from '@/utils';
// components
import PrizesWheelLogo from '@PromotionDetailsPageComponents/PrizesWheelLogo';
import PromotionDetailsSectionContainer from '@PromotionDetailsPageComponents/PromotionDetailsSectionContainer';
import PromotionPageBreadcrumbs from '@PromotionDetailsPageComponents/PromotionPageBreadcrumbs';
import PromotionBanner from '@PromotionDetailsPageComponents/PromotionBanner';
import PromotionConditions from '@PromotionDetailsPageComponents/PromotionConditions';
import PromotionPrizes from '@PromotionDetailsPageComponents/PromotionPrizes';
import PromotionPrizesBannerIcon from '@PromotionDetailsPageComponents/PromotionPrizesBannerIcon';
import PromotionFAQs from '@PromotionDetailsPageComponents/PromotionFAQs';
import PromotionWinners from '@PromotionDetailsPageComponents/PromotionWinners';
import PromotionContacts from '@PromotionDetailsPageComponents/PromotionContacts';

const PromotionDetails: FC<IProps> = ({
  promotion,
  faqs,
  otherPrizes,
  wheelPrizes,
  conditions,
  winners,
  shops,
}) => {
  const {
    second_banner_mob: secondBannerMob,
    second_banner_dt: secondBannerDt,
    name,
    logo_partner: logoPartner,
    rules_pdf: rulesPdf,
    coverage_type: coverageType,
    hot_line_email: hotLineEmail,
    hot_line_phone: hotLinePhone = '',
    logo,
    hot_line_work_hours: hotLineWorkHours,
    hot_line_text: hotLineText,
    hot_line_text_2: hotLineOtherText,
  } = promotion;
  const { searchParams } = useSetSearchParams();
  const promotionCategorySQ = searchParams.get(SearchParamsKeys.category);
  const { state }: PromotionDetailsState = useLocation();
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: secondBannerDt,
    bannerMob: secondBannerMob,
  });
  const validHotLinePhone = getValidPhone(hotLinePhone ?? '');
  const logoUrl = getFileUrl(logo ?? '');
  const logoPartnerUrl = getFileUrl(logoPartner ?? '');
  const rulesPdfUrl = getFileUrl(rulesPdf ?? '');
  const isNationalPromotion = coverageType === 'national';

  const shouldShowWinnersSection =
    Array.isArray(winners) && Boolean(winners.length);
  const shouldShowContactsSection =
    Boolean(shops.length) && hotLineEmail && hotLinePhone;
  const shouldShowFAQsSection =
    Boolean(faqs.length) &&
    hotLineOtherText &&
    hotLinePhone &&
    hotLineText &&
    hotLineWorkHours;
  const shouldShowWheelPrizesSection = Boolean(wheelPrizes.length);
  const shouldShowOtherPrizesSection = Boolean(otherPrizes.length);
  const shouldShowConditionsSection = Boolean(conditions.length);

  const promotionCategoryState = state?.promotionCategory;
  const from = state?.from;

  const targetPromotionCategory =
    promotionCategoryState ??
    promotionCategorySQ ??
    PromotionsCategoriesKeys.active;

  return (
    <Container>
      <Content>
        <PromotionDetailsSectionContainer>
          <PromotionPageBreadcrumbs
            promotionCategory={targetPromotionCategory}
            promotionTitle={name}
          />
          <PromotionBanner
            from={from}
            secondBannerDt={bannerDtUrl}
            secondBannerMob={bannerMobUrl}
          />
        </PromotionDetailsSectionContainer>
        {shouldShowConditionsSection && (
          <PromotionConditions conditions={conditions} rulesPdf={rulesPdfUrl} />
        )}
        {shouldShowOtherPrizesSection && (
          <PromotionPrizes
            logo={<PromotionPrizesBannerIcon src={logoPartnerUrl} />}
            prizes={otherPrizes}
            title='Призи головного розіграшу'
            description='Унікальний приз від головного партнера'
            showRegCodeLink={false}
            id={PromotionDetailsPageSections.prizes}
          />
        )}
        {shouldShowWheelPrizesSection && (
          <PromotionPrizes
            logo={<PrizesWheelLogo />}
            prizes={wheelPrizes}
            title='Призи «Колеса подарунків»'
            description='Крутіть колесо та вигравайте подарунки'
          />
        )}
        {shouldShowFAQsSection && (
          <PromotionFAQs
            faqs={faqs}
            hotLineOtherText={hotLineOtherText}
            hotLinePhone={hotLinePhone}
            hotLineText={hotLineText}
            hotLineWorkHours={hotLineWorkHours}
            validHotLinePhone={validHotLinePhone}
          />
        )}
        {shouldShowWinnersSection && <PromotionWinners winners={winners} />}
        {shouldShowContactsSection && (
          <PromotionContacts
            shops={shops}
            hotLineEmail={hotLineEmail}
            hotLinePhone={hotLinePhone}
            logoUrl={logoUrl}
            secondBannerDt={bannerDtUrl}
            secondBannerMob={bannerMobUrl}
            isNationalPromotion={isNationalPromotion}
            validHotLinePhone={validHotLinePhone}
          />
        )}
      </Content>
    </Container>
  );
};

export default PromotionDetails;

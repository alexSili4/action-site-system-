import { FC } from 'react';
import { Content } from './RegisterCode.styled';
import { RegPromotionCodeSteps } from '@/constants';
import {
  getFileUrl,
  getPromotionBannerUrls,
  getPromotionDate,
  getRegCodeSteps,
  getShouldShowPrizesWheel,
} from '@/utils';
// components
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterCodeSection from '@RegisterCodePageComponents/RegisterCodeSection';
import PrizesWheelSection from '@RegisterCodePageComponents/PrizesWheelSection';
import RegisterUserSection from '@RegisterCodePageComponents/RegisterUserSection';
import Container from '@GeneralComponents/Container';
import { IProps } from './RegisterCode.types';

const RegisterCode: FC<IProps> = ({
  isFirstStep,
  isSecondStep,
  isThirdStep,
  currentStep,
  promotion,
  partners,
  onSuccessRegisterCode,
  incrementCurrentStep,
}) => {
  const {
    action_type: actionType,
    name,
    hot_line_phone: hotLinePhone,
    hot_line_work_hours: hotLineWorkHours,
    logo,
    date_from: dateFrom,
    date_to: dateTo,
    third_banner_dt: thirdBannerDt,
    third_banner_mob: thirdBannerMob,
    rules_pdf: rulesPdf,
  } = promotion;
  const shouldShowPrizesWheel = getShouldShowPrizesWheel(actionType);
  const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
    bannerDt: thirdBannerDt,
    bannerMob: thirdBannerMob,
  });
  const logoUrl = getFileUrl(logo ?? '');
  const rulesPdfUrl = getFileUrl(rulesPdf);
  const promotionDate = getPromotionDate({ dateFrom, dateTo });
  const steps = getRegCodeSteps({
    stepsSequence: RegPromotionCodeSteps,
    shouldShowPrizesWheel,
  });

  const isRegisterCodeStep = isFirstStep;
  const isPrizesWheelStep = shouldShowPrizesWheel && isSecondStep;

  const showAfterPrizesWheel = shouldShowPrizesWheel && isThirdStep;
  const showInsteadPrizesWheel = !shouldShowPrizesWheel && isSecondStep;
  const isConfirmEmailStep = showAfterPrizesWheel || showInsteadPrizesWheel;

  return (
    <Content>
      {!isPrizesWheelStep && (
        <Container>
          <RegisterCodeStepsBar
            isHiddenOnMobile={false}
            steps={steps}
            currentStep={currentStep}
          />
        </Container>
      )}
      {isRegisterCodeStep && (
        <Container>
          <RegisterCodeSection
            hotLinePhone={hotLinePhone}
            hotLineWorkHours={hotLineWorkHours}
            logoUrl={logoUrl}
            name={name}
            promotionDate={promotionDate}
            rulesPdf={rulesPdfUrl}
            thirdBannerDt={bannerDtUrl}
            thirdBannerMob={bannerMobUrl}
            steps={steps}
            currentStep={currentStep}
            onSuccessRegisterCode={onSuccessRegisterCode}
          />
        </Container>
      )}
      {isPrizesWheelStep && (
        <PrizesWheelSection
          partners={partners}
          spinningMs={8000}
          maxSpins={5}
          moveToNextStep={incrementCurrentStep}
        />
      )}
      {isConfirmEmailStep && (
        <Container>
          <RegisterUserSection
            steps={steps}
            currentStep={currentStep}
            hotLinePhone={hotLinePhone}
            hotLineWorkHours={hotLineWorkHours}
            logoUrl={logoUrl}
            name={name}
            promotionDate={promotionDate}
            thirdBannerDt={bannerDtUrl}
            thirdBannerMob={bannerMobUrl}
          />
        </Container>
      )}
    </Content>
  );
};

export default RegisterCode;

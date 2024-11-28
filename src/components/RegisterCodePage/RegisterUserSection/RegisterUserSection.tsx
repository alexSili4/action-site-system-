import { FC, useState } from 'react';
import {
  Container,
  ContentWrap,
  RegisterUserFormWrap,
  SuccessRegisterUserMsgWrap,
  SuccessRegisterUserMsgTitle,
  SuccessRegisterUserMsg,
  SuccessRegisterUserMsgContainer,
  CabinetLink,
  Text,
} from './RegisterUserSection.styled';
import { IProps } from './RegisterUserSection.types';
import { PagePaths } from '@/constants';
// components
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterUserForm from '@RegisterCodePageComponents/RegisterUserForm';

const RegisterUserSection: FC<IProps> = ({
  steps,
  currentStep,
  logoUrl,
  name,
  promotionDate,
  thirdBannerMob,
  thirdBannerDt,
  hotLinePhone,
  hotLineWorkHours,
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const setShowSuccessMsgState = () => {
    setShowSuccessMsg(true);
  };

  return (
    <Container>
      <RegisterCodeBanner
        logoUrl={logoUrl}
        name={name}
        promotionDate={promotionDate}
        thirdBannerDt={thirdBannerDt}
        thirdBannerMob={thirdBannerMob}
      />
      <ContentWrap>
        {showSuccessMsg ? (
          <SuccessRegisterUserMsgContainer>
            <SuccessRegisterUserMsgWrap>
              <SuccessRegisterUserMsgTitle>
                Дякуємо, ________!
              </SuccessRegisterUserMsgTitle>
              <SuccessRegisterUserMsg>
                Ваш акційний код буде зареєстровано протягом доби. Ви можете
                перевірити статус акційного коду та сертифікату у Вашому
                Особистому кабінеті.
              </SuccessRegisterUserMsg>
            </SuccessRegisterUserMsgWrap>
            <CabinetLink to={PagePaths.cabinet}>Особистий кабінет</CabinetLink>
            <Text>
              Якщо Вам не вдалося зареєструвати акційний код зверніться на
              гарячу лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
            </Text>
          </SuccessRegisterUserMsgContainer>
        ) : (
          <RegisterUserFormWrap>
            <RegisterCodeStepsBar
              isHiddenOnMobile
              steps={steps}
              currentStep={currentStep}
            />
            <RegisterUserForm setShowSuccessMsgState={setShowSuccessMsgState} />
          </RegisterUserFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default RegisterUserSection;

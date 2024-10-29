import { FC, useEffect, useRef, useState } from 'react';
import {
  Container,
  RulesCard,
  RulesLink,
  RulesLinkTitle,
  Card,
  TitleWrap,
  Title,
  Cover,
  StepLabelWrap,
  StepLabel,
  Image,
} from './PromotionConditionsSliderContainer.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionConditionsSliderContainer.types';
import { DivRef } from '@/types/types';
import { useTargetPromotionData } from '@/hooks';
import { getFileUrl } from '@/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromotionConditionsListAnimation from '@PromotionDetailsPageComponents/PromotionConditionsListAnimation';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';
import { IoDocumentOutline } from 'react-icons/io5';

const PromotionConditionsSliderContainer: FC<IProps> = ({ conditions }) => {
  const [slideHeight, setSlideHeight] = useState<number | null>(null);
  const sliderContainerRef = useRef<DivRef>(null);
  const { rulesPdf } = useTargetPromotionData();
  const rulesPdfUrl = getFileUrl(rulesPdf);
  const sliderContainerHeight = sliderContainerRef.current?.scrollHeight;

  useEffect(() => {
    console.log(sliderContainerHeight);
    if (sliderContainerHeight) {
      setSlideHeight(sliderContainerHeight);
    }
  }, [sliderContainerHeight]);

  return (
    <Container
      paddingSideMobile={theme.spacing(4)}
      paddingSideDesk={theme.spacing(8)}
      ref={sliderContainerRef}
      slideHeight={slideHeight}
    >
      <Swiper
        slidesPerView={1.075}
        grabCursor={true}
        breakpoints={{
          [theme.breakpoints.desktop]: { slidesPerView: 3.077 },
        }}
      >
        {conditions.map(
          (
            {
              title,
              gift_num: giftNum,
              img_source_json: imgSourceJson,
              main_img: mainImg,
            },
            idx
          ) => {
            const animationData = imgSourceJson && JSON.parse(imgSourceJson);
            const isAnimation = Boolean(imgSourceJson);
            const mainImgUrl = getFileUrl(mainImg);

            return (
              <SwiperSlide key={idx}>
                <Card>
                  <TitleWrap>
                    <Title>{title}</Title>
                  </TitleWrap>
                  <Cover>
                    {isAnimation ? (
                      <PromotionConditionsListAnimation
                        animationData={animationData}
                      />
                    ) : (
                      <Image src={mainImgUrl} />
                    )}
                    <StepLabelWrap>
                      <StepLabel>{giftNum}</StepLabel>
                    </StepLabelWrap>
                  </Cover>
                </Card>
              </SwiperSlide>
            );
          }
        )}
        {slideHeight && (
          <SwiperSlide key={rulesPdfUrl}>
            <RulesCard bgImgUrl={rulesCardBg}>
              <RulesLink
                href={rulesPdfUrl}
                download
                target='_blank'
                rel='noopener noreferrer'
              >
                <RulesLinkTitle>Правила акції</RulesLinkTitle>
                <IoDocumentOutline size={theme.iconSizes.rulesLink} />
              </RulesLink>
            </RulesCard>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default PromotionConditionsSliderContainer;

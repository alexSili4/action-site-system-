import { useEffect, useState } from 'react';
import promotionsService from '@/services/promotions.service';
import { Conditions } from '@/types/condition.types';
import { Prizes } from '@/types/prize.types';
import { FAQs } from '@/types/faqs.types';
import { IUsePromotionDetailsPage } from '@/types/hooks.types';
import { WinnersByDates } from '@/types/winner.types';
import { Shops } from '@/types/shop.types';
import usePromotion from './usePromotion';
import useDynamicId from './useDynamicId';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';

const usePromotionDetailsPage = (): IUsePromotionDetailsPage => {
  const [conditions, setConditions] = useState<Conditions>([]);
  const [otherPrizes, setOtherPrizes] = useState<Prizes>([]);
  const [wheelPrizes, setWheelPrizes] = useState<Prizes>([]);
  const [faqs, setFaqs] = useState<FAQs>([]);
  const [winners, setWinners] = useState<WinnersByDates>([]);
  const [shops, setShops] = useState<Shops>([]);
  const promotionId = useDynamicId();
  const { promotion, isNotFoundError } = usePromotion();
  const navigate = useServiceUnavailablePageNavigate();
  const shouldShowPromotionDetails = !isNotFoundError;

  useEffect(() => {
    const getPromotionConditions = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getConditions(promotionId);
        setConditions(response);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionConditions(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionWheelPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const response = await promotionsService.getWheelPrizes(promotionId);
        setWheelPrizes(response);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionWheelPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionOtherPrizes = async (
      promotionId: string
    ): Promise<void> => {
      try {
        const generalPrizes = promotionsService.getGeneralPrizes(promotionId);
        const presentPrizes = promotionsService.getPresentPrizes(promotionId);
        const response = await Promise.all([generalPrizes, presentPrizes]);
        const data = response.flat();
        setOtherPrizes(data);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionOtherPrizes(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionFaqs = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getFAQs(promotionId);
        setFaqs(response);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionFaqs(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionWinners = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getWinners(promotionId);
        setWinners(response);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionWinners(promotionId);
  }, [promotionId]);

  useEffect(() => {
    const getPromotionShops = async (promotionId: string): Promise<void> => {
      try {
        const response = await promotionsService.getShops(promotionId);
        setShops(response);
      } catch (error) {
        navigate(true);
      }
    };

    getPromotionShops(promotionId);
  }, [promotionId]);

  return {
    conditions,
    otherPrizes,
    wheelPrizes,
    faqs,
    winners,
    shops,
    promotion,
    shouldShowPromotionDetails,
  };
};

export default usePromotionDetailsPage;

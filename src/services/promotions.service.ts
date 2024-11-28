import { Promotions, IPromotion } from '@/types/promotion.types';
import { Conditions } from '@/types/condition.types';
import { Prizes } from '@/types/prize.types';
import { FAQs } from '@/types/faqs.types';
import { WinnersByDates } from '@/types/winner.types';
import HttpService from './http.service';
import { Shops } from '@/types/shop.types';

class PromotionsService extends HttpService {
  constructor() {
    super();
  }

  async getPromotions(cityId: string): Promise<Promotions> {
    const response = await this.get<Promotions>(
      {
        url: `promotions/city?city_id=${cityId}`,
      },
      false
    );
    return response.data;
  }

  async getPromotionById(actionId: string): Promise<IPromotion> {
    const response = await this.get<IPromotion>(
      {
        url: `promotions/promo?action_id=${actionId}`,
      },
      false
    );

    return response.data;
  }

  async getConditions(actionId: string): Promise<Conditions> {
    const response = await this.get<Conditions>(
      {
        url: `promotions/conditions?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getGeneralPrizes(actionId: string): Promise<Prizes> {
    const response = await this.get<Prizes>(
      {
        url: `promotions/gifts?action_id=${actionId}&gift_type=general`,
      },
      false
    );
    return response.data;
  }

  async getWheelPrizes(actionId: string): Promise<Prizes> {
    const response = await this.get<Prizes>(
      {
        url: `promotions/gifts?action_id=${actionId}&gift_type=wheel`,
      },
      false
    );
    return response.data;
  }

  async getPresentPrizes(actionId: string): Promise<Prizes> {
    const response = await this.get<Prizes>(
      {
        url: `promotions/gifts?action_id=${actionId}&gift_type=present`,
      },
      false
    );
    return response.data;
  }

  async getFAQs(actionId: string): Promise<FAQs> {
    const response = await this.get<FAQs>(
      {
        url: `promotions/queries?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getWinners(actionId: string): Promise<WinnersByDates> {
    const response = await this.get<WinnersByDates>(
      {
        url: `promotions/winners?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getShops(actionId: string): Promise<Shops> {
    const response = await this.get<Shops>(
      {
        url: `promotions/shops?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }
}

const promotionsService = new PromotionsService();

export default promotionsService;

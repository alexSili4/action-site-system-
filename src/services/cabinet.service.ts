import { Headers } from '@/constants';
import HttpService from './http.service';
import {
  UserCodes,
  IGetClientCodes,
  IGetClientCodesProps,
} from '@/types/userCode.types';
import {
  UserPrizes,
  IGetClientPrizes,
  IGetClientPrizesProps,
} from '@/types/userPrize.types';

class CabinetService extends HttpService {
  constructor() {
    super();
  }

  async getClientCodes({
    page,
    sort,
  }: IGetClientCodesProps): Promise<IGetClientCodes> {
    const { data, headers } = await this.get<UserCodes>(
      {
        // TODO fix
        url: `client/my-codes?page=${page}&per-page=4&sort=${sort}`,
      },
      false
    );

    const totalPages = headers[Headers.totalPages];

    return { data, totalPages };
  }

  async getClientPrizes({
    page,
    sort,
  }: IGetClientPrizesProps): Promise<IGetClientPrizes> {
    const { data, headers } = await this.get<UserPrizes>(
      {
        // TODO fix
        url: `client/my-gifts?page=${page}&per-page=4&sort=${sort}`,
      },
      false
    );

    const totalPages = headers[Headers.totalPages];

    return { data, totalPages };
  }
}

const cabinetService = new CabinetService();

export default cabinetService;

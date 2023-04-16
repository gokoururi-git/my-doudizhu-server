import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';
import { IPlayerEntity } from 'app/common/type';
import { PlayerSex } from 'app/common/enum';

@HTTPController({
  path: '/player',
})
export class PlayerController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/get_info',
  })
  async getMyInfo(): Promise<IPlayerEntity> {
    this.logger.info('getMyInfo');
    return {
      id: '1',
      nickName: '张三',
      sex: PlayerSex.male,
      coin: 5000
    };
  }

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: '/register',
  })
  async registerPlayer(): Promise<IPlayerEntity> {
    this.logger.info('getMyInfo');
    return {
      id: '1',
      nickName: '张三',
      sex: PlayerSex.male,
      coin: 5000
    };
  }
}

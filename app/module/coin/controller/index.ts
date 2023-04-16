import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';

@HTTPController({
  path: '/coin',
})
export class PlayerController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/charge',
  })
  async charge() {
    this.logger.info('getMyInfo');
  }
}

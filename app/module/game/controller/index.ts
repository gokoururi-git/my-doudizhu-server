import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';
import { PokerRuleSetKey } from 'app/common/enum';

@HTTPController({
  path: '/game',
})
export class PlayerController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: '/submit',
  })
  async submit(): Promise<{rule: PokerRuleSetKey}> {
    this.logger.info('getMyInfo');
    return {
      rule: PokerRuleSetKey.BOMB
    }
  }
}

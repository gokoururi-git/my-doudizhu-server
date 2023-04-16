import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum } from '@eggjs/tegg';
import { IRoomEntity } from 'app/common/type';
import { RoomState } from 'app/common/enum';

@HTTPController({
  path: '/room',
})
export class RoomController {
  @Inject()
  logger: EggLogger;

  @HTTPMethod({
    method: HTTPMethodEnum.PUT,
    path: '/create',
  })
  async createRoom(): Promise<IRoomEntity> {
    this.logger.info('createRoom');
    return {
      id: '1',
      players: [{
        id: '1',
        ready: true,
        owner: true
      }],
      state: RoomState.WAITTING_PLAYERS
    };
  }

  @HTTPMethod({
    method: HTTPMethodEnum.DELETE,
    path: '/quit',
  })
  async quitRoom() {
    this.logger.info('quitRoom');
  }

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: '/invite',
  })
  async invitePlayer() {
    this.logger.info('invitePlayer');
  }

  @HTTPMethod({
    method: HTTPMethodEnum.POST,
    path: '/kick',
  })
  async kickPlayer() {
    // const { roomId, targetId } = {};
    // const { playerId } = {};
    // 预校验
    // 1. 根据roomId查询players
    // 2. 考虑：
    //    - targetId在不在群里
    //    - roomId的状态
    //    - playerId的权限
    this.logger.info('kickPlayer');
  }
}

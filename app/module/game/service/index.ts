import { EggLogger } from 'egg';
import { SingletonProto, AccessLevel, Inject } from '@eggjs/tegg';
import { IPokerEntity, TPokerKeyCount, TPokerKeyCountToKey } from '../../../common/type';
import { PokerKey, PokerRuleSetKey } from '../../../common/enum';
import { isDecreaseArray, isIncreaseArray, isSameValueArray } from '../../../common/utils';

@SingletonProto({
  // 如果需要在上层使用，需要把 accessLevel 显示声明为 public
  accessLevel: AccessLevel.PUBLIC,
})
export class GameService {
  // 注入一个 logger
  @Inject()
  logger: EggLogger;

  private _getPokerKeyCountFromPokerList(pokerList: IPokerEntity[]): TPokerKeyCount {
    const result = new Map<PokerKey, number>();
    for (const { key } of pokerList) {
      const previousValue = result.get(key);
      result.set(key, previousValue ? previousValue + 1 : 1);
    }
    return result;
  }

  private _getPokerCountToKeyMap(pokerList: IPokerEntity[], pokerKeyCount?: TPokerKeyCount): TPokerKeyCountToKey {
    const result = new Map<number, PokerKey[]>();
    const fulfilledPokerKeyCount = pokerKeyCount || this._getPokerKeyCountFromPokerList(pokerList);
    for (const [key, count] of fulfilledPokerKeyCount.entries()) {
      const previousValue = result.get(count);
      result.set(count, previousValue ? [...previousValue, key] : [key]);
    }
    return result;
  }

  private _isSequence(pokerKeyArray: PokerKey[]): boolean {
    return (isIncreaseArray(pokerKeyArray)) || isDecreaseArray(pokerKeyArray);
  }

  private _getPokerRuleSetFromPokerList(pokerList: IPokerEntity[]): PokerRuleSetKey {
    const pokerKeyCount = this._getPokerKeyCountFromPokerList(pokerList);
    if (pokerKeyCount.size === 1 && pokerKeyCount.values().next().value === 1) {
      return PokerRuleSetKey.SINGLE;
    }
    if (pokerKeyCount.size === 1 && pokerKeyCount.values().next().value === 2) {
      return PokerRuleSetKey.PAIR;
    }
    if (pokerKeyCount.size === 1 && pokerKeyCount.values().next().value === 3) {
      return PokerRuleSetKey.THREE;
    }
    if (pokerKeyCount.size === 1 && pokerKeyCount.values().next().value === 4) {
      return PokerRuleSetKey.BOMB;
    }
    const pokerKeyArray = Array.from(pokerKeyCount.keys());
    const pokerValueArray = Array.from(pokerKeyCount.values());
    if (pokerKeyCount.size === 2 && isSameValueArray([3, 1], pokerValueArray)) {
      return PokerRuleSetKey.THREE_WITH_SINGLE;
    }
    if (pokerKeyCount.size === 2 && isSameValueArray([3, 2], pokerValueArray)) {
      return PokerRuleSetKey.THREE_WITH_PAIR;
    }
    if (pokerKeyCount.size >= 3 && pokerValueArray.every(value => value === 1) && this._isSequence(pokerKeyArray)) {
      return PokerRuleSetKey.SEQUENCE;
    }
    if (pokerKeyCount.size >= 3 && pokerValueArray.every(value => value === 2) && this._isSequence(pokerKeyArray)) {
      return PokerRuleSetKey.SEQUENCE_PAIR;
    }
    if (pokerKeyCount.size >= 3 && pokerValueArray.every(value => value === 3) && this._isSequence(pokerKeyArray)) {
      return PokerRuleSetKey.SEQUENCE_THREE;
    }
    if (pokerKeyCount.size >= 3 && pokerValueArray.every(value => value === 4) && this._isSequence(pokerKeyArray)) {
      return PokerRuleSetKey.SEQUENCE_BOMB;
    }
    const PokerCountToKeyMap = this._getPokerCountToKeyMap(pokerList, pokerKeyCount);
    if (pokerKeyCount.size === 4 && isSameValueArray([3, 1, 3, 1], pokerValueArray) && this._isSequence(PokerCountToKeyMap.get(3)!)) {
      return PokerRuleSetKey.PLANE;
    }
    return PokerRuleSetKey.INVALID;
  }

  recognize(pokerList: IPokerEntity[]): PokerRuleSetKey {
    return this._getPokerRuleSetFromPokerList(pokerList);
  }
}
import { PokerRuleSetKey } from "./enum";

export const pokerRuleName = {
    [PokerRuleSetKey.INVALID]: '无效',
    [PokerRuleSetKey.SINGLE]: '单牌',
    [PokerRuleSetKey.PAIR]: '对子',
    [PokerRuleSetKey.THREE]: '三张',
    [PokerRuleSetKey.BOMB]: '炸',
    [PokerRuleSetKey.THREE_WITH_SINGLE]: '三带一',
    [PokerRuleSetKey.THREE_WITH_PAIR]: '三带二',
    [PokerRuleSetKey.SEQUENCE]: '顺子',
    [PokerRuleSetKey.SEQUENCE_PAIR]: '连对',
    [PokerRuleSetKey.SEQUENCE_THREE]: '连三',
    [PokerRuleSetKey.SEQUENCE_BOMB]: '连炸',
    [PokerRuleSetKey.PLANE]: '飞机',
}